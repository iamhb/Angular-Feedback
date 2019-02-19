import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginCheckComponent } from './login-check/login-check.component';
import { QuestionModuleComponent } from './question-module/question-module.component';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';


const routes: Routes = [
	{ path:'', redirectTo:'', pathMatch:'full' },
	{ path:'login-check', component: LoginCheckComponent },
	{ path: 'question-module', component: QuestionModuleComponent},
	{ path: 'admin-module', component: AdminModuleComponent},
	{ path: 'admin-menu', component: AdminMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
