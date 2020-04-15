import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable, zip } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';

import { StepperService } from './components/stepper/services';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

    private destroy = new Subject<any>();

    constructor(
        public stepper: StepperService
    ) { }

    ngOnInit(): void {

        this.stepper.init([
            { key: 'personal', label: 'Personal' },
            { key: 'professional', label: 'Professional' }
        ]);

        this.stepper.complete$.pipe(takeUntil(this.destroy)).subscribe(() => {
            console.log('completed');
        });

        this.stepper.cancel$.pipe(takeUntil(this.destroy)).subscribe(() => {
            console.log('canceled');
        });

    }

    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }

}
