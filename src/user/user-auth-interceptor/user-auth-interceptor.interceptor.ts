import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import {
  catchError,
  Observable,
  tap,
  throwError,
  timeout,
  TimeoutError,
} from 'rxjs';

@Injectable()
export class UserAuthInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(5000),

      tap(() => {
        return 'right data';
      }),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException());
        }
        throw new BadRequestException('Something wrong', {
          cause: new Error(),
          description: 'Add user Error',
        });
      }),
    );
  }
}
