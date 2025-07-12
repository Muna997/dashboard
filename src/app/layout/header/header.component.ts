import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { SearchInputComponent } from '../../shared/components/search-input/search-input.component';
import { LanguageSelectorComponent } from '../../shared/components/language-selector/language-selector.component';
import { DropdownComponent } from '../../shared/components/dropdown/dropdown.component';
import { MENU_ITEMS } from '../../shared/data/menu-items.constant';
import { USER_DATA } from '../../shared/data/user.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    SearchInputComponent,
    LanguageSelectorComponent,
    DropdownComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  toggleSidebar = false;
  toggleMenu = output<void>();

  onSearch(term: string) {
    console.log('Search input:', term);
  }
  user = USER_DATA;
  menuItems = MENU_ITEMS;

  onItemClicked(value: string) {
    console.log('Clicked item:', value);
  }

  onLangChange(lang: string) {
    console.log(lang);
  }
  onToggleMenu() {
    this.toggleMenu.emit();
  }
}
