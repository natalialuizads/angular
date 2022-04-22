import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  /**
   * Verifica se pode ou não carregar o módulo específico.
   * Geralmente usado com Lazy-Load
   * @param route
   * @param segments
   */
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(segments[0]?.path === 'contato'){
      return true
    }

    alert('Módulo não foi carregado')
    return false;
  }
}
