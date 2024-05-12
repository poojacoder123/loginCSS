import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import * as L from 'leaflet';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
ngOnInit(): void {
    this.initializeMap();
}
  initializeMap(): void {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  }
   
}
