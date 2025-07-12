import { Component, computed, input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions } from '../../models/chart-options.model';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './chart.component.html',
})
export class ChartComponent {
  chartOptions = input.required<ChartOptions>();

  readonly markersConfig = computed(() => {
    const markers = this.chartOptions()?.markers;

    return {
      size: markers?.size ?? 0,
      colors: Array.isArray(markers?.colors)
        ? markers.colors
        : typeof markers?.colors === 'string'
        ? [markers.colors]
        : ['#3B82F6'],
      strokeColors: markers?.strokeColors ?? '#fff',
      strokeWidth: markers?.strokeWidth ?? 2,
    };
  });
}
