var list_h2 = document.getElementsByTagName('h2')[0].innerText;
var list_div = document.getElementsByTagName('div');
var list_h1 = document.getElementsByTagName('h1');
var list_span = document.getElementsByTagName('span');

var loca,url,name,comp_logo,temp;

for (var i = 0; i < list_span.length; i++) {
	if(list_span[i].className == "js-location_tag_holder"){
		loca = list_span[i].innerText;
		//console.log(loca);
	}
}	
for (var i = 0; i < list_span.length; i++) {
	if(list_span[i].className == "link"){
		url = list_span[i].innerText.trim();
		//console.log(url);
	}
}
for (var i = 0; i < list_h1.length; i++) {
	if(list_h1[i].className.match(/js-startup_name[-a-zA-z ]*/g)){
		name = list_h1[i].innerText;
		//console.log(name);
	}
}
for (var i = 0; i < list_div.length; i++) {
	if(list_div[i].className == 'company-logo'){
		comp_logo = list_div[i].innerHTML;
		var x = comp_logo.match(/src="[^ ]*"/g);
		temp = x[0].match(/"[^ ]*"/g)[0];
		temp.replace('\"',"");
		//console.log(temp);
	}
}
//console.log(list_h2);


console.log(name);
console.log(loca);
console.log(url);
console.log(list_h2);
console.log(temp);
var data = {'title':name,
			'location':loca,
			'url':url,
			'description':list_h2,
			'image':temp
		};
chrome.storage.sync.set({
		'data': data
			}, function () {
				//console.log()
				console.log('Storage successful');
    });