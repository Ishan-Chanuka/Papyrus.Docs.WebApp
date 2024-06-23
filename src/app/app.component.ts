import { Component, NgModule } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/common/navbar/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, NavbarComponent, NgIf, NgFor]
})
export class AppComponent {
  title = 'papyrus.docs.webapp';

  constructor(private router: Router) {}

  isLoginRoute(): boolean{
    return this.router.url == '/'
  }
}
