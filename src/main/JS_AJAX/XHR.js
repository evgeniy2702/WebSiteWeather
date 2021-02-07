//Класс для работы с XHR  JSON

export class XHR {

    constructor(bool){
        this.xhr = new XMLHttpRequest();
        this.bool = bool;
    }

    XHROpen(url) {
        this.xhr.open('GET', url, this.bool);
        this.xhr.send();
        if (this.xhr.readyState === 4) {
            return JSON.parse(this.xhr.responseText);
        } else {
            return false;
        }
    }
}