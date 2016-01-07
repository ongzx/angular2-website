import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {StateService} from './common/state.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [StateService],
})

@RouteConfig([
  { 
  	path: '/home',
  	name: 'Home',
  	component: HomeComponent,
  	useAsDefault: true 
  }
])


export class AppComponent { }