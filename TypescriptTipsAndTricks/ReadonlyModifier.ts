/*
An alternative to getters without setters for readonly properties is
to use the readonly modifier:*/

interface Person {
    readonly name: string;
    age: number;
}
//this way we can update only age
const ilCary: Person = {name: "Cary", age:22}
ilCary.name = "Khen"
ilCary.age = 23