import { CardData } from '../models/CardData.model';
import { Order } from '../models/order.model';
export const Cards: CardData[] = [
  {
    title: 'Total User',
    value: '40,689',
    subtitle: '8.5% Up from yesterday',
    subtitleColor: 'text-green-500',
    icon: 'people',
    iconColor: '#3D42DF',
  },
  {
    title: 'Total Order',
    value: '10,293',
    subtitle: '1.3% Up from past week',
    subtitleColor: 'text-green-500',
    icon: 'check_box_outline_blank',
    iconColor: '#FEC53D',
  },
  {
    title: 'Total Sales',
    value: '$89,000',
    subtitle: '4.3% Down from yesterday',
    subtitleColor: 'text-red-500',
    icon: 'trending_down',
    iconColor: '#4AD991',
  },
  {
    title: 'Total Pending',
    value: '2040',
    subtitle: '1.8% Up from yesterday',
    subtitleColor: 'text-green-500',
    icon: 'history',
    iconColor: '#FF9066',
  },
];
