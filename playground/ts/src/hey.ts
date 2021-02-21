/*
import { 
    APIGatewayProxyEvent, 
    APIGatewayProxyResult
} from "aws-lambda";
--> it is no longer lambda proxy integration, it is custom lambda integration
*/

import "popular-movie-quotes";

export const lambdaHandler = async () => {
    const movieQuote = require("popular-movie-quotes");
    console.log(movieQuote.getRandomQuote());
    let quote = movieQuote.getRandomQuote()
    if (quote.length % 2 == 0 ){
        return {
            quote: `👋 hey, ${quote}`,
            odd : false,
        }
    }else{
        return {
            quote: `👋 hey, ${quote}`,
            odd : true,
        }
    }
}
