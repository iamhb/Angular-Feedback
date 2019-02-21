import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   	constructor(private router: Router) {}
   		
  title = 'Feedback-Angular';
  studentNoteFlag = true;
  userName='';
  doCheck(){
  	if(this.userName == 'admin')
  	{
  		this.studentNoteFlag = false;	
  		this.router.navigate(['/admin-module']);
  	}
}
}
