import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    template: `
        <p>I am the app-server component.</p>
        <hr>
        <app-warning></app-warning>
        <hr>
        <div app-success></div>
    `
})
export class ServerComponent {

}
