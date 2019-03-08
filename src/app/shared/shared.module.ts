import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxModuleModule } from './ngx-module.module';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from '../components/header/header.component';
//import { SideNavComponent } from '../components/side-nav/side-nav.component';
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [HeaderComponent],
  exports : [HeaderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ModalModule,
    NgxModuleModule,
    ModalModule.forRoot(),
  ]
})
export class SharedModule { }
