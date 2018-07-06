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
  MatMenuModule
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
  MatMenuModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
