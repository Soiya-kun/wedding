import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AttributeType, Table, BillingMode } from 'aws-cdk-lib/aws-dynamodb';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { HttpApi, HttpMethod, CorsHttpMethod } from 'aws-cdk-lib/aws-apigatewayv2';
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations';

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new Table(this, 'RsvpTable', {
      tableName: 'RsvpTable',
      partitionKey: { name: 'token', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      timeToLiveAttribute: 'ttl',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const fn = new NodejsFunction(this, 'RsvpHandler', {
      runtime: Runtime.NODEJS_20_X,
      entry: 'src/handler.ts',
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    const countFn = new NodejsFunction(this, 'CountHandler', {
      runtime: Runtime.NODEJS_20_X,
      entry: 'src/count.ts',
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    table.grantWriteData(fn);
    table.grantReadData(countFn);

    const integration = new HttpLambdaIntegration('RsvpIntegration', fn);
    const countIntegration = new HttpLambdaIntegration('CountIntegration', countFn);

    const httpApi = new HttpApi(this, 'HttpApi', {
      corsPreflight: {
        allowOrigins: ['*'],
        allowMethods: [
          CorsHttpMethod.POST,
          CorsHttpMethod.GET,
          CorsHttpMethod.OPTIONS,
        ],
        allowHeaders: ['content-type'],
      },
    });

    httpApi.addRoutes({
      path: '/rsvp',
      methods: [HttpMethod.POST],
      integration,
    });

    httpApi.addRoutes({
      path: '/count',
      methods: [HttpMethod.GET],
      integration: countIntegration,
    });

    new cdk.CfnOutput(this, 'HttpApiUrl', {
      value: httpApi.apiEndpoint,
    });
  }
}
