import { Pipe, PipeTransform } from '@angular/core';
import { CatalogoTienda } from '../interface/catalogo-tienda';

@Pipe({
  name: 'filtroTienda'
})
export class FiltroTiendaPipe implements PipeTransform {

  transform(catalogo: CatalogoTienda[], filterBy: string): CatalogoTienda[] {
    const filter=filterBy ? filterBy.toUpperCase(): null;
    if(filter){
      return catalogo.filter(catalogo => catalogo.title.toUpperCase().includes(filter));
    }
    return catalogo;
}

}
