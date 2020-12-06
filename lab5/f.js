class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    get getFullName() {
        return this.firstName + " " + this.lastName;
    }

    set setFirstName(firstName) {
        this.firstName = firstName;
    }

    set setLastName(lastName) {
        this.lastName = lastName;
    }
}

class Student extends Person {
    constructor(first, last, id, grades) {
        super(first, last);
        this.id = id;
        this.grades = grades;
    }

    average = () => {
        let sum = 0;
        this.grades.forEach((g) => {
            sum += g;
        });
        return sum / this.grades.length;
    };

    get getAvg() {
        return this.average();
    }

    print = () => {
        return `${this.firstName} ${this.lastName} : average - ${this.average()}`;
    };
}

let person = new Student("Maksym", "Gulko", 18526, [4.5, 3, 3.5, 5, 4.5]);
person.firstName = "Piotr";
console.log(person.print());
