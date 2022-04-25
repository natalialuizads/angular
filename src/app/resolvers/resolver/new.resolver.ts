import { NewsService } from './../services/news.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewResolver implements Resolve<any> {

  constructor(private newsService: NewsService){}
  /**
   * Resolver é usado para pré-buscar alguns dos dados quando o usuário
   * está navegando de uma rota para outra. Ele pode ser definido como uma
   * aobrdagem suave para aprimoar a experiência do usuário ao carregar dados
   * antes que o usuário navegue para componente específico.
   *
   * Para lidar com erros
   * Capturar e lidar com o erro no resolver usando operador catch do RxJS
   * Podemos retornar uma mensagem ou EMPTY e retornar usuário para /
   *
   * Exemplo com EMPTY:
   * this.router.navigate(['/'])
   * return EMPTY
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
   return this.newsService.getTopPosts().pipe(catchError(() => {
     return of('data not available at this time')
   }))
  }
}
