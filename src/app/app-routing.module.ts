import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {path: "home", component: HomeComponent},
  {path: "contact-create", component: ContactCreateComponent},
  {path: "contact-list", component: ContactListComponent},
  {path: "", pathMatch: "full", redirectTo: "home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
