import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpErrorService } from '../../core/services/http-error.service';
import { User } from '../../shared/models/user.model'; // تأكد من المسار الصحيح
import { UserService } from './users.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  let mockHttpErrorService: jasmine.SpyObj<HttpErrorService>;

  const mockUsers: User[] = [
    {
      id: 1,
      name: 'tom',
      email: 'tom@example.com',
      role: 'Admin',
      avatar: 'img.jpg',
    },
    {
      id: 2,
      name: 'sara',
      email: 'sara@example.com',
      role: 'User',
      avatar: 'img2.jpg',
    },
  ];

  beforeEach(() => {
    mockHttpErrorService = jasmine.createSpyObj('HttpErrorService', [
      'formatError',
    ]);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpErrorService, useValue: mockHttpErrorService },
        UserService,
      ],
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch users from API', (done) => {
    service.users$.subscribe((users: User[]) => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUsers);
      done();
    });

    const req = httpMock.expectOne(
      'https://api.escuelajs.co/api/v1/users?limit=10'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('should handle HTTP error correctly', (done) => {
    const errorMessage = 'Custom error message';
    mockHttpErrorService.formatError.and.returnValue(errorMessage);

    service.users$.subscribe({
      error: (err: any) => {
        expect(err).toBe(errorMessage);
        done();
      },
    });

    const req = httpMock.expectOne(
      'https://api.escuelajs.co/api/v1/users?limit=10'
    );
    req.flush(
      { message: 'Failed to fetch' },
      { status: 500, statusText: 'Server Error' }
    );
  });
});
