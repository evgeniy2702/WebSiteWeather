
import {XHR} from './XHR.js';
import {boldWordInInput, deleteBoldWordInInput, detachWhenLengthPNull,
    addTagPMenu,inputWordFromMenu,cleanInput,geolocation,infoOtherNearCities} from "./Today.js";
import {dayDateTime} from "./FiveDays.js";
import {DateTimeWork} from "./DateTimeWork.js"

let url = "CityOfUkrain.json";
export let urlTarget = ["http://api.openweathermap.org/data/2.5/weather?q=" , "&appid=87902ca551d8f9194521e2cee90831ea"];
let urlCoord = ["http://api.openweathermap.org/data/2.5/box/city?bbox=","&appid=87902ca551d8f9194521e2cee90831ea"];

export let xhr = new XHR(false);


    $(document).ready(function () {
        let ukraine = xhr.XHROpen(url);
        let regions = ukraine.areas;
        dayDateTime();
        new DateTimeWork().dateFiveDay();
        geolocation(urlTarget,xhr);
        infoOtherNearCities(urlCoord,xhr);
        //вывести ошибку 404
        if (!regions)  return;

        // Ф-ция ввода наименования населенного пункта в поле поиска, выдача выборки совпадений ниже поля ввода
            $('#header > form > input[type=search]').keyup(function (event) {
                if (!event.shiftKey || !event.altKey || !event.ctrlKey) {
                    $(this).html(+event.target.value);
                    let text = $(this).val();
                    if (text.length >= 3) {
                        for (let i = 0; i < regions.length; i++) {
                            let regionName = regions[i].name;
                            for (let j = 0; j < regions[i].areas.length; j++) {
                                addTagPMenu(regions[i].areas[j].name, regionName, regions[i].areas[j].name, text);
                            }
                        }
                    }
                    if (text.length === 0) {
                        detachWhenLengthPNull();
                    }
                }
                    cleanInput();
                    boldWordInInput();
                    deleteBoldWordInInput();
                    inputWordFromMenu(urlTarget, urlCoord, xhr);
            });
});








