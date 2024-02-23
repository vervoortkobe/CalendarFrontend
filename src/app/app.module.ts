import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';
import { NewAppointmentComponent } from './components/new-appointment/new-appointment.component';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { MainCenterComponent } from './components/main-center/main-center.component';
import { PopupHostDirective } from './directives/popup-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EditAppointmentComponent,
    NewAppointmentComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    MainCenterComponent,
    PopupHostDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }