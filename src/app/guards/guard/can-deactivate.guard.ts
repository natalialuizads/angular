import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from '../pages/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<HomeComponent> {
  /**
   * Decide se um usuário pode navegar para longe de uma rota (ou componente),
   * como solicitar a confirmação de alterações pendentes.
   * @param component
   * @param currentRoute
   * @param currentState
   * @param nextState
   */
  canDeactivate(
    component: HomeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return component.exit();
  }

}
