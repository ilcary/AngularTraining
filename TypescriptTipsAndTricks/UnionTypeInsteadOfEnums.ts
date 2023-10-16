/*Enums aren't incredibly convenient in Typescript compared to
other languages. Enums get compiled into a big monster of javascript*/
enum GamePadInput {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

//this is the same type as the upper one but we got less memory usage from the compiler

export type GamePadInputUnionType = "UP" | "DOWN" | "LEFT" | "RIGHT";