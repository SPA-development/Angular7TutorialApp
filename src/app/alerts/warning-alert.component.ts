import { Component } from '@angular/core';

@Component({
    selector: 'app-warning',
    template: `
        <p>Achtung!<p>
    `,
    styles: [`
        p {
            background: orange;
            width: 50%;
        }
    `]
})
export class WarningComponent {

}
