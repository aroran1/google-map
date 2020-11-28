import { User } from './User';
import { Company } from './Company';

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent: () => string;
}


export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapDivId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapDivId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "Hi there!"
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}