import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkspaceExplorerComponent } from './workspace-explorer/workspace-explorer.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full' 
  },
  {
    path :"home",component : HomeComponent
  },
  {
    path :"workSpace/:id",component : WorkspaceExplorerComponent
  },
  {
    path : 'settings',loadChildren : '../app/settings/settings.module#SettingsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
