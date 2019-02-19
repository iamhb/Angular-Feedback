import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.css']
})
export class AdminModuleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  dep='';
  enablePassword= false ;
  depFlag= false;
  adminpass='';
  checktemp="hello";

  doPrint()
    {
	     if(this.dep!='')
       {
          //alert(this.dep);
          this.enablePassword=true;
          this.depFlag= true;
       }		   
    }

    doPasswordCheck()
    {
    	this.router.navigate(['/admin-menu']);
    /*	if(this.adminpass == "admin")
    	{
    		alert( "Welcome "+ this.dep + " Admin" );
    	}*/
    }

}
