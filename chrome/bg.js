importScripts("aws-sdk-2.1116.0-sw.js");

chrome.runtime.onMessageExternal.addListener(
    function (request, sender, sendResponse) {
        if (["127.0.0.1", "localhost", "former2.com", "www.former2.com"].includes(new URL(sender.url).hostname)) {
            if (request.action == "ping") {
                sendResponse({
                    'success': true,
                    'data': {}
                });
            } else if (request.action == "configUpdate") {
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
                try {
                    if (request.config) {
                        request.config.credentials = new AWS.Credentials(
                            request.config.credentials[0],
                            request.config.credentials[1],
                            request.config.credentials[2]
                        );
        
                        AWS.config.update(request.config);
                    }

                    var svc = new AWS[request.service.name](request.service.properties);

                    svc[request.service_action](request.params, function (err, data) {
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
                } catch (err) {
                    sendResponse({
                        'success': false,
                        'error': `The call to the SDK failed (${request.service.name}.${request.service_action}). You may need to update the Former2 Helper extension.`,
                        'data': null
                    });
                }
            } else {
                console.log("Got unknown request");
                console.dir(request);
            }
        } else {
            console.log("Received request from non-whitelisted URL: " + sender.url);
        }
    }
);
