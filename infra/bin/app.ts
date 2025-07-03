#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BackendStack } from '../lib/BackendStack';

const app = new cdk.App();
new BackendStack(app, 'BackendStack');
