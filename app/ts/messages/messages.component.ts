import {Component} from 'angular2/core';
import {Data} from '../data.service';

@Component({
    selector: 'my-messages',
    templateUrl: 'app/ts/messages/messages.component.html',
})

export class messagesComponent{
    newMessages = Data.User_Info.messages.new;
    messages = Data.User_Info.messages.content;
}