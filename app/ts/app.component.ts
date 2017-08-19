import {Component} from 'angular2/core';
import {navComponent} from './nav/nav.component';
import {containerComponent} from './container/container.component';

@Component({
    selector: 'my-app',
template: `<side-nav></side-nav>
           <container></container>`,
directives: [navComponent,containerComponent]               
})

export class AppComponent {

}
