import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonStorage } from './person.storage';

@NgModule({
  imports: [CommonModule],
  providers: [PersonStorage],
})
export class PersonStorageModule {}
