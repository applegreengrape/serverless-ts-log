import { 
    APIGatewayProxyEvent, 
    APIGatewayProxyResult
} from "aws-lambda";

import "popular-movie-quotes";

export const lambdaHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const movieQuote = require("popular-movie-quotes");
    console.log(movieQuote.getRandomQuote());
    let quote = movieQuote.getRandomQuote()
    return {
        statusCode: 200,
        body: `👋 hey, ${quote}`
    }
}