import { APIGatewayProxyEvent } from "aws-lambda";
import { lambdaHandler } from "../../src/hey";

describe('Unit test for app handler', function () {
    it('verifies successful response', async () => {
        const event: APIGatewayProxyEvent = {
        } as any
        const result = await lambdaHandler(event)
        expect(result.quote).toContain(`👋 hey`);
    });
});