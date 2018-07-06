import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatRadioModule,
  MatMenuModule,
  MatSnackBarModule
} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatRadioModule,
  MatMenuModule,
  MatSnackBarModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
