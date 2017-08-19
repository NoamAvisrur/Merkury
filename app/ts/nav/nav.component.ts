import {Component, OnInit} from 'angular2/core';
import {shareService} from '../share.service';

@Component({
    selector: 'side-nav',
    templateUrl: 'app/ts/nav/nav.component.html'
})

export class navComponent implements OnInit{

    openNav:boolean;
    
    constructor(private data: shareService) { }
    
    ngOnInit() {
        this.data.currentStatus.subscribe(openNav => this.openNav = openNav);
    }
    
    newMessage(){
         console.log(this.openNav);
        this.data.changeMessage(!this.openNav);
    }      
}