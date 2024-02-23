import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NewAppointmentComponent } from './components/new-appointment/new-appointment.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';

const routes: Routes = [
  { path: '', component: CalendarComponent, pathMatch: 'full' },
  { path: ':id/new', component: NewAppointmentComponent },
  { path: ':id/edit', component: EditAppointmentComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }