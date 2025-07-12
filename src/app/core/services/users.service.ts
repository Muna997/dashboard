import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { User } from '../../shared/models/user.model';
import { HttpErrorService } from '../../core/services/http-error.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = 'https://api.escuelajs.co/api/v1/users?limit=10';

  private readonly http = inject(HttpClient);
  private readonly httpErrorService = inject(HttpErrorService);

  readonly users$: Observable<User[]> = this.http.get<User[]>(this.apiUrl).pipe(
    shareReplay(1),
    catchError((error) => this.handleError(error))
  );

  private handleError(error: HttpErrorResponse): Observable<never> {
    const message = this.httpErrorService.formatError(error);
    console.error('HTTP Error:', message);
    return throwError(() => message);
  }
}
