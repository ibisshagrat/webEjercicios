import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [ShellComponent, HeaderComponent, MainComponent, FooterComponent, NotFoundComponent],
  imports: [
    CommonModule, RouterModule, FontAwesomeModule
  ],
  exports: [ShellComponent]
})
export class CoreModule { }
