#!/usr/bin/env node

import inquirer from "inquirer";

class Person {
    private personality: string;

    constructor() {
        this.personality = "Mystery";
    }

    public askQuestion(answer: string): void {
        if (answer == "1") {
            this.personality = "Extravert";
        } else if (answer == "2") {
            this.personality = "Introvert";
        } else {
            this.personality = "Mystery";
        }
    }

    public getPersonality(): string {
        return this.personality;
    }
};

const input = await inquirer.prompt({
    message: "Select: 1, If you like to talk to others and Select: 2, If you would rather keep to yourself.",
    type: "list",
    name: "input",
    choices: ["1", "2", "3"]
});

let myPerson: Person = new Person();
myPerson.askQuestion(input.input);

console.log("You are:" + " " + myPerson.getPersonality());


const input2 = await inquirer.prompt({
    type: 'input',
    name: 'userName',
    message: 'What is your name?',
});

class Student extends Person {
    private name: string;

    constructor(name: string, personality: string) {
        super();
        this.name = name;
        this.askQuestion(personality); 
    }

    public get Name(): string {
        return this.name;
    }
}

let Mystudent = new Student(input2.userName, input.input);
console.log("Your name is:" + " " + Mystudent.Name + " " + "and your personality type is:"+ " " + Mystudent.getPersonality());
