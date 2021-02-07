//Класс для работы с элементами(тегами) закладки FiveDays

import {DateTimeWork} from './DateTimeWork.js';
import {directWind} from "./Today.js";


let dateTimeWork = new DateTimeWork();


//Ф-ция для изменения стилей кнопки переключения между закладками Five_day и today и переход между содержимым закладок

// на JQuery
// $('nav>input').click(function () {
//     if($(this).val() === 'Five_day') {
//         $('#section_fiveDay').css('display','');
//         $('#section_today').css('display','none');
//         $(this).prev('input').css('border-left','')
//             .css('border-right','')
//             .css('background-color','')
//             .css('color','')
//             .css('box-shadow','');
//         $(this).css('border-left','1px solid #666666')
//             .css('border-right','1px solid #666666')
//             .css('background-color','#4a4a4a')
//             .css('color','#CECECE')
//             .css('box-shadow','inset 0 0 10px 0 rgba(0,0,0,6)');
//     }
//     else {
//         $('#section_fiveDay').css('display', 'none');
//         $('#section_today').css('display','');
//         $(this).next('input').css('border-left','')
//             .css('border-right','')
//             .css('background-color','')
//             .css('color','')
//             .css('box-shadow','');
//         $(this).css('border-left','1px solid #666666')
//             .css('border-right','1px solid #666666')
//             .css('background-color','#4a4a4a')
//             .css('color','#CECECE')
//             .css('box-shadow','inset 0 0 10px 0 rgba(0,0,0,6)');
//     }
//     });

document.querySelectorAll('nav>input').forEach( input => input.onclick = () => {
    if(input.value === 'Five_day') {
        document.querySelector('#section_fiveDay').style.display = '';
        document.querySelector('#section_today').style.display = 'none';
        input.previousElementSibling.style.cssText = 'border-left: ; border-right: ; background-color: ; color: ; box-shadow: ';
        input.style.cssText = 'border-left: 1px solid #666666; border-right: 1px solid #666666; background-color: #4a4a4a; color: #CECECE; box-shadow: inset 0 0 10px 0 rgba(0,0,0,6)';
    }
    else {
        document.querySelector('#section_fiveDay').style.display = 'none';
        document.querySelector('#section_today').style.display = '';
        input.nextElementSibling.style.cssText = 'border-left: ; border-right: ; background-color: ; color: ; box-shadow: ';
        input.style.cssText = 'border-left: 1px solid #666666; border-right: 1px solid #666666; background-color: #4a4a4a; color: #CECECE; box-shadow: inset 0 0 10px 0 rgba(0,0,0,6)';
    }
});

//Ф-ция для отображения даты, дня недели и часов на сайте
export function dayDateTime() {

    document.querySelector('#date').innerHTML = dateTimeWork.days[dateTimeWork.time.getDay()] + "   " + dateTimeWork.time.getDate() + " " +
        dateTimeWork.months[dateTimeWork.time.getMonth()] + " " + dateTimeWork.time.getFullYear() + " г.   ";
    setInterval( function() {
        let seconds = new Date().getSeconds();
        document.querySelector("#sec").innerHTML = ( seconds < 10 ? "0" : "" ) + seconds;
    },1000);
    setInterval( function() {
        let minutes = new Date().getMinutes();
        document.querySelector("#minutes").innerHTML = ( minutes < 10 ? "0" : "" ) + minutes;
    },1000);
    setInterval( function() {
        let hours = new Date().getHours();
        document.querySelector("#hours").innerHTML = ( hours < 10 ? "0" : "" ) + hours;
    }, 1000);

    // на JQuery
    // $('#date').html(dateTimeWork.days[dateTimeWork.time.getDay()] + "   " + dateTimeWork.time.getDate() + " " +
    //     dateTimeWork.months[dateTimeWork.time.getMonth()] + " " + dateTimeWork.time.getFullYear() + " г.   ");
    // setInterval( function() {
    //     let seconds = new Date().getSeconds();
    //     $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
    // },1000);
    // setInterval( function() {
    //     let minutes = new Date().getMinutes();
    //     $("#minutes").html(( minutes < 10 ? "0" : "" ) + minutes);
    // },1000);
    // setInterval( function() {
    //     let hours = new Date().getHours();
    //     $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    // }, 1000);
};

//Ф-ция для изменения бекграунда дива в закладке fiveDay для отображения подробнее погоды на выбранный день
//и показа соотвествующему диву погодных условия
export function weatherByDate(cities) {

    let dateWeatherData = weatherByDay(cities);

    document.querySelectorAll('#section_fiveDay_first>div').forEach(div => div.onclick = function(){
        let thisID = '';
        let thisDay ='';
        let today = document.querySelector("#section_fiveDay > div.second_content_section > table > " +
                                                    "tbody > tr:nth-child(1) > th:nth-child(1)");

         document.querySelectorAll('#section_fiveDay_first>div').forEach(  divs =>  divs.style.backgroundColor = '');
            console.dir(div.style.backgroundColor);
        if (div.style.backgroundColor === '') {
            div.style.backgroundColor = '#8bceff';
            thisID = '#' + div.getAttribute('id');
            thisDay = document.querySelector(thisID + '> span').innerHTML.substring(0,2);
            if(parseInt(thisDay)<10){
                thisDay = "0" + thisDay;
            }
            today.innerHTML = document.querySelector(thisID + '> span').innerHTML;
        } else {
            div.style.backgroundColor = '';
        }
        let x=2;
            for (let y = 0; y < dateWeatherData.length; y++) {
                if (parseInt(thisDay) === parseInt(dateWeatherData[y][6]) ) {
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(' + x + ')')
                        .innerHTML = dateWeatherData[y][0];
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(2) > td:nth-child(' + x + ') > img')
                        .setAttribute('src', ('http://openweathermap.org/img/wn/' + dateWeatherData[y][1] + '@2x.png'));
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(3) > td:nth-child(' + x + ')')
                        .innerHTML = dateWeatherData[y][2];
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(4) > td:nth-child(' + x + ') > span.temp')
                        .innerHTML = dateWeatherData[y][3];
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(5) > td:nth-child(' + x + ') > span.temp')
                        .innerHTML = dateWeatherData[y][4];
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(6) > td:nth-child(' + x + ')')
                        .innerHTML = dateWeatherData[y][5];
                    x++;
                    if(x > 7) break;
                }
            }
    });

    // на JQuery
        // $('#section_fiveDay_first>div').click(function () {
        //     let thisID = '';
        //     let thisDay ='';
        //     let today = document.querySelector("#section_fiveDay > div.second_content_section > table > " +
        //                                                 "tbody > tr:nth-child(1) > th:nth-child(1)");
        //
        //         $('#section_fiveDay_first>div').each(function () {
        //         $(this).css('background-color', '');
        //     });
        //     if ($(this).css('background-color') === 'rgb(187, 192, 255)') {
        //         $(this).css('background-color', '#8bceff');
        //         thisID = '#' + $(this).attr('id');
        //         thisDay = $(thisID + '> span').html().substring(0,2);
        //         if(parseInt(thisDay)<10){
        //             thisDay = "0" + thisDay;
        //         }
        //         today.innerHTML = $(thisID + '> span').html();
        //     } else {
        //         $(this).css('background-color', '');
        //     }
        //     let x=2;
        //         for (let y = 0; y < dateWeatherData.length; y++) {
        //             if (parseInt(thisDay) === parseInt(dateWeatherData[y][6]) ) {
        //                 $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(' + x + ')')
        //                     .html(dateWeatherData[y][0]);
        //                 $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(2) > td:nth-child(' + x + ') > img')
        //                     .attr('src', ('http://openweathermap.org/img/wn/' + dateWeatherData[y][1] + '@2x.png'));
        //                 $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(3) > td:nth-child(' + x + ')')
        //                     .html(dateWeatherData[y][2]);
        //                 $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(4) > td:nth-child(' + x + ') > span.temp')
        //                     .html(dateWeatherData[y][3]);
        //                 $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(5) > td:nth-child(' + x + ') > span.temp')
        //                     .html(dateWeatherData[y][4]);
        //                 $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(6) > td:nth-child(' + x + ')')
        //                     .html(dateWeatherData[y][5]);
        //                 x++;
        //                 if(x > 7) break;
        //             }
        //         }
        // });
}

//Ф-ция вывода информации о погоде по дням
export function weatherByDay(cities)    {

    let ids = ['#one','#two','#three','#four','#five'];

    let hour = dateTimeWork.time.getHours();
    let date = dateTimeWork.time.getDate();
    let datesHours = [];
    let dateWeatherData=[];

    for (let i = 0; i < cities.list.length; i++) {
        datesHours.push([cities.list[i].dt_txt.substring(8, 10),cities.list[i].dt_txt.substring(11, 13),
            parseFloat(cities.list[i].main.temp - 273).toFixed(2),cities.list[i].weather[0].icon,
            cities.list[i].weather[0].description]);
        dateWeatherData.push([(cities.list[i].dt_txt.substring(11, 13) + (cities.list[i].dt_txt.substring(11, 13)< 12 ? 'pm' : 'am')),
            cities.list[i].weather[0].icon,cities.list[i].weather[0].description,parseFloat(cities.list[i].main.temp-273).toFixed(2)
            ,parseFloat(cities.list[i].main.feels_like-273).toFixed(2),(cities.list[i].wind.speed + "м\с " + directWind(cities.list[i].wind.deg)),
            cities.list[i].dt_txt.substring(8, 10)]);
    }

        for (let i = 0; i < datesHours.length-1; i++) {

            if ((date === parseInt(datesHours[i][0]) && hour >= parseInt(datesHours[i][1])&& hour < parseInt(datesHours[i+1][1])) ||
                (date === parseInt(datesHours[i][0]) && hour <= parseInt(datesHours[i][1]))) {

                document.querySelector(ids[0] + '> div.temp_description > div > span.value_to_temp').innerHTML = datesHours[i][2];
                document.querySelector(ids[0] + ' > div.description > img')
                    .setAttribute('src', ('http://openweathermap.org/img/wn/' + datesHours[i][3] + '@2x.png'));
                document.querySelector(ids[0] + ' > div.temp_description > div > p').innerHTML = datesHours[i][4];

                // на JQuery
                // $(ids[0] + '> div.temp_description > div > span.value_to_temp').html(datesHours[i][2]);
                // $(ids[0] + ' > div.description > img').attr('src', ('http://openweathermap.org/img/wn/' + datesHours[i][3] + '@2x.png'));
                // $(ids[0] + ' > div.temp_description > div > p').html(datesHours[i][4]);
                let otherDate = date;
                let count = 1;
                for(let z= i + 1; z< datesHours.length-1; z++) {
                    if(otherDate !== parseInt(datesHours[z][0])) {

                        document.querySelector(ids[count] + '> div.temp_description > div > span.value_to_temp').innerHTML = datesHours[z][2];
                        document.querySelector(ids[count] + ' > div.description > img')
                            .setAttribute('src', ('http://openweathermap.org/img/wn/' + datesHours[z][3] + '@2x.png'));
                        document.querySelector(ids[count] + ' > div.temp_description > div > p').innerHTML = datesHours[z][4];

                        // на JQuery
                        // $(ids[count] + '> div.temp_description > div > span.value_to_temp').html(datesHours[z][2]);
                        // $(ids[count] + ' > div.description > img').attr('src', ('http://openweathermap.org/img/wn/' + datesHours[z][3] + '@2x.png'));
                        // $(ids[count] + ' > div.temp_description > div > p').html(datesHours[z][4]);
                        otherDate = parseInt(datesHours[z][0]);
                        count++;
                        if(count === 5) count = 1;
                    }
                }
                for(let x=2, y= i; x< 7, y< 6; x++, y++) {

                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(' + x +')')
                        .innerHTML = dateWeatherData[y][0];
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(2) > td:nth-child(' + x +') > img')
                        .setAttribute('src', ('http://openweathermap.org/img/wn/' + dateWeatherData[y][1] + '@2x.png'));
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(3) > td:nth-child(' + x +')')
                        .innerHTML = dateWeatherData[y][2];
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(4) > td:nth-child(' + x +') > span.temp')
                        .innerHTML = dateWeatherData[y][3];
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(5) > td:nth-child(' + x +') > span.temp')
                        .innerHTML = dateWeatherData[y][4];
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(6) > td:nth-child(' + x +')')
                        .innerHTML = dateWeatherData[y][5];


                    // на JQuery
                    // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(' + x +')')
                    //     .html(dateWeatherData[y][0]);
                    // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(2) > td:nth-child(' + x +') > img')
                    //     .attr('src', ('http://openweathermap.org/img/wn/' + dateWeatherData[y][1] + '@2x.png'));
                    // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(3) > td:nth-child(' + x +')')
                    //     .html(dateWeatherData[y][2]);
                    // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(4) > td:nth-child(' + x +') > span.temp')
                    //     .html(dateWeatherData[y][3]);
                    // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(5) > td:nth-child(' + x +') > span.temp')
                    //     .html(dateWeatherData[y][4]);
                    // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(6) > td:nth-child(' + x +')')
                    //     .html(dateWeatherData[y][5]);
                }
            break;
            }
            if(date != parseInt(datesHours[i][0])){

                document.querySelector(ids[0] + '> div.temp_description > div > span.value_to_temp').innerHTML = datesHours[i][2];
                document.querySelector(ids[0] + ' > div.description > img').setAttribute('src', ('http://openweathermap.org/img/wn/' + datesHours[i][3] + '@2x.png'));
                document.querySelector(ids[0] + ' > div.temp_description > div > p').innerHTML = datesHours[i][4];

                // на JQuery
                // $(ids[0] + '> div.temp_description > div > span.value_to_temp').html(datesHours[i][2]);
                // $(ids[0] + ' > div.description > img').attr('src', ('http://openweathermap.org/img/wn/' + datesHours[i][3] + '@2x.png'));
                // $(ids[0] + ' > div.temp_description > div > p').html(datesHours[i][4]);
                let otherDate = date;
                let count = 1;
                for(let z= i + 1; z< datesHours.length-1; z++) {
                    if(otherDate != parseInt(datesHours[z][0])) {

                        document.querySelector(ids[count] + '> div.temp_description > div > span.value_to_temp').innerHTML = datesHours[z][2];
                        document.querySelector(ids[count] + ' > div.description > img').setAttribute('src', ('http://openweathermap.org/img/wn/' + datesHours[z][3] + '@2x.png'));
                        document.querySelector(ids[count] + ' > div.temp_description > div > p').innerHTML = datesHours[z][4];

                        // на JQuery
                        // $(ids[count] + '> div.temp_description > div > span.value_to_temp').html(datesHours[z][2]);
                        // $(ids[count] + ' > div.description > img').attr('src', ('http://openweathermap.org/img/wn/' + datesHours[z][3] + '@2x.png'));
                        // $(ids[count] + ' > div.temp_description > div > p').html(datesHours[z][4]);
                        otherDate = parseInt(datesHours[z][0]);
                        count++;
                        if(count == 5) count = 1;
                    }
                }
                for(let x=2, y= i; x< 7, y<7; x++, y++) {

                    console.dir(dateWeatherData);
                    console.dir(dateWeatherData[6][0]);
                    console.dir(x);
                    console.dir(y);

                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(' + x +')')
                        .innerHTML = dateWeatherData[y][0];
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(2) > td:nth-child(' + x +') > img')
                        .setAttribute('src', ('http://openweathermap.org/img/wn/' + dateWeatherData[y][1] + '@2x.png'));
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(3) > td:nth-child(' + x +')')
                        .innerHTML = dateWeatherData[y][2];
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(4) > td:nth-child(' + x +') > span:nth-child(1)')
                        .innerHTML = dateWeatherData[y][3];
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(5) > td:nth-child(' + x +') > span:nth-child(1)')
                        .innerHTML = dateWeatherData[y][4];
                    document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(6) > td:nth-child(' + x +')')
                        .innerHTML = dateWeatherData[y][5];

                        if(x == 6) break;

                    // на JQuery
                    // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(' + x +')')
                    //     .html(dateWeatherData[y][0]);
                    // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(2) > td:nth-child(' + x +') > img')
                    //     .attr('src', ('http://openweathermap.org/img/wn/' + dateWeatherData[y][1] + '@2x.png'));
                    // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(3) > td:nth-child(' + x +')')
                    //     .html(dateWeatherData[y][2]);
                    // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(4) > td:nth-child(' + x +') > span:nth-child(1)')
                    //     .html(dateWeatherData[y][3]);
                    // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(5) > td:nth-child(' + x +') > span:nth-child(1)')
                    //     .html(dateWeatherData[y][4]);
                    // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(6) > td:nth-child(' + x +')')
                    //     .html(dateWeatherData[y][5]);
                }
                break;
            }
        }
    return dateWeatherData;
}
