/*
Very often, we have to retrieve information from multiple different
sources before we can build an object.
*/

//Here we have a Speech
interface Speech {
    id: number,
    question: string,
    ask: string
}

//If we have the question but not the answer how can we make the compiler happy???

// @ts-ignore
let speech1: Speech = {
    id: 1,
    question: "How are you?",
}

//How we can see it gives us an error (if we remove the @ts-ignore), which is the bast way to manage it?

let partialSpeech1: Partial<Speech> = {
    id: 1,
    question: "How are you?",
}

//We use Generic type Partial that allows us to have a optional property, so as to make a 'partial' Speech