import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { MainCenterComponent } from './main-center/main-center.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EditAppointmentComponent,
    NewAppointmentComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    MainCenterComponent
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