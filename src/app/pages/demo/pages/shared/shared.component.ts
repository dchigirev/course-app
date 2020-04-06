import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { regex, regexErrors } from '@app/shared/utils';

import { ControlItem } from '@app/models/frontend';

@Component({
    selector: 'app-shared',
    templateUrl: './shared.component.html',
    styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
    form: FormGroup;
    isInline: boolean;
    regexErrors = regexErrors;

    items: ControlItem[];

    constructor(private fb: FormBuilder) {
        this.isInline = true;

        this.items = [
            { label: 'First', value: 1 },
            { label: 'Second', value: 2 },
            { label: 'Third', value: 3 },
            { label: 'Fourth', value: 4 },
            { label: 'Fifth', value: 5 }
        ];
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
            }],
            password: [null, {
                updateOn: 'blur', validators: [
                    Validators.required
                ]
            }],
            select: [null, {
                updateOn: 'change', validators: [
                    Validators.required
                ]
            }],
            checkboxes: [null, {
                updateOn: 'change', validators: [
                    Validators.required
                ]
            }],
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
