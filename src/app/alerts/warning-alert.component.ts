import { Component } from '@angular/core';

@Component({
    selector: 'app-warning',
    template: `
        <p>Oh no!
        Something went wrong!<p>
    `,
    styles: [`
        p {
            background: red;
            width: 50%;
        }
    `]
})
export class WarningComponent {

}
