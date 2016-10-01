document.addEventListener('DOMContentLoaded', function () {
    var x, m;
    chrome.storage.sync.get('data', function (data) {
        x = data.data;
        console.log(x);
        m = x.image.replace('\"', "");
        document.getElementById('log').src = m;
        document.getElementById('name').innerHTML = x.title;
        document.getElementById('desc').innerHTML = x.description;
        document.getElementById('url').innerText = x.url;
        document.getElementById('loc').innerHTML = x.location;
        $.post("https://beta.crowdproduct.com/api/product",
            {
                name: x.title,
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