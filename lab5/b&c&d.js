function Student(first, last, id, grades) {
    this.firstName = first;
    this.lastName = last;
    this.id = id;
    this.grades = grades;

    this.average = () => {
        let sum = 0;
        this.grades.forEach((g) => {
            sum += g;
        });
        return sum / this.grades.length;
    };

    this.getAverage = () => {
        return this.average();
    };

    this.getName = () => {
        return this.firstName + " " + this.lastName;
    };

    this.setName = (firstName, lastName) => {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    this.print = () => {
        return `${this.firstName} ${this.lastName} : average : ${this.average()}`;
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

Student.prototype.courses = ["PPJ", "MAD", "ASD", "TIN", "SBD"];
let person = new Student("Maksym", "Gulko", 18526, [4.5, 3, 3.5, 5, 4.5]);
console.log(person.print());
console.log(createGroup(person));
