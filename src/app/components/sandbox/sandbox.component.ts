import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <p>My birthday is {{ birthday | date }}</p>
        <p>My birthday is {{ birthday | date:"MM-dd-yyyy" }}</p>
        <p>I wast born in {{ birthday | date:"yyyy" }}</p>
        <p>I love {{ 'cake' | uppercase }}</p>
        <p>Your total is {{ total | currency:"GBP":"1" }}</p>
        <p>Our fee is {{ fee | percent }}</p>
    `
})

export class SandboxComponent{
    birthday = new Date(1981, 1, 15);
    total = 500;
    fee = 0.5;
}
