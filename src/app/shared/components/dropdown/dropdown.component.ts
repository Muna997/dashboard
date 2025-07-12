import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from '../../models/menu-item.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  user = input<User>();
  items = input<MenuItem[]>([]);
  itemClicked = output<string>();

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectItem(item: { value: string }) {
    this.isOpen = false;
    this.itemClicked.emit(item.value);
  }
}
