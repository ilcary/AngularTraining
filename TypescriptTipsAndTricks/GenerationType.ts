/**In many cases, we have to work with JSON data received from a
third-party API or a backend service that does not provide type
    information (and that isn't listed on DefinitelyTyped)*/

//Use tools such as app.quicktype.io to generate type data

let person = {
    "name":"John",
    "age":30,
    "car":{
        "make":"Mercedes",
        "model":"w204"
        }
}
/*===============FEED THE JSON TO QUICKTYPE===============*/

export interface Person {
    name: string;
    age:  number;
    car:  Car;
}

export interface Car {
    make:  string;
    model: string;
}
