import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { UserCardComponent } from '../../shared/components/user-card/user-card.component';
import { UserService } from '../../core/services/users.service';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [UserCardComponent, AsyncPipe],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  private userService = inject(UserService);
  private route = inject(Router);
  private router = inject(ActivatedRoute);

  users$ = this.userService.users$;

  onNewUser() {
    this.route.navigate(['add'], { relativeTo: this.router });
  }
}
