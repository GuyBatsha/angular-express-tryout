import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchScreenComponent } from './search-screen/search-screen.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'search-screen', component:SearchScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
