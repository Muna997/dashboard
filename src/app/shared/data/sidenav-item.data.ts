import { SidenavItem } from '../models/sidenav-item.model';

export const sidenavItems: SidenavItem[] = [
  { label: 'Dashboard', icon: 'av_timer', route: '/dashboard' },
  { label: 'Products', icon: 'dashboard', route: '/products' },
  { label: 'Favorites', icon: 'favorite', route: '/favorites' },
  { label: 'Inbox', icon: 'forum', route: '/inbox' },
  { label: 'Order Lists', icon: 'checklist', route: '/orders' },
  { label: 'Product Stock', icon: 'view_list', route: '/stock' },
  {
    section: 'Pages',
    label: 'Pricing',
    icon: 'shopping_bag',
    route: '/pricing',
  },
  { label: 'Calendar', icon: 'calendar_today', route: '/calendar' },
  { label: 'To-Do', icon: 'assignment', route: '/todo' },
  { label: 'Contact', icon: 'group', route: '/contact' },
  { label: 'Invoice', icon: 'request_quote', route: '/invoice' },
  { label: 'UI Elements', icon: 'apps', route: '/elements' },
  { label: 'Team', icon: 'person', route: '/team' },
  { label: 'Table', icon: 'table_view', route: '/table' },
];

export const footerItems: SidenavItem[] = [
  { label: 'Settings', icon: 'settings', route: '/settings' },
  { label: 'Logout', icon: 'power_settings_new', route: '/logout' },
];
