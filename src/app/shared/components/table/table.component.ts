import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgClass],
  templateUrl: './table.component.html',
})
export class TableComponent {
  columns = input<string[]>();
  data = input<any[]>();

  getStatusClass(status: string): string {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-600  ';
      case 'processing':
        return 'bg-purple-100 text-purple-600';
      case 'rejected':
        return 'bg-red-100 text-red-600';
      case 'on hold':
        return 'bg-orange-100 text-orange-600';
      case 'in transit':
        return 'bg-pink-100 text-pink-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }
}
