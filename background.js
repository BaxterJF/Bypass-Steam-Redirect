
chrome.webRequest.onBeforeRequest.addListener(

    function (details) {
    	var url = details.url;
    	var host = url.substring(43);

    	return { redirectUrl: host };
    },

    {
    	urls: ["*://steamcommunity.com/linkfilter/*"],
    	types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },

    ["blocking"]

);