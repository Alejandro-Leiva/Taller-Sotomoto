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
      image: ""
    },
    {
      title: "moto",
      description: "Moto de segunda mano",
      image: ""
    },
    {
      title: "moto",
      description: "Moto de segunda mano",
      image: ""
    },
    {
      title: "Repuesto",
      description: "Piezas",
      image: ""
    },
    {
      title: "Repuesto",
      description: "Piezas",
      image: ""
    },
    {
      title: "Repuesto",
      description: "Piezas",
      image: ""
    },
    {
      title: "Accesorios",
      description: "Cascos",
      image: ""
    },
    {
      title: "Accesorios",
      description: "Cascos",
      image: ""
    },
    {
      title: "Accesorios",
      description: "Cascos",
      image: ""
    }
  ];


  constructor() {}

  getCatalogo(){
    return this.catalogo;
  }


  ngOnInit(): void {
  }

}


