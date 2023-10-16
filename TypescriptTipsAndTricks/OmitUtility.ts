/*Instead of making a property optional in an interface or creating a
brand new interface, Omit is an easy way to create a new type by
removing a subset of properties:*/
interface Person {
    name: string;
    email: string;
    address: string;
}

type PersonWithoutAddress = Omit<Person, 'address'>;
const john: PersonWithoutAddress = {name: 'John', email: 'john@example.com'}