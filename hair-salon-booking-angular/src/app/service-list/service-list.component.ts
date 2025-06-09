import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-service-list',
  template: `
    <div class="max-w-4xl mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6">Nos Prestations</h1>
      <ul>
        <li *ngFor="let service of services" class="mb-4 p-4 border border-black rounded cursor-pointer hover:bg-gray-100" (click)="bookService(service)">
          <h2 class="text-xl font-semibold">{{ service.name }}</h2>
          <p class="text-gray-700">{{ service.description }}</p>
          <p class="mt-2 font-bold">{{ service.price | currency:'EUR' }}</p>
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class ServiceListComponent {
  services: Service[] = [
    { id: 1, name: 'Coupe Homme', description: 'Coupe classique pour homme', price: 20 },
    { id: 2, name: 'Coupe Femme', description: 'Coupe stylée pour femme', price: 30 },
    { id: 3, name: 'Coloration', description: 'Coloration professionnelle', price: 50 },
  ];

  constructor(private router: Router) {}

  bookService(service: Service) {
    this.router.navigate(['/booking'], { state: { service } });
  }
}
