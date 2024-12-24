import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isDarkMode = false;

  constructor() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
      this.enableDarkMode();
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.enableDarkMode();
      localStorage.setItem('darkMode', 'true');
    } else {
      this.disableDarkMode();
      localStorage.setItem('darkMode', 'false');
    }
    // save the preference to local storage
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  enableDarkMode() {
    document.documentElement.classList.add('dark');
    this.isDarkMode = true;
  }

  disableDarkMode() {
    document.documentElement.classList.remove('dark');
    this.isDarkMode = false;
  }

}
