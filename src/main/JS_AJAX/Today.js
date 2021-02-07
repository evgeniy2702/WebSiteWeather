//Класс для работы с элементами(тегами) закладки Today

import {weatherByDate,weatherByDay} from "./FiveDays.js";

export let urlTargetsByCoor = ["http://api.openweathermap.org/data/2.5/forecast?id=","&appid=87902ca551d8f9194521e2cee90831ea"];

//Ф-ция выделения населенного пункта, на котором наведен курсор мышки
 export  function boldWordInInput() {
     let p = document.querySelectorAll('#header > form > p');
     p.forEach(p => p.onmouseover = function () {
         this.style.fontWeight='bold';
     });

     //эта же ф-ция на JQuery
     //   $('#header > form > p').mouseover(function (event) {
     //       $(this).css('font-weight', 'bold');
     //   });
   }

    //Ф-ция снятия выделения населенного пункта, с котором ушел курсор мышки
export function deleteBoldWordInInput() {
     let p = document.querySelectorAll('#header > form > p');
     p.forEach(p=> p.onmouseleave = function () {
         this.style.fontWeight = '';
     })

    //эта же ф-ция на JQuery
    // $('#header > form > p').mouseleave(function (event) {
    //     $(this).css('font-weight', '');
    // });
}

//Ф-ция получения данных о погоде по геолокации
export function geolocation(urlTarget, xhr) {

    let response = xhr.XHROpen("https://api.ipdata.co?api-key=test");

    //эта же ф-ция на JQuery
    // $.get("https://api.ipdata.co?api-key=test", function(response) {
    // $('#header > form > input[type=search]').val(geoCity + ", " + response.region);

        let geoCity = response.city;
        let input = document.querySelector('#header > form > input[type=search]');
        input.value = geoCity + ", " + response.region;

        let url = urlTarget[0] + geoCity + urlTarget[1];
        let cityWeather = xhr.XHROpen(url);
        let urlCoor = urlTargetsByCoor[0] + cityWeather.id + urlTargetsByCoor[1];
        let cities = xhr.XHROpen(urlCoor);
        if(!geoCity){
            return;
        }
        weatherByDay(cities);
        let dataWeather = info(urlTarget,cityWeather);
        weatherByHour(dataWeather,xhr, urlTargetsByCoor);
        weatherByDate(cities);
    // });

}

    //Ф-ция ввода в поле поиска населенного пунтка из раскрываюещгося меню ниже этого поля
export function inputWordFromMenu(urlTarget, urlCoord, xhr){
        let p = document.querySelectorAll('#header > form > p');
        let input = document.querySelector('#header > form > input[type=search]');
        p.forEach(p=> p.onclick = function(){

        //на JQuery
        // $('#header > form > p').click(function (event) {
        //     $('#header > form > input[type=search]').val($(this).text());
            // let city = $('#header > form > input[type=search]').val().match(/^[а-яА-Я]+[^,\( ]/gm);
            input.value = p.innerText;
            console.log(input.value);
            detachWhenLengthPNull();
            let city = input.value.match(/^[а-яА-Я]+[^,\( ]+/gm);
            let url = urlTarget[0] + city + urlTarget[1];
            let cityWeather = xhr.XHROpen(url);
            let urlCoor = urlTargetsByCoor[0] + cityWeather.id + urlTargetsByCoor[1];
            let cities = xhr.XHROpen(urlCoor);
            //вывести ошибку 404
            if(!city){
                return;
            }
            weatherByDay(cities);
            let dataWeather = info(urlTarget,cityWeather);
            weatherByHour(dataWeather,xhr, urlTargetsByCoor);
            weatherByDate(cities);
            infoNearCities(urlCoord,xhr,dataWeather);
        });
}

    //Ф-ция удаления тегов Р из под input
export function detachWhenLengthPNull() {
     document.querySelectorAll('#header > form > p').forEach(p=> p.remove(()=> {
         this.detach();
     }));

    //эта же ф-ция на JQuery
    // $('#header > form > p').each(function () {
    //     $(this).detach();
    // });
}

//Ф-ция удаляет теги Р с одинаковыми значениями
export function detachWhenPTextEqualeName(name) {
     document.querySelectorAll('#header > form > p')
         .forEach(p => () => {
             if(p.innerHTML === name){
             this.detach();
         }
     });

    //эта же ф-ция на JQuery
    // $('#header > form > p').each(function () {
    //     if ($(this).text() === name) {
    //         $(this).detach();
    //     }
    // })
}

//Ф-ция выделения цветом температуры в зависиости от значения
export function colorCss(temp) {
    let colorCss = '';
    if(temp < 5){
        colorCss='blue';
    } else if (temp >= 5 && temp < 18){
        colorCss='yellow';
    } else{
        colorCss='red';
    }
    return colorCss;
}

//Ф-ция перевода значения градусов в название направления ветра
export function directWind(deg) {
    let dir = '';
    if(deg === 0 || deg === 360) dir = "Северный";
    if( deg > 0 && deg < 90) dir = "Сев-Вост";
    if(deg === 90) dir = "Восточный";
    if(deg > 90 && deg < 180) dir = "Юго-Вост";
    if(deg === 180) dir = "Южный";
    if(deg > 180 && deg < 270) dir = "Юго-Зап";
    if(deg === 270) dir = "Западный";
    if(deg > 270 && deg < 360) dir = "Сев-Зап";

    return dir;
};

//Ф-ция заполняющая информацией о погоде по выбранному городу в header
//Запрос на сайте http://api.openweathermap.org информации о погоде по заданному населенному пункту
export function info(urlTarget,city) {

    let dataWeather = weatherData(city);

    let cssColor = colorCss(dataWeather[0]);
    let valueToSub = document.querySelector('.value_to_sub');
    let realFeel = document.querySelector('#real_feel');
    valueToSub.innerHTML = dataWeather[0];
    valueToSub.style.color = cssColor;
    valueToSub.style.fontWeight = 'bold';
    realFeel.innerHTML = dataWeather[1];
    realFeel.style.color = cssColor;
    realFeel.style.fontWeight = 'bold';

    document.querySelector('#sunrise').innerHTML = (dataWeather[6].getHours() < 10 ? "0" : "" ) + dataWeather[6].getHours()+":"+
    (dataWeather[6].getMinutes() < 10 ? "0" : "") + dataWeather[6].getMinutes();
    document.querySelector('#sunset').innerHTML = ( dataWeather[7].getHours() < 10 ? "0" : "" ) + dataWeather[7].getHours()+":"+
        (dataWeather[7].getMinutes() < 10 ? "0" : "") + dataWeather[7].getMinutes();
    document.querySelector('#duration').innerHTML = (dataWeather[8].getHours() < 10 ? "0" : "") + dataWeather[8].getHours() + ":" +
        (dataWeather[8].getMinutes() < 10 ? "0" : "") + dataWeather[8].getMinutes();

    document.querySelector('.description > img').setAttribute('src', dataWeather[12][0]);
    document.querySelector('.description > p').innerHTML = dataWeather[12][1];

    //эта же ф-ция на JQuery
    // $('#cityName').html($('#header > form > input[type=search]').val());
    // $('#header > form > input[type=search]').val('');

    // $('.value_to_sub').html(dataWeather[0]);
    // $('.value_to_sub').css('color',cssColor)
    //     .css('font-weight','bold');
    // $('#real_feel').html(dataWeather[1]);
    // $('#real_feel').css('color',cssColor)
    //     .css('font-weight','bold');
    //
    // $('#sunrise').html(( dataWeather[6].getHours() < 10 ? "0" : "" ) + dataWeather[6].getHours()+":"+
    //     (dataWeather[6].getMinutes() < 10 ? "0" : "") + dataWeather[6].getMinutes());
    // $('#sunset').html(( dataWeather[7].getHours() < 10 ? "0" : "" ) + dataWeather[7].getHours()+":"+
    //     (dataWeather[7].getMinutes() < 10 ? "0" : "") + dataWeather[7].getMinutes());
    // $('#duration').html((dataWeather[8].getHours() < 10 ? "0" : "") + dataWeather[8].getHours() + ":" +
    //     (dataWeather[8].getMinutes() < 10 ? "0" : "") + dataWeather[8].getMinutes());
    //
    // $('#timezone').html(cityWeather.timezone);
    // $('#visibility').html(cityWeather.visibility);
    //
    //
    // $('.description > img').attr('src', dataWeather[12][0]);
    // $('.description > p').html(dataWeather[12][1]);

    return dataWeather;
};

//Ф-ция приведения к нашим мерам
export function weatherData(city) {
    let dataWeather = [];
    //0
    let temp = parseFloat(city.main.temp-273).toFixed(2);
    dataWeather.push(temp);
    //1
    let tempFeel =  parseFloat(city.main.feels_like-273).toFixed(2);
    dataWeather.push(tempFeel);
    //2
    let tempMin =  parseFloat(city.main.temp_min-273).toFixed(2);
    dataWeather.push(tempMin);
    //3
    let tempMax =  parseFloat(city.main.temp_max-273).toFixed(2);
    dataWeather.push(tempMax);
    //4
    let humidity = city.main.humidity;
    dataWeather.push(humidity);
    //5
    let pressure = city.main.pressure/1.33322;
    dataWeather.push(pressure);
    //6
    let sunrise = new Date(city.sys.sunrise*1000);
    dataWeather.push(sunrise);
    //7
    let sunset = new Date(city.sys.sunset*1000);
    dataWeather.push(sunset);
    //8
    let duration = new Date((city.sys.sunset - city.sys.sunrise)*1000);
    dataWeather.push(duration);
    //9
    let visibility = city.visibility;
    dataWeather.push(visibility);
    //10
    let windDir = directWind(city.wind.deg);
    dataWeather.push(windDir);
    //11
    let speedWind = city.wind.speed;
    dataWeather.push(speedWind);
    //12
    let icon = 'http://openweathermap.org/img/wn/' + city.weather[0].icon + '@2x.png';
    let weather = [icon,city.weather[0].description];
    dataWeather.push(weather);
    //13
    let coordCity = [city.coord.lat,city.coord.lon];
    dataWeather.push(coordCity);
    //14
    dataWeather.push(city.name);
    //15
    dataWeather.push(city.id);

    return dataWeather;
}

//Ф-ция добавления тега Р в меню под input
export function addTagPMenu(name,regionName,regions,text) {

    if (name.substring(0, (text.length)).toLowerCase() === text.toLowerCase()) {
        let pp = document.querySelectorAll('#header > form > p');
        if(pp.length < 10){
            let height = pp.length * 30 + 'px';
            let p = document.createElement('p');
            p.innerHTML = '<span>' + name.substring(0, 25) + '</span>' + ", " + regionName.substring(0, 15);
            p.style.zIndex = '100';
            p.style.position = 'relative';
            document.querySelector('form').append(p);
        }
        for(let a = 0; a < pp.length; a++){
            for(let b = (a + 1); b < pp.length; b++){
                if(pp[a].innerHTML === pp[b].innerHTML){
                    pp[b].remove();
                }
            }
        }

        //эта же ф-ция на JQuery
        // if ($('#header > form > p').length < 10) {
        //     let height = $('#header > form > p').length * 30 + 'px';
        //     let p = $('<p></p>');
        //     p.html('<span>' + name.substring(0, 25) + '</span>' + ", " + regionName.substring(0, 15));
        //     p.css({'z-index': '100', 'position': 'relative'});
        //     $('form').append(p);
        // }
        // for (let a = 0; a < $('#header > form > p').length; a++) {
        //     for (let b = (a + 1); b < $('#header > form > p').length; b++) {
        //         if ($('#header > form > p').eq(a).text() === $('#header > form > p').eq(b).text()) {
        //             $('#header > form > p').eq(b).detach();
        //         }
        //     }
        // }
    } else {
        detachWhenPTextEqualeName(regions);
    }
}

//Ф-ция вывода информации о погоде по часово
export function weatherByHour(dataWeather,xhr, urlTargetByCoor) {

    let urlTarget = urlTargetByCoor[0] + dataWeather[15] + urlTargetByCoor[1];
    let cities = xhr.XHROpen(urlTarget);

    //Error 404
    if (!cities) return;

    let date = new Date().getDate();
    let hours = new Date().getHours();
    let j=1;

    for(let i = 0; i < cities.list.length; i++) {
        if ((date === cities.list[i].dt_txt.substring(8, 10) && hours <= cities.list[i].dt_txt.substring(11, 13)) ||
            (date === cities.list[i].dt_txt.substring(8, 10) && hours >= cities.list[i].dt_txt.substring(11, 13))) {
            for (let x = i; x < (i + 7); x++) {
                j++;
                document.querySelector('#section_today > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(' + j + ')')
                    .innerHTML = cities.list[x].dt_txt.substring(11, 13) + (parseInt(cities.list[x].dt_txt.substring(11, 13)) < 12 ? 'pm' : 'am');
                document.querySelector('#section_today > div.second_content_section > table > tbody > tr:nth-child(2) > td:nth-child(' + j + ') > img')
                    .setAttribute('src', ('http://openweathermap.org/img/wn/' + cities.list[x].weather[0].icon + '@2x.png'));
                document.querySelector('#section_today > div.second_content_section > table > tbody > tr:nth-child(3) > td:nth-child(' + j + ')')
                    .innerHTML = cities.list[x].weather[0].description;
                document.querySelector('#section_today > div.second_content_section > table > tbody > tr:nth-child(4) > td:nth-child(' + j + ') > span:nth-child(1) ')
                    .innerHTML = parseFloat(cities.list[x].main.temp - 273).toFixed(2);
                document.querySelector('#section_today > div.second_content_section > table > tbody > tr:nth-child(5) > td:nth-child(' + j + ') > span:nth-child(1) ')
                    .innerHTML = parseFloat(cities.list[x].main.feels_like - 273).toFixed(2);
                document.querySelector('#section_today > div.second_content_section > table > tbody > tr:nth-child(6) > td:nth-child(' + j + ')')
                    .innerHTML = cities.list[x].wind.speed + "м\с " + directWind(cities.list[x].wind.deg);

                //на JQuery
                // $('#section_today > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(' + j + ')')
                //     .html(cities.list[x].dt_txt.substring(11, 13) + (parseInt(cities.list[x].dt_txt.substring(11, 13)) < 12 ? 'pm' : 'am'));
                // $('#section_today > div.second_content_section > table > tbody > tr:nth-child(2) > td:nth-child(' + j + ') > img')
                //     .attr('src', ('http://openweathermap.org/img/wn/' + cities.list[x].weather[0].icon + '@2x.png'));
                // $('#section_today > div.second_content_section > table > tbody > tr:nth-child(3) > td:nth-child(' + j + ')')
                //     .html(cities.list[x].weather[0].description);
                // $('#section_today > div.second_content_section > table > tbody > tr:nth-child(4) > td:nth-child(' + j + ') > span:nth-child(1) ')
                //     .html(parseFloat(cities.list[x].main.temp - 273).toFixed(2));
                // $('#section_today > div.second_content_section > table > tbody > tr:nth-child(5) > td:nth-child(' + j + ') > span:nth-child(1) ')
                //     .html(parseFloat(cities.list[x].main.feels_like - 273).toFixed(2));
                // $('#section_today > div.second_content_section > table > tbody > tr:nth-child(6) > td:nth-child(' + j + ')')
                //     .html(cities.list[x].wind.speed + "м\с " + directWind(cities.list[x].wind.deg));
            }
            break;
        }
        if(date != cities.list[i].dt_txt.substring(8, 10)){
            for (let x = i; x < (i + 6); x++) {
                j++;
                document.querySelector('#section_today > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(' + j + ')')
                    .innerHTML = cities.list[x].dt_txt.substring(11, 13) + (parseInt(cities.list[x].dt_txt.substring(11, 13)) < 12 ? 'pm' : 'am');
                document.querySelector('#section_today > div.second_content_section > table > tbody > tr:nth-child(2) > td:nth-child(' + j + ') > img')
                    .setAttribute('src', ('http://openweathermap.org/img/wn/' + cities.list[x].weather[0].icon + '@2x.png'));
                document.querySelector('#section_today > div.second_content_section > table > tbody > tr:nth-child(3) > td:nth-child(' + j + ')')
                    .innerHTML = cities.list[x].weather[0].description;
                document.querySelector('#section_today > div.second_content_section > table > tbody > tr:nth-child(4) > td:nth-child(' + j + ') > span:nth-child(1) ')
                    .innerHTML = parseFloat(cities.list[x].main.temp - 273).toFixed(2);
                document.querySelector('#section_today > div.second_content_section > table > tbody > tr:nth-child(5) > td:nth-child(' + j + ') > span:nth-child(1) ')
                    .innerHTML = parseFloat(cities.list[x].main.feels_like - 273).toFixed(2);
                document.querySelector('#section_today > div.second_content_section > table > tbody > tr:nth-child(6) > td:nth-child(' + j + ')')
                    .innerHTML = cities.list[x].wind.speed + "м\с " + directWind(cities.list[x].wind.deg);

                // на JQuery
                // $('#section_today > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(' + j + ')')
                //     .html(cities.list[x].dt_txt.substring(11, 13) + (parseInt(cities.list[x].dt_txt.substring(11, 13)) < 12 ? 'pm' : 'am'));
                // $('#section_today > div.second_content_section > table > tbody > tr:nth-child(2) > td:nth-child(' + j + ') > img')
                //     .attr('src', ('http://openweathermap.org/img/wn/' + cities.list[x].weather[0].icon + '@2x.png'));
                // $('#section_today > div.second_content_section > table > tbody > tr:nth-child(3) > td:nth-child(' + j + ')')
                //     .html(cities.list[x].weather[0].description);
                // $('#section_today > div.second_content_section > table > tbody > tr:nth-child(4) > td:nth-child(' + j + ') > span:nth-child(1) ')
                //     .html(parseFloat(cities.list[x].main.temp - 273).toFixed(2));
                // $('#section_today > div.second_content_section > table > tbody > tr:nth-child(5) > td:nth-child(' + j + ') > span:nth-child(1) ')
                //     .html(parseFloat(cities.list[x].main.feels_like - 273).toFixed(2));
                // $('#section_today > div.second_content_section > table > tbody > tr:nth-child(6) > td:nth-child(' + j + ')')
                //     .html(cities.list[x].wind.speed + "м\с " + directWind(cities.list[x].wind.deg));
            }
            break;
        }
    }
}

//Ф-ция удаления содержимого поля input при клике
export function cleanInput() {
    let input = document.querySelector('#header > form > input[type=search]');
    input.onclick = function(){
        input.value = '';
    };

    //эта же ф-ция на JQuery
    // $('#header > form > input[type=search]').click(function () {
    //     $('#header > form > input[type=search]').val('');
    // });

}

export function infoOtherNearCities(urlCoord,xhr) {
    navigator.geolocation.getCurrentPosition(function (position) {
        // Текущие координаты.
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        let array = ['One','Two'];
        let myPoint = urlCoord[0] + lng + "," + lat + "," + (lng + 2) + "," + (lat + 2) + "," + 10 + urlCoord[1];
        let citiesNearMyCity = xhr.XHROpen(myPoint);

        for (let j = 0; j < 4; j=j+2) {
            let i = j;
            if(j === 2) i = j - 1;
            document.querySelector('#firstName' + array[i] + ' > .cityName').innerHTML = citiesNearMyCity.list[j].name;
            document.querySelector('#firstName' + array[i] + ' > .cityIcon > img').setAttribute('src', 'http://openweathermap.org/img/wn/' + citiesNearMyCity.list[j].weather[0].icon + '@2x.png');
            document.querySelector('#firstName' + array[i] + ' > .third_content_description > .third_content_value_temp')
                .innerHTML = citiesNearMyCity.list[j].main.temp;

            document.querySelector('#secondName' + array[i] + ' > .cityName').innerHTML = citiesNearMyCity.list[j+1].name;
            document.querySelector('#secondName' + array[i] + ' > .cityIcon > img').setAttribute('src', 'http://openweathermap.org/img/wn/' + citiesNearMyCity.list[j+1].weather[0].icon + '@2x.png');
            document.querySelector('#secondName' + array[i] + ' > .third_content_description > .third_content_value_temp').innerHTML = citiesNearMyCity.list[j+1].main.temp;

            //на JQuery
            // $('#firstName' + array[i] + ' > .cityName').html(citiesNearMyCity.list[j].name);
            // $('#firstName' + array[i] + ' > .cityIcon > img').attr('src', 'http://openweathermap.org/img/wn/' + citiesNearMyCity.list[j].weather[0].icon + '@2x.png');
            // $('#firstName' + array[i] + ' > .third_content_description > .third_content_value_temp').html(citiesNearMyCity.list[j].main.temp);
            //
            // $('#secondName' + array[i] + ' > .cityName').html(citiesNearMyCity.list[j+1].name);
            // $('#secondName' + array[i] + ' > .cityIcon > img').attr('src', 'http://openweathermap.org/img/wn/' + citiesNearMyCity.list[j+1].weather[0].icon + '@2x.png');
            // $('#secondName' + array[i] + ' > .third_content_description > .third_content_value_temp').html(citiesNearMyCity.list[j+1].main.temp);
        }
    });
}

function infoNearCities(urlCoord,xhr,cityData) {
        let lat = cityData[13][0];
        let lon = cityData[13][1];
        let array = ['One','Two'];
        let myPoint = urlCoord[0] + lon + "," + lat + "," + (lon + 2) + "," + (lat + 2) + "," + 10 + urlCoord[1];
        let citiesNearMyCity = xhr.XHROpen(myPoint);
    for (let j = 0; j < 4; j=j+2) {
        let i = j;
        if(j === 2) i = j - 1;

        document.querySelector('#firstName' + array[i] + ' > .cityName').innerHTML = citiesNearMyCity.list[j].name;
        document.querySelector('#firstName' + array[i] + ' > .cityIcon > img').setAttribute('src', 'http://openweathermap.org/img/wn/' + citiesNearMyCity.list[j].weather[0].icon + '@2x.png');
        document.querySelector('#firstName' + array[i] + ' > .third_content_description > .third_content_value_temp')
            .innerHTML = citiesNearMyCity.list[j].main.temp;

        document.querySelector('#secondName' + array[i] + ' > .cityName').innerHTML = citiesNearMyCity.list[j+1].name;
        document.querySelector('#secondName' + array[i] + ' > .cityIcon > img').setAttribute('src', 'http://openweathermap.org/img/wn/' + citiesNearMyCity.list[j+1].weather[0].icon + '@2x.png');
        document.querySelector('#secondName' + array[i] + ' > .third_content_description > .third_content_value_temp').innerHTML = citiesNearMyCity.list[j+1].main.temp;

        //на JQuery
        // $('#firstName' + array[i] + ' > .cityName').html(citiesNearMyCity.list[j].name);
        // $('#firstName' + array[i] + ' > .cityIcon > img').attr('src', 'http://openweathermap.org/img/wn/' + citiesNearMyCity.list[j].weather[0].icon + '@2x.png');
        // $('#firstName' + array[i] + ' > .third_content_description > .third_content_value_temp').html(citiesNearMyCity.list[j].main.temp);
        //
        // $('#secondName' + array[i] + ' > .cityName').html(citiesNearMyCity.list[j+1].name);
        // $('#secondName' + array[i] + ' > .cityIcon > img').attr('src', 'http://openweathermap.org/img/wn/' + citiesNearMyCity.list[j+1].weather[0].icon + '@2x.png');
        // $('#secondName' + array[i] + ' > .third_content_description > .third_content_value_temp').html(citiesNearMyCity.list[j+1].main.temp);
    }
    };
