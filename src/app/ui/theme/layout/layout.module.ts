import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { MainModule } from './components/main/main.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, HeaderModule, FooterModule, MainModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
