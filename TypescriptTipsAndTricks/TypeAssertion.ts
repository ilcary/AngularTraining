/*The as keyword can cast an object to the given type
    whenTypescript cannot infer it:*/
interface Person {
    name: string;
    age: number;
}

const user: Person = JSON.parse(localStorage.getItem('user')||'{}') as Person;
const age: number = user.age;