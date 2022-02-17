import { Component, OnInit } from '@angular/core';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-sbc',
  templateUrl: './menu-sbc.component.html',
  styleUrls: ['./menu-sbc.component.css']
})
export class MenuSbcComponent implements OnInit {
  faFileExcel = faFileExcel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
