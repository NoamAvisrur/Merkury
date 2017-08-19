import {Component, OnInit} from 'angular2/core';
import {Data} from '../data.service';
import {shareService} from '../share.service'

@Component({
    selector: 'my-header',
    templateUrl: 'app/ts/header/header.component.html'
})

export class headerComponent implements OnInit{

    userImg = Data.User_Info.image;
    userAlerts = Data.User_Info.alerts.length;        
    showMenu: false;
    
    openNav:boolean;
    
    constructor(private data: shareService) { }
    
    ngOnInit() {
        this.data.currentStatus.subscribe(openNav => this.openNav = openNav)
    }
    
    setfocus() {
    document.querySelector("input").focus();
}
    
    newMessage(){
         console.log(this.openNav);
        this.data.changeMessage(!this.openNav);
    }
}