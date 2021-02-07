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

export function clickInputNav(){
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
}


//Ф-ция для отображения даты, дня недели и часов на сайте
export function dayDateTime() {

    let body = document.querySelector("body");

    //добавление header
    let header = document.createElement('header');
    header.id = 'header';
    let innerHeader = "    <h1>MY WEATHER</h1>\n" +
        "    <form action=\"#\">\n" +
        "    <input type=\"search\" placeholder=\"Введите город\">\n" +
        "    <span class=\"icon\"><i class=\"fa fa-search\"></i></span>\n" +
        "    </form>\n";
    header.innerHTML = innerHeader;
    body.prepend(header);

    // добавление nav

    let nav = document.createElement('nav');
    nav.id = "nav";
    let innerNav = "<input id=\"today\" type=\"button\" name = \"today_btn\" value=\"Today\">\n" +
                   "<input id=\"fiveDay\" type=\"button\" name = \"fiveDay_btn\" value=\"Five_day\">\n";
    nav.innerHTML = innerNav;
    header.after(nav);

    //добавление main #content
    let main = document.createElement('main');
    main.id = "content";
    let innerMain = "<section id=\"section_today\">\n" +
                    "    <div id=\"first_content_section\">\n" +
                    "    </div>\n" +
                    "    <div class=\"second_content_section\">\n" +
                    "    </div>" +
                    "    <div id=\"third_content_section\">\n" +
                    "    </div>\n" +
                    "</section>\n";
    main.innerHTML = innerMain;
    nav.after(main);

    //добавление div #first_content_section
    let divFirstContentSection = document.querySelector('#first_content_section');
    let innerDivFirstContentSection = "<div id=\"section_header\">\n" +
                                    "     <h3>CURRENT WEATHER</h3>\n" +
                                    "        <p id=\"section_data\"><span id=\"date\"></span> <span id=\"hours\"></span>:<span id=\"minutes\"></span>:<span id=\"sec\"></span></p>\n" +
                                    "  </div>\n" +
                                    "        <div id=\"section_main\">\n" +
                                    "                <div class=\"description\">\n" +
                                    "                    <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                                    "                    <p>Sunny</p>\n" +
                                    "                </div>\n" +
                                    "                <div class=\"temp_description\" >\n" +
                                    "                    <div class=\"value_temp\">\n" +
                                    "                        <span class=\"value_to_sub\">+2.2</span><span> &deg;C\n" +
                                    "                        </span>\n" +
                                    "                        <p>Real Feel <span id=\"real_feel\">+2.2</span> &deg;C</p>\n" +
                                    "                    </div>\n" +
                                    "                </div>\n" +
                                    "            <div id=\"aside\">\n" +
                                    "                <div><span>Sunnrise:</span><span id=\"sunrise\">07:09</span></div>\n" +
                                    "                <div><span>Sunset:</span> <span id=\"sunset\">15:55</span></div>\n" +
                                    "                <div><span>Duration:</span> <span id=\"duration\">11:55</span></div>\n" +
                                    "            </div>\n" +
                                    "  </div> ";
    divFirstContentSection.innerHTML = innerDivFirstContentSection;

    //добавление div #second_content_section
    let divSecondContentSection = document.querySelector('.second_content_section');
    let tableFirst = document.createElement('table');
    let innerTableFirst =   "            <caption><h3>HOURLY</h3></caption>\n" +
                            "            <tbody>\n" +
                            "            <tr>\n" +
                            "                <th>TODAY</th>\n" +
                            "                <th>7pm</th>\n" +
                            "                <th>8pm</th>\n" +
                            "                <th>9pm</th>\n" +
                            "                <th>10pm</th>\n" +
                            "                <th>11pm</th>\n" +
                            "                <th>12pm</th>\n" +
                            "            </tr>\n" +
                            "            <tr>\n" +
                            "                <td></td>\n" +
                            "                <td>\n" +
                            "                    <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                            "                </td>\n" +
                            "                <td>\n" +
                            "                    <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                            "                </td>\n" +
                            "                <td>\n" +
                            "                    <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                            "                </td>\n" +
                            "                <td>\n" +
                            "                    <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                            "                </td>\n" +
                            "                <td>\n" +
                            "                    <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                            "                </td>\n" +
                            "                <td>\n" +
                            "                    <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                            "                </td>\n" +
                            "            </tr>\n" +
                            "            <tr>\n" +
                            "                <td>Forecast</td>\n" +
                            "                <td>Sunny</td>\n" +
                            "                <td>Sunny</td>\n" +
                            "                <td>Sunny</td>\n" +
                            "                <td>Sunny</td>\n" +
                            "                <td>Sunny</td>\n" +
                            "                <td>Sunny</td>\n" +
                            "            </tr>\n" +
                            "            <tr>\n" +
                            "                <td>Temp(&deg;C)</td>\n" +
                            "                    <td>\n" +
                            "                        <span class=\"temp\">+2.2</span>\n" +
                            "                            <span class=\"temp_sub\"> &deg;C</span>\n" +
                            "                    </td>\n" +
                            "                    <td>\n" +
                            "                        <span class=\"temp\">+2.2</span>\n" +
                            "                            <span class=\"temp_sub\"> &deg;C</span>\n" +
                            "                    </td>\n" +
                            "                    <td>\n" +
                            "                        <span class=\"temp\">+2.2</span>\n" +
                            "                            <span class=\"temp_sub\"> &deg;C</span>\n" +
                            "                    </td>\n" +
                            "                    <td>\n" +
                            "                        <span class=\"temp\">+2.2</span>\n" +
                            "                            <span class=\"temp_sub\"> &deg;C</span>\n" +
                            "                    </td>\n" +
                            "                    <td><span class=\"temp\">+2.2</span>\n" +
                            "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                            "                    </td>\n" +
                            "                    <td><span class=\"temp\">+2.2</span>\n" +
                            "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                            "                    </td>\n" +
                            "                </tr>\n" +
                            "            <tr>\n" +
                            "                <td>RealFeel</td>\n" +
                            "                <td>\n" +
                            "                        <span class=\"temp\">+2.2</span>\n" +
                            "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                            "                </td>\n" +
                            "                <td>\n" +
                            "                        <span class=\"temp\">+2,2</span>\n" +
                            "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                            "                </td>\n" +
                            "                <td>\n" +
                            "                        <span class=\"temp\">+2.2 </span>\n" +
                            "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                            "                </td>\n" +
                            "                <td>\n" +
                            "                        <span class=\"temp\">+2.2</span>\n" +
                            "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                            "                </td>\n" +
                            "                <td><span class=\"temp\">+2.2</span>\n" +
                            "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                            "                </td>\n" +
                            "                <td><span class=\"temp\">+2.2</span>\n" +
                            "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                            "                </td>\n" +
                            "            </tr>\n" +
                            "            <tr>\n" +
                            "                <td>Wind(km/h)</td>\n" +
                            "                <td>11 ESE</td>\n" +
                            "                <td>9 ESE</td>\n" +
                            "                <td>6 SE</td>\n" +
                            "                <td>6 ESE</td>\n" +
                            "                <td>6 ESE</td>\n" +
                            "                <td>7 SE</td>\n" +
                            "            </tr>\n" +
                            "            </tbody>\n";
    tableFirst.innerHTML = innerTableFirst;
    divSecondContentSection.appendChild(tableFirst);

    //добавление div #third_content_section
    let divThirdContentSection = document.querySelector("#third_content_section");
    let tableSecond = document.createElement("table");
    let innerTableSecond = "<caption><h3>NEAR BY PLACES</h3></caption>\n" +
                    "            <tbody>\n" +
                    "                <tr>\n" +
                    "                    <td id=\"firstNameOne\">\n" +
                    "                        <div class=\"cityName\">Baladzhary</div>\n" +
                    "                        <div class=\"cityIcon\">\n" +
                    "                            <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                    "                        </div>\n" +
                    "                        <div class=\"third_content_description\" >\n" +
                    "                            <span class=\"third_content_value_temp\">+2,2</span>\n" +
                    "                            <span class=\"third_content_value_to_sub\">&deg;C</span>\n" +
                    "                        </div>\n" +
                    "                    </td>\n" +
                    "                    <td id=\"firstNameTwo\">\n" +
                    "                        <div class=\"cityName\">Baladzhary</div>\n" +
                    "                        <div class=\"cityIcon\">\n" +
                    "                            <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                    "                         </div>\n" +
                    "                        <div class=\"third_content_description\" >\n" +
                    "                            <span class=\"third_content_value_temp\">+2,2</span>\n" +
                    "                            <span class=\"third_content_value_to_sub\">&deg;C</span>\n" +
                    "                        </div>\n" +
                    "                    </td>\n" +
                    "                </tr>\n" +
                    "                <tr>\n" +
                    "                    <td id=\"secondNameOne\">\n" +
                    "                        <div class=\"cityName\">Baladzhary</div>\n" +
                    "                        <div class=\"cityIcon\">\n" +
                    "                            <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                    "                        </div>\n" +
                    "                        <div class=\"third_content_description\" >\n" +
                    "                            <span class=\"third_content_value_temp\">+2,2</span>\n" +
                    "                            <span class=\"third_content_value_to_sub\">&deg;C</span>\n" +
                    "                        </div>\n" +
                    "                    </td>\n" +
                    "                    <td id=\"secondNameTwo\">\n" +
                    "                        <div class=\"cityName\">Baladzhary</div>\n" +
                    "                        <div class=\"cityIcon\">\n" +
                    "                            <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                    "                        </div>\n" +
                    "                        <div class=\"third_content_description\" >\n" +
                    "                            <span class=\"third_content_value_temp\">+2,2</span>\n" +
                    "                            <span class=\"third_content_value_to_sub\">&deg;C</span>\n" +
                    "                        </div>\n" +
                    "                    </td>\n" +
                    "                </tr>\n" +
                    "            </tbody>\n";
    tableSecond.innerHTML = innerTableSecond;
    divThirdContentSection.appendChild(tableSecond);

    //внедрение даты и часов
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

//Ф-ция вывода информации о погоде по дням в закладке 5 дней
// export function weatherByFiveDay(cities) {
//
//     let hour = dateTimeWork.time.getHours();
//     let date = dateTimeWork.time.getDate();
//     let datesHours = [];
//     let dateWeatherData=[];
//
//     for (let i = 0; i < cities.list.length; i++) {
//         datesHours.push([cities.list[i].dt_txt.substring(8, 10),cities.list[i].dt_txt.substring(11, 13),
//             parseFloat(cities.list[i].main.temp - 273).toFixed(2),cities.list[i].weather[0].icon,
//             cities.list[i].weather[0].description]);
//         dateWeatherData.push([(cities.list[i].dt_txt.substring(11, 13) + (cities.list[i].dt_txt.substring(11, 13)< 12 ? 'pm' : 'am')),
//             cities.list[i].weather[0].icon,cities.list[i].weather[0].description,parseFloat(cities.list[i].main.temp-273).toFixed(2)
//             ,parseFloat(cities.list[i].main.feels_like-273).toFixed(2),(cities.list[i].wind.speed + "м\с " + directWind(cities.list[i].wind.deg)),
//             cities.list[i].dt_txt.substring(8, 10)]);
//     }
//
//     for (let i = 0; i < datesHours.length-1; i++){
//         if(date != parseInt(datesHours[i][0])){
//
//             document.querySelector(ids[0] + '> div.temp_description > div > span.value_to_temp').innerHTML = datesHours[i][2];
//             document.querySelector(ids[0] + ' > div.description > img').setAttribute('src', ('http://openweathermap.org/img/wn/' + datesHours[i][3] + '@2x.png'));
//             document.querySelector(ids[0] + ' > div.temp_description > div > p').innerHTML = datesHours[i][4];
//
//             // на JQuery
//             // $(ids[0] + '> div.temp_description > div > span.value_to_temp').html(datesHours[i][2]);
//             // $(ids[0] + ' > div.description > img').attr('src', ('http://openweathermap.org/img/wn/' + datesHours[i][3] + '@2x.png'));
//             // $(ids[0] + ' > div.temp_description > div > p').html(datesHours[i][4]);
//             let otherDate = date;
//             let count = 1;
//             for(let z= i + 1; z< datesHours.length-1; z++) {
//                 if(otherDate != parseInt(datesHours[z][0])) {
//
//                     document.querySelector(ids[count] + '> div.temp_description > div > span.value_to_temp').innerHTML = datesHours[z][2];
//                     document.querySelector(ids[count] + ' > div.description > img').setAttribute('src', ('http://openweathermap.org/img/wn/' + datesHours[z][3] + '@2x.png'));
//                     document.querySelector(ids[count] + ' > div.temp_description > div > p').innerHTML = datesHours[z][4];
//
//                     // на JQuery
//                     // $(ids[count] + '> div.temp_description > div > span.value_to_temp').html(datesHours[z][2]);
//                     // $(ids[count] + ' > div.description > img').attr('src', ('http://openweathermap.org/img/wn/' + datesHours[z][3] + '@2x.png'));
//                     // $(ids[count] + ' > div.temp_description > div > p').html(datesHours[z][4]);
//                     otherDate = parseInt(datesHours[z][0]);
//                     count++;
//                     if(count == 5) count = 1;
//                 }
//             }
//             for(let x=2, y= i; x< 7, y<7; x++, y++) {
//
//                 console.dir(dateWeatherData);
//                 console.dir(dateWeatherData[6][0]);
//                 console.dir(x);
//                 console.dir(y);
//
//                 document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(' + x +')')
//                     .innerHTML = dateWeatherData[y][0];
//                 document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(2) > td:nth-child(' + x +') > img')
//                     .setAttribute('src', ('http://openweathermap.org/img/wn/' + dateWeatherData[y][1] + '@2x.png'));
//                 document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(3) > td:nth-child(' + x +')')
//                     .innerHTML = dateWeatherData[y][2];
//                 document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(4) > td:nth-child(' + x +') > span:nth-child(1)')
//                     .innerHTML = dateWeatherData[y][3];
//                 document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(5) > td:nth-child(' + x +') > span:nth-child(1)')
//                     .innerHTML = dateWeatherData[y][4];
//                 document.querySelector('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(6) > td:nth-child(' + x +')')
//                     .innerHTML = dateWeatherData[y][5];
//
//                 if(x == 6) break;
//
//                 // на JQuery
//                 // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(' + x +')')
//                 //     .html(dateWeatherData[y][0]);
//                 // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(2) > td:nth-child(' + x +') > img')
//                 //     .attr('src', ('http://openweathermap.org/img/wn/' + dateWeatherData[y][1] + '@2x.png'));
//                 // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(3) > td:nth-child(' + x +')')
//                 //     .html(dateWeatherData[y][2]);
//                 // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(4) > td:nth-child(' + x +') > span:nth-child(1)')
//                 //     .html(dateWeatherData[y][3]);
//                 // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(5) > td:nth-child(' + x +') > span:nth-child(1)')
//                 //     .html(dateWeatherData[y][4]);
//                 // $('#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(6) > td:nth-child(' + x +')')
//                 //     .html(dateWeatherData[y][5]);
//             }
//             break;
//         }
//     }
//
//     return dateWeatherData;
// }