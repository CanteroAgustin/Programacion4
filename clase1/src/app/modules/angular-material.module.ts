import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,

    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
    ]
})
export class AngularMaterialModule { }
