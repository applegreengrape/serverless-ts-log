export const lambdaHandler = async (event: any, context: any) => {
    return {
        quote: event["quote"],
        odd : event["odd"],
        msg : "yep, you hit the even function"
    }
}
