import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  color: ThemePalette = 'primary';
  checked = false;
  isDarkTheme: boolean = true;

  constructor(private themeService: ThemeService) {
    
  }

  toggleDarkMode() {
    this.themeService.toggleTheme();
  }
}
