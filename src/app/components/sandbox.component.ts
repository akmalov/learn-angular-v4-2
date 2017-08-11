import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
    selector: 'sandbox',
    template: `<h1>Hello World</h1> `
})

export class SandboxComponent{
    customer: Customer;
    customers: Customer[];

    constructor(){
        this.customer = {
            id: 1,
            name: 'John Doe',
            email: 'john@gmail.com'
        };

        this.customers = [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@gmail.com'
            },
            {
                id: 2,
                name: 'Donald Trump',
                email: 'donald@gmail.com'
            },
            {
                id: 3,
                name: 'Barak Obama',
                email: 'barak@gmail.com'
            }
        ]
    }
}
