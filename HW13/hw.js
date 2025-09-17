class Student{
    constructor(name, surname, birthday, grades = [],visiting = [] ) {
        this.name = name;
        this.surname = surname;
        this.birthday = birthday;
        this.grades = grades;
        this.visiting = visiting;
}
    present(){
        if(this.visiting.length <= 25){
            this.visiting.push(true);
        } else {
            console.log("too much elements")
        }}

    absent(){
        if(this.visiting.length <= 25){
            this.visiting.push(false);
        } else {
            console.log("too much elements")
        }}

    summary(){
        const sumGrades = this.grades.reduce((sum, grade) => sum + grade, 0);
        const resultGrades = sumGrades/this.grades.length;
        const trueCount = this.visiting.filter(v => v).length;
        const resultVisiting = trueCount/this.visiting.length;

        if (resultGrades >= 90 && resultVisiting >= 0.9) {
            console.log("Excellent! You`re doing very well")
        } else if (resultGrades < 90 && resultVisiting < 0.9 ) {
            console.log("Are you serious? Come on you`re not that bad")
        } else {
            console.log("You need to be a little better")
        }
    }
}


const student1 = new Student("John",
    "Schmidt",
    "07.12.2005",
    [98, 86, 89, 100, 99 ,96, 97, 90, 91]
);
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.summary();
const student2 = new Student(
    "Michael",
    "Jackson",
    "02.08.2005",
    [70, 50, 75 , 90, 64, 87, 91]
);
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.summary();