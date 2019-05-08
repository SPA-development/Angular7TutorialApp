import { Component } from '@angular/core';

@Component({
    selector:  'app-binding-examples',
    templateUrl: './binding-examples.component.html'
})
export class BindingExamplesComponent {

    public dataBinding = 'This is an example of data bound to the template thru string interpolation.';

    public attributeBinding = 'This is an example data bound to the template thru attribute binding';

    public twoWayBinding: string;

    public eventBinding($event: Event) {
        // Note the explicit typing for the HTMLInputElement event
        this.twoWayBinding = (<HTMLInputElement>event.target).value;
    }

}
