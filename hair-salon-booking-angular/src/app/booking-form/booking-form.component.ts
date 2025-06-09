import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  template: `
    <div class="max-w-4xl mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6">Réserver une prestation</h1>
      <form [formGroup]="bookingForm" (ngSubmit)="onSubmit()">
        <div class="mb-4">
          <label class="block mb-1 font-semibold" for="name">Nom complet</label>
          <input id="name" formControlName="name" type="text" class="w-full border border-black rounded p-2" />
          <div *ngIf="bookingForm.get('name')?.invalid && bookingForm.get('name')?.touched" class="text-red-600 text-sm">Le nom est requis.</div>
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-semibold" for="email">Email</label>
          <input id="email" formControlName="email" type="email" class="w-full border border-black rounded p-2" />
          <div *ngIf="bookingForm.get('email')?.invalid && bookingForm.get('email')?.touched" class="text-red-600 text-sm">Email valide requis.</div>
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-semibold" for="date">Date</label>
          <input id="date" formControlName="date" type="date" class="w-full border border-black rounded p-2" />
          <div *ngIf="bookingForm.get('date')?.invalid && bookingForm.get('date')?.touched" class="text-red-600 text-sm">La date est requise.</div>
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-semibold" for="time">Heure</label>
          <input id="time" formControlName="time" type="time" class="w-full border border-black rounded p-2" />
          <div *ngIf="bookingForm.get('time')?.invalid && bookingForm.get('time')?.touched" class="text-red-600 text-sm">L'heure est requise.</div>
        </div>
        <button type="submit" [disabled]="bookingForm.invalid" class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Réserver</button>
      </form>
    </div>
  `,
  styles: []
})
export class BookingFormComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.router.navigate(['/confirmation'], { state: { booking: this.bookingForm.value } });
    }
  }
}
