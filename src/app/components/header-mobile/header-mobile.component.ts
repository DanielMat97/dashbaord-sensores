import { Component, OnInit } from '@angular/core';
import { faHome, faLungs, faSatellite, faLocation, faBullhorn, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {
  faHome = faHome;
  faLungs = faLungs;
  faSatellite = faSatellite;
  faLocation = faLocation;
  faBullhorn = faBullhorn;
  faRightFromBracket = faRightFromBracket;

  constructor() { }

  ngOnInit(): void {
  }

}
