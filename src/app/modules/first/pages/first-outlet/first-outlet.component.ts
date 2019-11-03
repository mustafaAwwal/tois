import { Component, OnInit } from '@angular/core';
import { RouterAnimation } from 'src/app/shared/animations/router.animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-first-outlet',
  templateUrl: './first-outlet.component.html',
  styleUrls: ['./first-outlet.component.scss'],
  animations: [
    RouterAnimation
  ]
})
export class FirstOutletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  preparedRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
