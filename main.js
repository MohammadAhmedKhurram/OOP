#!/usr/bin/env node
import inquirer from "inquirer";
class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(answer) {
        if (answer == "1") {
            this.personality = "Extravert";
        }
        else if (answer == "2") {
            this.personality = "Introvert";
        }
        else {
            this.personality = "Mystery";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
;
const input = await inquirer.prompt({
    message: "Select: 1, If you like to talk to others and Select: 2, If you would rather keep to yourself.",
    type: "list",
    name: "input",
    choices: ["1", "2", "3"]
});
let myPerson = new Person();
myPerson.askQuestion(input.input);
console.log("You are:" + " " + myPerson.getPersonality());
const input2 = await inquirer.prompt({
    type: 'input',
    name: 'userName',
    message: 'What is your name?',
});
class Student extends Person {
    name;
    constructor(name, personality) {
        super();
        this.name = name;
        this.askQuestion(personality);
    }
    get Name() {
        return this.name;
    }
}
let Mystudent = new Student(input2.userName, input.input);
console.log("Your name is:" + " " + Mystudent.Name + " " + "and your personality type is:" + " " + Mystudent.getPersonality());
