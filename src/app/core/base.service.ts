import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

export abstract class BaseService {
    protected url: string = 'http://localhost:8000';
    protected authenticatedUrl: string = this.url + '/v1';
    protected resourceUrl!: string;
    protected loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    protected saving$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(protected httpClient: HttpClient, protected resource: string) {
        this.resourceUrl = `${this.authenticatedUrl}/${resource}`;
     }

    isLoading(): Subject<boolean> {
        return this.loading$;
    }

    isSaving(): Subject<boolean> {
        return this.saving$;
    }

}
