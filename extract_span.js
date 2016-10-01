var list_span = document.getElementsByTagName('span');
var loca, market_tags, company_size;
for (var i = 0; i < list_span.length; i++) {
	if(list_span[i].className == "js-location_tag_holder"){
		loca = list_span[i].innerText;
		//console.log(loca);
		chrome.storage.sync.set({
			'location': loca}, function () {
			// alert('save pop_href successful');
        });
	}
}
for (var i = 0; i < list_span.length; i++) {
	if(list_span[i].className == "js-market_tags"){
		market_tags = list_span[i].innerText;
		//console.log(market_tags);
		chrome.storage.sync.set({
			'market': market_tags}, function () {
			// alert('save pop_href successful');
        });
	}
}
for (var i = 0; i < list_span.length; i++) {
	if(list_span[i].className == "js-company_size"){
		company_size = list_span[i].innerText;
		//console.log(company_size);
		chrome.storage.sync.set({
			'size': company_size}, function () {
			// alert('save pop_href successful');
        });
	}
}	
