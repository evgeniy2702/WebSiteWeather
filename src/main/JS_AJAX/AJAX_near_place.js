
    $(document).ready(function () {
        var cityName = '';
        var xhr = new XMLHttpRequest();
        var url = "api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid={API key}";
        xhr.open("GET", url, false);
        xhr.send();
        if (xhr.readyState === 4 || xhr.status === 200) {
        }
    });