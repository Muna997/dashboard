import { Component, signal } from '@angular/core';
import { ORDERS } from '../../shared/data/orders-data';
import { table } from 'console';
import { TableComponent } from '../../shared/components/table/table.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [TableComponent, MatIconModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
})
export class OrderListComponent {
  columns = ['ID', 'Name', 'Address', 'Date', 'Type', 'Status'];
  orders = ORDERS;
}
