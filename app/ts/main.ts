import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {shareService} from './share.service';

bootstrap(AppComponent, [shareService]);
