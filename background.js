
chrome.browserAction.onClicked.addListener(function(){
	chrome.tabs.executeScript(null, {file: 'jquery.min.js'});
	chrome.tabs.executeScript(null, {file: 'http://code.jquery.com/jquery-migrate-1.2.1.min.js/jquery.min.js'});
    chrome.tabs.executeScript(null, {file: 'extract_div.js'});
    chrome.tabs.executeScript(null, {file: 'extract_name.js'});
    chrome.tabs.executeScript(null, {file: 'extract_span.js'});
    chrome.tabs.executeScript(null, {file: 'json_post.js'});
});
