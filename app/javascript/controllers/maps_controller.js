import { Controller } from "@hotwired/stimulus"
import L from "leaflet"
import "leaflet-css"

// Connects to data-controller="maps"
export default class extends Controller {
  static targets = ["container"]

  connect() {
    var map = L.map(this.containerTarget, {});
    var marker = L.icon({
        iconUrl: 'assets/marker-icon.png',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    });

    map.setView([51.52238797921441, -0.08366235665359283], 18);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: 'Your attribution statement',
              center: [43.00, -79.00],
              maxZoom: 18,
    }).addTo(map);

    var marker = L.marker([51.5401141, 0.0788168], {icon: marker}).addTo(map);

  }

}
