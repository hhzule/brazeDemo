#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { RestwrapperStack } from '../lib/restwrapper-stack';

const app = new cdk.App();
new RestwrapperStack(app, 'RestwrapperStack');
