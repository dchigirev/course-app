import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        InputModule,
        FormFieldModule
    ],
    exports: [
        InputModule,
        FormFieldModule
    ]
})
export class ControlsModule { }
