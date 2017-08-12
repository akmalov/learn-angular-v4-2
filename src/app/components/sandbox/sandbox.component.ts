import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <button (click)="changeValue()">Change value</button>
        <div *ngIf="value">
            <h1>{{ text }}</h1>
        </div>
    `
})

export class SandboxComponent{
    text:string = 'Hello world';
    value:boolean = true;

    changeValue(){
        //this.value = false;
        this.value = !this.value;
    }
}
