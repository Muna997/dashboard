import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexTooltip,
  ApexResponsive,
} from 'ng-apexcharts';

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  dataLabels?: ApexDataLabels;
  stroke?: ApexStroke;
  tooltip?: ApexTooltip;
  markers?: ApexMarkers;
  fill?: ApexFill;
  responsive?: ApexResponsive[];
};
