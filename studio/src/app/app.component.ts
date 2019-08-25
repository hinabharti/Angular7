import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studio';
  id = 5;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
    'home',
     sanitizer.bypassSecurityTrustResourceUrl('../assets/home-icon.svg'));
   iconRegistry.addSvgIcon(
     'power',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/power-icon.svg'));
    iconRegistry.addSvgIcon(
      'workspace',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/workspaceexplore-icon.svg'));
    iconRegistry.addSvgIcon(
     'setting',
    sanitizer.bypassSecurityTrustResourceUrl('../assets/settings-icon.svg'));
      }

   logout() :void{
     alert("logout");
   }   
    
}
