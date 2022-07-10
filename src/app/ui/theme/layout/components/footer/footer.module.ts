import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '@app/ui/icons';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, RouterModule, IconsModule, MatButtonModule],
  exports: [FooterComponent],
})
export class FooterModule {}
