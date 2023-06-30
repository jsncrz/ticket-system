import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

export abstract class BaseService {
    protected url:string = 'http://localhost:8080';
    protected loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(protected httpClient: HttpClient) { }

    isLoading(): Subject<boolean> {
        return this.loading$;
    }

}
