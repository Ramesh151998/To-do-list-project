import {
    CallHandler,
    ExecutionContext,
    Inject,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
  import { Logger } from 'winston';
  
  @Injectable()
  export class LoggingInterceptor implements NestInterceptor {
    constructor(@Inject('winston') private logger: Logger) {}
  
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const request = context.switchToHttp().getRequest();
      const { method, url, headers, body } = request;
      const now = Date.now();
  
      this.logger.info(`Incoming Request: ${method} ${url}`, { headers, body });
  
      return next
        .handle()
        .pipe(
          tap((response) => {
            const responseTime = Date.now() - now;
            this.logger.info(`Outgoing Response: ${method} ${url} - ${responseTime}ms`, { response });
          }),
        );
    }
  }
  