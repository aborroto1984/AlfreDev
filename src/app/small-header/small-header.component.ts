import { Component } from '@angular/core';

@Component({
  selector: 'small-header',
  templateUrl: './small-header.component.html',
  styleUrls: ['./small-header.component.scss']
})
export class SmallHeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
