import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { StepperService } from '../stepper/services';

@Component({
    selector: 'app-professional',
    templateUrl: './professional.component.html',
    styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit, OnDestroy {

    private destroy = new Subject<any>();

    constructor(
        private stepper: StepperService
    ) { }

    ngOnInit(): void {
        this.stepper.check$.pipe(takeUntil(this.destroy)).subscribe((type) => {
            // type === 'complete'
            this.stepper[type].next(true);
        });
    }

    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }

}
