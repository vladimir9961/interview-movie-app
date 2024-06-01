import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../app/services/loadingService.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private loadingService: LoadingService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Turn on the loading spinner
        this.loadingService.loadingOn();

        return next.handle(req).pipe(
            finalize(() => {
                // Turn off the loading spinner
                this.loadingService.loadingOff();
            })
        );
    }
}
