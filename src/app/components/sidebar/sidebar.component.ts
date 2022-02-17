import { Component, OnInit } from '@angular/core';
import { faHome, faLungs, faSatellite, faLocation, faBullhorn, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
