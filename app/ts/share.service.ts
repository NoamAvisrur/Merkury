import { Injectable } from 'angular2/core';
import { BehaviorSubject } from 'rxjs/subject/BehaviorSubject';

@Injectable()
export class shareService {

    private openNavStatus = new BehaviorSubject<boolean>(false);
    currentStatus = this.openNavStatus.asObservable();
        
    constructor() { }
        
    changeMessage(openNav: boolean) {
        this.openNavStatus.next(openNav);
    }
}