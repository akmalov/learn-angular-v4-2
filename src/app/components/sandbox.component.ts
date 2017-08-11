import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h1>{{ name }} is {{ age }} years old.</h1>
        <h2>My name is {{ person.firstname }} {{ person.lastname }}</h2>
        <ul>
            <li>{{ 'Hello World' }}</li>
            <li>{{ 1+1 }}</li>
            <li>{{ showAge() }}</li>
        </ul>
    `
})

export class SandboxComponent{
    name = 'John Doe';
    age = 35;
    person = {firstname: 'Steve', lastname: 'Smith'}

    constructor(){
        console.log('Constructor ran...');
        this.hasBirthday();
    }

    hasBirthday(){
        this.age += 1;
    }

    showAge(){
        return this.age;
    }
}
