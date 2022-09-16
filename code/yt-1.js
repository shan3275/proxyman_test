const regex = /(^https?:\/\/[\w-]+\.googlevideo\.com\/(?!dclk_video_ads).+?)&ctier=L(&.+?),ctier,(.+)/gm;
let m;
let group1;
let group2;
let group3;
let newLocation;

function onResponse(context, url, request, response) {
    console.log(url);
    while ((m = regex.exec(url)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            if (groupIndex == 1) {
              group1 = match;
            } else if (groupIndex == 2) {
                group2 = match;
            } else if (groupIndex == 3) {
                group3 = match;
            }
        });
    }
    console.log(`group1: ${group1}`);
    console.log(`group2: ${group2}`);
    console.log(`group3: ${group3}`);
    newLocation = group1 + group2 + group3
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