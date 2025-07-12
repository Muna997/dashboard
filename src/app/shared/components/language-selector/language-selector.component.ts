import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LANGUAGE_OPTIONS } from '../../data/language-options.data';
import { LanguageOption } from '../../models/language.model';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent {
  items = input<LanguageOption[]>(LANGUAGE_OPTIONS);

  selectionChanged = output<string>();

  selected = this.items()?.[0];
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  select(lang: { flag: string; label: string; value: string }) {
    this.selected = lang;
    this.selectionChanged.emit(lang.value);
    this.isOpen = false;
  }
}
