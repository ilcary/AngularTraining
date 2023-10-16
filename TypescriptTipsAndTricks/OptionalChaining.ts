/*
Instead of checking if something is defined/undefined with if, use
the optional chaining operator:*/

export interface Car {
    make:  string;
    model: string;
}

let c220 = {make: "Mercedes", model: "w204"}

if(c220 && c220.make && c220.model){
    const model = c220.model;
}else{
    const model = undefined;
}
//instead we can do:

const make = c220?.make //returns Mercedes or undefined