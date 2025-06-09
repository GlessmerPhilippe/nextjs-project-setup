import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  template: `
    <div class="max-w-4xl mx-auto p-6 text-center">
      <h1 class="text-3xl font-bold mb-6">Confirmation de réservation</h1>
      <p *ngIf="booking">
        Merci, {{ booking.name }}! Votre réservation pour le {{ booking.date }} à {{ booking.time }} a été prise en compte.
      </p>
      <button (click)="goHome()" class="mt-6 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Retour à l'accueil</button>
    </div>
  `,
  styles: []
})
export class ConfirmationComponent {
  booking: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.booking = navigation?.extras?.state?.booking;
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
