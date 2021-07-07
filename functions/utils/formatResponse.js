module.exports = (statusCode, body) => {
    return {
        statusCode,
        body: JSON.stringify(body),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Conrol-Allow-Headers": "Authorization, Content-Type"
        }
    }
}