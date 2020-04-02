import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { regex, regexErrors } from '@app/shared/utils';

@Component({
    selector: 'app-shared',
    templateUrl: './shared.component.html',
    styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
    form: FormGroup;
    isInline: boolean;
    regexErrors = regexErrors;


    constructor(private fb: FormBuilder) {
        this.isInline = true;
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            input: [null, {
                updateOn: 'blur',
                validators: [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.pattern(regex.numbers)
                ]
            }]
        });
    }

    onSubmit(): void {
        console.log('Submit!');
    }

    onPatchValue(): void {
        this.form.patchValue({ input: 'test' });
    }

    onToggleInline() {
        this.isInline = !this.isInline;
    }

}
