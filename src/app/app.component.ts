import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as fromRoot from './store';
import * as fromDictionaries from './store/dictionaries';
import * as fromUser from './store/user';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'course-app';

    isAuthorized$: Observable<boolean>;

    constructor(
        private store: Store<fromRoot.State>
    ) {
    }

    ngOnInit() {
        this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized));

        this.store.dispatch(new fromUser.Init());
        this.store.dispatch(new fromDictionaries.Read());
    }

    onSignOut(): void {
        this.store.dispatch(new fromUser.SignOut());
    }
}
