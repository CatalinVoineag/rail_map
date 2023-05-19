import { Controller } from "@hotwired/stimulus"
import L from "leaflet"
import "leaflet-css"

// Connects to data-controller="maps"
export default class extends Controller {
  static targets = ["container"]

  connect() {
  }

  show(event) {
    event.preventDefault()
    //var map = L.map(this.containerTarget).setView([50.301, 18.654], 13);
    var map = L.map(this.containerTarget, {});
    map.setView([51.52238797921441, -0.08366235665359283], 18);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: 'Your attribution statement',
              center: [43.00, -79.00],
              maxZoom: 18,
    }).addTo(map);

      setTimeout(() => {
        console.log("here")
        map.invalidateSize();
      }, 1000);
  }

  //disconnect() {
  //  this.map.remove();
  //}
}
