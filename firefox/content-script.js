document.addEventListener('f2request', msg => {
    var detail = JSON.parse(msg.detail);

    browser.runtime.sendMessage(
        detail.data
    ).then(data => {
        var event = new CustomEvent('f2response', {
            detail: JSON.stringify({
                id: detail.id,
                success: true,
                data: data
            })
        });
        document.dispatchEvent(event);
    }, data => {
        var event = new CustomEvent('f2response', {
            detail: JSON.stringify({
                id: detail.id,
                success: false,
                data: data
            })
        });
        document.dispatchEvent(event);
    });
});