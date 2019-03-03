/*function constructServiceByName(name, props) {
    if (name == "Lambda")
        return new AWS.Lambda(props);
    if (name == "S3")
        return new AWS.S3(props);
    
    throw "Unsupported Service";
}*/

chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
        if (["127.0.0.1", "former2.com", "www.former2.com"].includes(new URL(sender.url).hostname)) {
            if (request.action == "configUpdate") {
                request.obj.credentials = new AWS.Credentials(
                    request.obj.credentials[0],
                    request.obj.credentials[1],
                    request.obj.credentials[2]
                );

                AWS.config.update(request.obj);

                sendResponse({
                    'success': true,
                    'data': {}
                });
            } else if (request.action == "serviceAction") {
                var svc = new AWS[request.service.name](request.service.properties);
                
                //var svc = constructServiceByName(request.service.name, request.service.properties);

                svc[request.service_action](request.params, function(err, data) {
                    if (err) {
                        sendResponse({
                            'success': false,
                            'error': err,
                            'data': data
                        });
                    } else {
                        sendResponse({
                            'success': true,
                            'data': data
                        });
                    }
                });
            } else {
                console.log("Got unknown request");
                console.dir(request);
            }
        } else {
            console.log("Recieved request from non-whitelisted URL: " + sender.url);
        }
    }
);
