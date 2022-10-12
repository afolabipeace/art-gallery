import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card'
import {MatFormFieldModule } from '@angular/material/form-field'
import {  MatCheckboxModule } from '@angular/material/checkbox'
import { MatSliderModule } from '@angular/material/slider'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSliderModule,
  ],

  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSliderModule,
    // MatButtonModule,
    // MatCardModule,
    // MatIconModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSnackBarModule,
    // MatBottomSheetModule
  ]
})
export class MaterialModuleModule { }
