import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { AuthService } from './services/auth.service.';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('buy-and-sell');


  constructor(public auth: AuthService) { }

  public signOut() {
    this.auth.signOut();
  }

  public signIn() {
    this.auth.signIn();
  }

}
