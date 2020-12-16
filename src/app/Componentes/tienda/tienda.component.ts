import { Component, OnInit } from '@angular/core';
import { CatalogoTienda } from 'src/app/interface/catalogo-tienda';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  filtroBusqueda: string = "";

  catalogo: CatalogoTienda[] = [
    {
      title: "moto",
      description: "Moto de segunda mano",
      image: "assets/imgs/catalogo/moto1.jpg"
    },
    {
      title: "moto",
      description: "Moto de segunda mano",
      image: "assets/imgs/catalogo/moto2.jpg"
    },
    {
      title: "moto",
      description: "Moto de segunda mano",
      image: "assets/imgs/catalogo/moto3.jpg"
    },
    {
      title: "Repuesto",
      description: "Piezas",
      image: "assets/imgs/catalogo/neumatico.jpg"
    },
    {
      title: "Repuesto",
      description: "Piezas",
      image: "assets/imgs/catalogo/neumatico.jpg"
    },
    {
      title: "Repuesto",
      description: "Piezas",
      image: "assets/imgs/catalogo/neumatico.jpg"
    },
    {
      title: "Accesorios",
      description: "Cascos",
      image: "assets/imgs/catalogo/casco1.jpg"
    },
    {
      title: "Accesorios",
      description: "Cascos",
      image: "assets/imgs/catalogo/casco2.jpg"
    },
    {
      title: "Accesorios",
      description: "Cascos",
      image: "assets/imgs/catalogo/casco3.jpg"
    }
  ];


  constructor() {}

  getCatalogo(){
    return this.catalogo;
  }


  ngOnInit(): void {
  }

}


