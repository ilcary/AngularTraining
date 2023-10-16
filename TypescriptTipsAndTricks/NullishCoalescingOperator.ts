//This operator aims to remove such code from our codebases:

let value = "Hello world!";
let a: string;

//boring code

if (value !== null && value !== undefined) {
    a = value;
} else {
    a = "Some def value"
}

//instead, we can do this:

a = value ?? "Hello world!";

//the nullish operator set a value if value is null or undefined