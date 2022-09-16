function onResponse(context, url, request, response) {
    console.log(url);
    // Add or update Response Header
    response.headers["X-Proxyman-Key"] = "test-Value";
    response.headers.id = 200;
    response.body["TAG"] = "HELLO WORLD";
    console.log(response);
    return response;
}