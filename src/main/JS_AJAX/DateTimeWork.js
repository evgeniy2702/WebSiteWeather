
//Класс для работы с датами и временем

export class DateTimeWork {
    days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    constructor(n) {
        this.time = new Date();
        this.n = n;
    }

    dayMonth(time,n) {
        let date = '';
        date = (this.time.getDate() + n) + " " + this.months[time.getMonth()];
        return date;
    }

    day(time,n) {
        let day = (time.getDay() + n) < 7 ? (time.getDay() + n) : ((time.getDay() + n)-7);
        return day;
    }

    dateFiveDay() {

        let sectionFiveDay = document.createElement("section");
        sectionFiveDay.id = "section_fiveDay";
        sectionFiveDay.style.display = "none";
        let innerSectionFiveDay = "<div id=\"section_fiveDay_first\">\n" +
                                  "    <div id=\"one\" style=\"background-color: #8bceff\">\n" +
                                  "            <h3>TONIGTH</h3>\n" +
                                  "            <span data=\"date\"></span>\n" +
                                  "            <div class=\"description\">\n" +
                                  "                <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                                  "            </div>\n" +
                                  "            <div class=\"temp_description\" >\n" +
                                  "                    <div class=\"value_temp\">\n" +
                                  "                        <span  class=\"value_to_temp\">+2.2</span><span> &deg;C</span>\n" +
                                  "                         <p>Sunny</p>\n" +
                                  "                    </div>\n" +
                                  "            </div>\n" +
                                  "        </div>\n" +
                                  "        <div id=\"two\">\n" +
                                  "            <h3>TONIGTH</h3>\n" +
                                  "            <span></span>\n" +
                                  "            <div class=\"description\">\n" +
                                  "                <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                                  "            </div>\n" +
                                  "            <div class=\"temp_description\" >\n" +
                                  "                    <div class=\"value_temp\">\n" +
                                  "                        <span class=\"value_to_temp\">+2.2</span><span> &deg;C\n" +
                                  "                        </span>\n" +
                                  "                         <p>Sunny</p>\n" +
                                  "                    </div>\n" +
                                  "            </div>\n" +
                                  "        </div>\n" +
                                  "        <div id=\"three\">\n" +
                                  "            <h3>TONIGTH</h3>\n" +
                                  "            <span></span>\n" +
                                  "            <div class=\"description\">\n" +
                                  "                <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                                  "            </div>\n" +
                                  "            <div class=\"temp_description\" >\n" +
                                  "                    <div class=\"value_temp\">\n" +
                                  "                        <span class=\"value_to_temp\">+2.2</span><span> &deg;C\n" +
                                  "                        </span>\n" +
                                  "                         <p>Sunny</p>\n" +
                                  "                    </div>\n" +
                                  "            </div>\n" +
                                  "        </div>\n" +
                                  "        <div id=\"four\">\n" +
                                  "            <h3>TONIGTH</h3>\n" +
                                  "            <span></span>\n" +
                                  "            <div class=\"description\">\n" +
                                  "                <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                                  "            </div>\n" +
                                  "            <div class=\"temp_description\" >\n" +
                                  "                    <div class=\"value_temp\">\n" +
                                  "                       <span class=\"value_to_temp\">+2.2</span><span> &deg;C\n" +
                                  "                        </span>\n" +
                                  "                         <p>Sunny</p>\n" +
                                  "                    </div>\n" +
                                  "            </div>\n" +
                                  "        </div>\n" +
                                  "        <div id=\"five\">\n" +
                                  "            <h3>TONIGTH</h3>\n" +
                                  "            <span></span>\n" +
                                  "            <div class=\"description\">\n" +
                                  "                <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                                  "            </div>\n" +
                                  "            <div class=\"temp_description\" >\n" +
                                  "                    <div class=\"value_temp\">\n" +
                                  "                        <span class=\"value_to_temp\">+2.2</span><span> &deg;C\n" +
                                  "                        </span>\n" +
                                  "                         <p>Sunny</p>\n" +
                                  "                    </div>\n" +
                                  "            </div>\n" +
                                  "        </div>\n" +
                                  "</div>\n" +
                                  "<div class=\"second_content_section\">\n" +
                                  "    <table>\n" +
                                  "     <caption><h3>HOURLY</h3></caption>\n" +
                                    "                <tbody>\n" +
                                    "                <tr>\n" +
                                    "                    <th>TODAY</th>\n" +
                                    "                    <th>7pm</th>\n" +
                                    "                    <th>8pm</th>\n" +
                                    "                    <th>9pm</th>\n" +
                                    "                    <th>10pm</th>\n" +
                                    "                    <th>11pm</th>\n" +
                                    "                    <th>12pm</th>\n" +
                                    "                </tr>\n" +
                                    "                <tr>\n" +
                                    "                    <td></td>\n" +
                                    "                    <td>\n" +
                                    "                        <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                                    "                    </td>\n" +
                                    "                    <td>\n" +
                                    "                        <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                                    "                    </td>\n" +
                                    "                    <td>\n" +
                                    "                        <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                                    "                    </td>\n" +
                                    "                    <td>\n" +
                                    "                        <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                                    "                    </td>\n" +
                                    "                    <td>\n" +
                                    "                        <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                                    "                    </td>\n" +
                                    "                    <td>\n" +
                                    "                        <img src=\"http://openweathermap.org/img/wn/02d@2x.png\" alt=\"\">\n" +
                                    "                    </td>\n" +
                                    "                </tr>\n" +
                                    "                <tr>\n" +
                                    "                    <td>Forecast</td>\n" +
                                    "                    <td>Sunny</td>\n" +
                                    "                    <td>Sunny</td>\n" +
                                    "                    <td>Sunny</td>\n" +
                                    "                    <td>Sunny</td>\n" +
                                    "                    <td>Sunny</td>\n" +
                                    "                    <td>Sunny</td>\n" +
                                    "                </tr>\n" +
                                    "                <tr>\n" +
                                    "                    <td>Temp(&deg;C)</td>\n" +
                                    "                    <td>\n" +
                                    "                        <span class=\"temp\">+2.2</span>\n" +
                                    "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                                    "                    </td>\n" +
                                    "                    <td>\n" +
                                    "                        <span class=\"temp\">+2.2</span>\n" +
                                    "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                                    "                    </td>\n" +
                                    "                    <td>\n" +
                                    "                        <span class=\"temp\">+2.2</span>\n" +
                                    "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                                    "                    </td>\n" +
                                    "                    <td>\n" +
                                    "                        <span class=\"temp\">+2.2</span>\n" +
                                    "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                                    "                    </td>\n" +
                                    "                    <td><span class=\"temp\">+2.2</span>\n" +
                                    "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                                    "                    </td>\n" +
                                    "                    <td><span class=\"temp\">+2.2</span>\n" +
                                    "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                                    "                    </td>\n" +
                                    "                </tr>\n" +
                                    "                <tr>\n" +
                                    "                    <td>RealFeel</td>\n" +
                                    "                    <td>\n" +
                                    "                        <span class=\"temp\">+2.2</span>\n" +
                                    "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                                    "                    </td>\n" +
                                    "                    <td>\n" +
                                    "                        <span class=\"temp\">+2.2</span>\n" +
                                    "                            <span class=\"temp_sub\">&deg;C</span>\n" +
                                    "                    </td>\n" +
                                    "                    <td>\n" +
                                    "                        <span class=\"temp\">+2.2</span>\n" +
                                    "                        <span class=\"temp_sub\">&deg;C</span>\n" +
                                    "                    </td>\n" +
                                    "                    <td>\n" +
                                    "                        <span class=\"temp\">+2.2</span>\n" +
                                    "                        <span class=\"temp_sub\">&deg;C</span>\n" +
                                    "                    </td>\n" +
                                    "                    <td><\n" +
                                    "                        <span class=\"temp\">+2.2</span>\n" +
                                    "                        <span class=\"temp_sub\">&deg;C</span>\n" +
                                    "                    </td>\n" +
                                    "                    <td>\n" +
                                    "                        <span class=\"temp\">+2.2</span>\n" +
                                    "                        <span class=\"temp_sub\">&deg;C</span>\n" +
                                    "                    </td>\n" +
                                    "                </tr>\n" +
                                    "                <tr>\n" +
                                    "                    <td>Wind(km/h)</td>\n" +
                                    "                    <td>11 <span>ESE</span></td>\n" +
                                    "                    <td>9 <span>ESE</span></td>\n" +
                                    "                    <td>6 <span>ESE</span></td>\n" +
                                    "                    <td>6 <span>ESE</span></td>\n" +
                                    "                    <td>6 <span>ESE</span></td>\n" +
                                    "                    <td>7 <span>ESE</span></td>\n" +
                                    "                </tr>\n" +
                                    "                </tbody>" +
                                    "  </table>\n" +
                                  "</div>\n";
        sectionFiveDay.innerHTML = innerSectionFiveDay;
        let body = document.querySelector('body');
        body.appendChild(sectionFiveDay);

        for(let i = 2; i < 6; i++){
            document.querySelector('#section_fiveDay_first > div:nth-child(' + i + ') > h3')
                .innerHTML = this.days[this.day(this.time,(i-1))];
            document.querySelector('#section_fiveDay_first > div:nth-child(' + i + ') > span')
                .innerHTML = this.dayMonth(this.time,(i-1))
        }

        document.querySelector("#section_fiveDay_first > div:nth-child(1) > span").innerHTML = this.time.getDate() + " " + this.months[this.time.getMonth()];
        document.querySelector("#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(1)")
            .innerHTML = this.time.getDate() + " " + this.months[this.time.getMonth()];
    }
}

