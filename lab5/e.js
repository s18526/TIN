class Student {
    constructor(first, last, id, grades) {
        this.firstName = first;
        this.lastName = last;
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

    get getFullName() {
        return this.firstName + " " + this.lastName;
    }

    set setFirstName(firstName) {
        this.firstName = firstName;
    }

    set setLastName(lastName) {
        this.lastName = lastName;
    }

    print = () => {
        return `${this.firstName} ${this.lastName} : average - ${this.average()}`;
    };
}

let createGroup = (student) => {
    const courses = [];
    student.courses.forEach((c) =>
        courses.push({
            name: c,
            students: {
                name: student.firstName,
                lastName: student.lastName,
                id: student.id,
            },
        })
    );
    return courses;
};

let person = new Student("Maksym", "Gulko", 18526, [4.5, 3, 3.5, 5, 4.5]);
person.courses = ["PPJ", "MAD", "ASD", "TIN", "SBD"];
person.setFirstName = "Ivan";
console.log(person.print());
console.log(createGroup(person));
