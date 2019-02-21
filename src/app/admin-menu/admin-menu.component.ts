import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
	adminmod: AdminMenuComponent;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  doSubjectMenu()
  { 
  	alert("hello");
  	this.router.navigate(['/admin-menu/subject']); 
  }



}
