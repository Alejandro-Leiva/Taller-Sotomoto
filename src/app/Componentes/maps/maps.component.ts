import { MapsAPILoader } from '@agm/core';
import { MapType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat!: number;
  lng!: number;
  zoom!: number;
  mapType: any;
  address: string | undefined;

  constructor( private mapsAPILoader: MapsAPILoader) { }

  ngOnInit(): void {
    this.setLocation(36.72377412823629,-4.410616887772379,14,'hybrid');
  }

  setLocation(lat:number, lng:number, zoom:number, mapType:any){
    this.lat = lat;
    this.lng = lng;
    this.zoom = zoom;
    this.mapType = mapType;
    this.getAdress(this.lat, this.lng);
  }

  getCurrentPosition(){
    navigator.geolocation.getCurrentPosition(position => {
    this.setLocation(position.coords.latitude, position.coords.longitude, 18, 'roadmap');
    })
  }

  getAdress(lat: number, lng: number){
    this.mapsAPILoader.load().then(() => {
      let geocoder = new google.maps.Geocoder;
      let latlng = {lat: lat, lng: lng};
      geocoder.geocode({'location':latlng}, (results) =>{
        if(results[0]){
          console.log(results);
          this.address = results[0].formatted_address;
        } else{
          alert('No results found');
        }
      });
    }
    )
  }


}
