var list_div = document.getElementsByTagName('div');
var comp_logo;
for (var i = 0; i < list_div.length; i++) {
	if(list_div[i].className == 'company-logo'){
		comp_logo = list_div[i].innerHTML;
		var x = comp_logo.match(/src="[^ ]*"/g);
		var temp = x[0].match(/"[^ ]*"/g)[0];
		temp.replace(/"/g, '')
		//console.log(temp);
		chrome.storage.sync.set({
			'company_logo_url': temp}, function () {
			// alert('save pop_href successful');
        }
	);
	}
}
