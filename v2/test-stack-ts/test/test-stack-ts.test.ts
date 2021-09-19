import * as cdk from 'aws-cdk-lib';
import * as TestStackTs from '../lib/test-stack-ts-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new TestStackTs.TestStackTsStack(app, 'MyTestStack');
    // THEN
    const actual = app.synth().getStackArtifact(stack.artifactId).template;
    expect(actual.Resources ?? {}).toEqual({});
});
