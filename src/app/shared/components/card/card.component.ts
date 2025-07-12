import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule, NgClass, NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  title = input<string>('');
  value = input<string>('');
  subtitle = input<string>('');
  subtitleColor = input<string>('');
  icon = input<string>('');
  iconColor = input<string>('');

  private bgOpacity = 0.15;

  backgroundColor = computed(() => {
    const hex = this.iconColor().replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${this.bgOpacity})`;
  });

  hasColoredSubtitle = computed(
    () =>
      this.subtitleColor().includes('green') ||
      this.subtitleColor().includes('red')
  );

  isGreen = computed(() => this.subtitleColor().includes('green'));
  isRed = computed(() => this.subtitleColor().includes('red'));

  subtitleMain = computed(() => this.subtitle().split(' ')[0]);
  subtitleRest = computed(() => this.subtitle().split(' ').slice(1).join(' '));
}
