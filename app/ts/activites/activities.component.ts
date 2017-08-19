import {Component} from 'angular2/core';
import {Data} from '../data.service';

@Component({
    selector: 'my-activities',
    templateUrl: 'app/ts/activites/activities.component.html',
})

export class activitiesComponent{
    newActivity = Data.User_Info.activities.new;
    activities = Data.User_Info.activities.content;
}