import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path: '', component: ServiceListComponent },
  { path: 'booking', component: BookingFormComponent },
  { path: 'confirmation', component: ConfirmationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    BookingFormComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
