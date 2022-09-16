function onResponse(context, url, request, response) {
    console.log(url);
    newLocation = url + "?ttt=555"
    console.log(newLocation);
    // Add or update Response Header
    delete response.body;
    delete response.rawBody;
    response.statusCode = 302;
    response.headers["Location"] = newLocation;
    response.headers["Connection"] = "keep-alive";
    response.headers["Content-Type"] = "text/html; charset=utf-8";
    console.log(response);
    return response;
}