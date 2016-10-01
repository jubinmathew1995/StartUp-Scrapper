var list_h1 = document.getElementsByTagName('h1');
var name;
for (var i = 0; i < list_h1.length; i++) {
	if(list_h1[i].className.match(/js-startup_name[-a-zA-z ]*/g)){
		name = list_h1[i].innerText;
		//console.log(name);
		chrome.storage.sync.set({
			'name': name}, function () {
			// alert('save pop_href successful');
        });
	}
}