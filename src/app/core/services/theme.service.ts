import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes = ['light', 'dark'];
  private readonly defaultTheme = 'light';
  private currentTheme = 'light';

  constructor(private readonly store: LocalStoreService) {}

  resetTheme() {
    this.setTheme(this.defaultTheme);
  }

  resetThemeFromStore() {
    const storeValue = this.store.getStoreValue();
    this.setTheme(storeValue?.theme || this.defaultTheme);
  }

  setTheme(theme: string) {
    if (!this.themes.includes(theme)) return;

    document.body.classList.remove(...this.themes);
    document.body.classList.add(theme);
    this.currentTheme = theme;
    this.store.setStoreValue({ theme });
  }

  getTheme(): string {
    return this.currentTheme;
  }

  toggleTheme() {
    const index = (this.themes.indexOf(this.currentTheme) + 1) % this.themes.length;
    this.setTheme(this.themes[index]);
  }
}
