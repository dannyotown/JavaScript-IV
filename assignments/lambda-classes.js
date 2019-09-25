// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.age = attributes.age;
        this.name = attributes.name;
        this.location = attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes)
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} recieves a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes)
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listSubjects(){
        let subArray = (this.favSubjects).map(sub => {return sub.favSubjects;});
        console.log(subArray);
    }
    PRAssignment(arg){
        console.log(`${this.name} has submitted a PR for ${arg}`);
    }
    sprintChallenge(arg){
        console.log(`${this.name} has begun sprint challenge on ${arg}`);
    }
}
class ProjectManager extends Person{
    constructor(attributes){
        super(attributes)
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(Student,subject){
        return `${Student.name}'s code on ${subject}`;
    }
}