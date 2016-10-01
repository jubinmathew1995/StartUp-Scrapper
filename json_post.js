var product = {};

chrome.storage.sync.get('company_logo_url', function (data) {
	var x = data.company_logo_url.replace(/"/g, '')
	product.image = x;
	//console.log(x);
});
chrome.storage.sync.get('name', function (data) {
	var x = data.name;
	product.title = x;
	//console.log(x);
});
chrome.storage.sync.get('location', function (data) {
	var x = data.location;
	product.location = x;
	//console.log(x);
});
(function($){
$.post("https://app.crowdproduct.com/api/product",
        product,
        function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        });
 })(jQuery); 
console.log(product);


