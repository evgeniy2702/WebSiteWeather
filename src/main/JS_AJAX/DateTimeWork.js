
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
        for(let i = 2; i < 6; i++){
            document.querySelector('#section_fiveDay_first > div:nth-child(' + i + ') > h3')
                .innerHTML = this.days[this.day(this.time,(i-1))];
            document.querySelector('#section_fiveDay_first > div:nth-child(' + i + ') > span')
                .innerHTML = this.dayMonth(this.time,(i-1))

            //на JQuery
            // $('#section_fiveDay_first > div:nth-child(' + i + ') > h3').html(this.days[this.day(this.time,(i-1))]);
            // $('#section_fiveDay_first > div:nth-child(' + i + ') > span').html(this.dayMonth(this.time,(i-1)));
        }

        document.querySelector("#section_fiveDay_first > div:nth-child(1) > span").innerHTML = this.time.getDate() + " " + this.months[this.time.getMonth()];
        document.querySelector("#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(1)")
            .innerHTML = this.time.getDate() + " " + this.months[this.time.getMonth()];

        //на JQuery
        // $("#section_fiveDay_first > div:nth-child(1) > span").html(this.time.getDate() + " " + this.months[this.time.getMonth()]);
        // $("#section_fiveDay > div.second_content_section > table > tbody > tr:nth-child(1) > th:nth-child(1)")
        //     .html(this.time.getDate() + " " + this.months[this.time.getMonth()]);
};
}

