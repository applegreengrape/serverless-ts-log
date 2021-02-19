import { APIGatewayProxyEvent } from "aws-lambda";
import { lambdaHandler } from "../../hey";

describe('Unit test for app handler', function () {
    it('verifies successful response', async () => {
        const event: APIGatewayProxyEvent = {
        } as any
        const result = await lambdaHandler(event)

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(`👋 hey`);
    });
});