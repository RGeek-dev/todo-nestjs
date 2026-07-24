import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();

    return next
      .handle() // triggers the controller method
      .pipe(
        tap(() => console.log(`Took ${Date.now() - start}ms`)), // side effect, doesn't change value
        map((data: unknown) => ({ data, success: true })), // transforms the actual return value
      );
  }
}
