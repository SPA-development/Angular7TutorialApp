import { Component } from '@angular/core';

@Component({
    selector:  'app-binding-examples',
    templateUrl: './binding-examples.component.html'
})
export class BindingExamplesComponent {

    public dataBinding = 'An example of data bound to the template thru string interpolation.';

    public attributeBinding = 'An example data bound to the template thru attribute binding';

    public twoWayBinding: string;

    public eventBinding($event: Event) {
        // Note the explicit typing for the HTMLInputElement vent
        this.twoWayBinding = (<HTMLInputElement>event.target).value;
    }

}
