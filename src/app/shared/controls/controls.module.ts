import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { PasswordModule } from './password/password.module';
import { SelectModule } from './select/select.module';
import { CheckboxesModule } from './checkboxes/checkboxes.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        InputModule,
        FormFieldModule,
        PasswordModule,
        SelectModule,
        CheckboxesModule
    ],
    exports: [
        InputModule,
        FormFieldModule,
        PasswordModule,
        SelectModule,
        CheckboxesModule
    ]
})
export class ControlsModule { }
