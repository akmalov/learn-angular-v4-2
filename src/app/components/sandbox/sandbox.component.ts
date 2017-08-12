import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <button (click)="fireEvent($event)">Click Event</button>
        <br>
        <button (mouseover)="fireEvent($event)">Mouseover Event</button>
        <br>
        <button (mousedown)="fireEvent($event)">Mousedown Event</button>
        <br>
        <button (mouseup)="fireEvent($event)">Mouseup Event</button>
        <br>
        <button (dblclick)="fireEvent($event)">Double click Event</button>
        <br>
        <button (drag)="fireEvent($event)">Drag Event</button>
        <br>
        <button (drag)="fireEvent($event)">Drag Event</button>
        <br>
        <button (dragover)="fireEvent($event)">Drag over Event</button>
    `
})

export class SandboxComponent{
    fireEvent(e){
        //console.log('Button Clicked');
        //console.log('greeting');
        console.log(e.type);
    }
}
