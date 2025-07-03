#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BackendStack } from '../lib/BackendStack';
import { FrontendStack } from '../lib/FrontendStack';

const app = new cdk.App();
new BackendStack(app, 'BackendStack');
new FrontendStack(app, 'FrontendStack');
