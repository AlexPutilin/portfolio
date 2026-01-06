import { Component } from '@angular/core';
import { LogoComponent } from '../ui/logo/logo.component';
import { MenuComponent } from '../ui/menu/menu.component';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  language = 'EN';
  menuOpen = false;

  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
