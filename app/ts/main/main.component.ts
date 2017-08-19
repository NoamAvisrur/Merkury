import {Component, OnInit} from 'angular2/core';
import {Data} from '../data.service';
import {salesComponent} from '../sales/sales.component';
import {tasksComponent} from '../tasks/tasks.component';
import {messagesComponent} from '../messages/messages.component';
import {activitiesComponent} from '../activites/activities.component';

@Component({
    selector: 'my-main',
    templateUrl: 'app/ts/main/main.component.html',
    directives: [salesComponent, tasksComponent, messagesComponent, activitiesComponent]
})

export class mainComponent{
    userName = Data.User_Info.first_name;  
}