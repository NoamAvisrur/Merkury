import {Component} from 'angular2/core';
import {headerComponent} '../header/header.component';
import {mainComponent} '../main/main.component';
import {shareService} from '../share.service'

@Component({
    selector: 'container',
    templateUrl: 'app/ts/container/container.component.html',
    directives: [headerComponent, mainComponent]
})

export class containerComponent implements OnInit{
    openNav:boolean;
    
    constructor(private data: shareService) { }
    
    ngOnInit() {
        this.data.currentStatus.subscribe(openNav => this.openNav = openNav);
    } 
}