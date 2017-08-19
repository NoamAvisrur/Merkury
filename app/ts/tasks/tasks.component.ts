import {Component} from 'angular2/core';
import {Data} from '../data.service';

@Component({
    selector: 'my-tasks',
    templateUrl: 'app/ts/tasks/tasks.component.html',
})

export class tasksComponent{
    newTasks = Data.User_Info.tasks.new;
    updatedTasks = Data.User_Info.tasks.updated; 
    tasks = Data.User_Info.tasks.content;
}