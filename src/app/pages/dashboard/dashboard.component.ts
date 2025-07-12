import { Component, signal } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { ChartComponent } from '../../shared/components/chart/chart.component';
import { Cards } from '../../shared/data/cards.data';
import { CardData } from '../../shared/models/CardData.model';
import { ChartOptions } from '../../shared/models/chart-options.model';
import { monthlySalesData } from '../../shared/data/monthly-data';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, ChartComponent, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  cards = signal<CardData[]>(Cards);
  readonly months = Object.keys(monthlySalesData);
  selectedMonth = signal('January');
  chartOptions = signal<ChartOptions>(this.getChartOptions('January'));

  onMonthChange(event: Event) {
    const selected = (event.target as HTMLSelectElement).value;
    this.selectedMonth.set(selected);
    this.chartOptions.set(this.getChartOptions(selected));
  }
  private getChartOptions(month: string): Partial<ChartOptions> {
    return {
      series: [{ name: 'Sales', data: monthlySalesData[month] }],
      chart: {
        height: 350,
        type: 'area',
        zoom: { enabled: false },
        toolbar: { show: false },
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: { height: 300 },
            xaxis: {
              labels: {
                show: true,
                rotate: -45,
                style: { fontSize: '10px' },
              },
            },
          },
        },
        {
          breakpoint: 640,
          options: {
            chart: { height: 250 },
            xaxis: {
              labels: { show: false },
            },
            markers: { size: 3 },
          },
        },
      ],
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth', width: 2, colors: ['#3B82F6'] },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          inverseColors: false,
          opacityFrom: 0.6,
          opacityTo: 0.2,
          stops: [0, 90, 100],
          colorStops: [
            { offset: 0, color: '#3B82F6', opacity: 0.6 },
            { offset: 100, color: '#3B82F6', opacity: 0.2 },
          ],
        },
      },
      xaxis: {
        categories: [
          '5k',
          '6k',
          '7k',
          '8k',
          '9k',
          '10k',
          '11k',
          '20k',
          '21k',
          '25k',
          '26k',
          '27k',
          '28k',
          '30k',
          '35k',
          '36k',
          '38k',
          '40k',
          '42k',
          '45k',
          '47k',
          '50k',
          '55k',
          '60k',
          '62k',
        ],
        labels: { style: { colors: '#9CA3AF' } },
      },
      tooltip: { theme: 'light' },
      markers: {
        size: 4,
        colors: ['#3B82F6'],
        strokeColors: '#fff',
        strokeWidth: 2,
      },
    };
  }
}
