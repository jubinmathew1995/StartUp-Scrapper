document.addEventListener('DOMContentLoaded', function () {
    var x, m;
    chrome.storage.sync.get('data', function (data) {
        x = data.data;
        console.log(x);
        m = x.image.replace('\"', "");
		if(m=='' || m== null)
		{
			document.getElementById('log').alt = "No Image Found";
			m = "No Image Found";
		}
		else
		{
			document.getElementById('log').src = m;
		}
        document.getElementById('name').innerHTML = x.title;
        document.getElementById('desc').innerHTML = x.description;
        document.getElementById('url').innerText = x.url;
        document.getElementById('loc').innerHTML = x.location;
		//console.log(x.title,x.location,x.url,x.description,m);
        $.post("https://beta.crowdproduct.com/api/product",
		//$.post("https://app.crowdproduct.com/api/product",
            {
                title: x.title,
                location: x.location,
                url: x.url,
                description: x.description,
                image: m,
                source: 'angellist'
            },
            function (data, status) {
                console.log("Data: " + data.message + "\nStatus: " + status);
            });
    });
});