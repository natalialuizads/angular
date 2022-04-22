import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateChildGuard implements CanActivateChild {
  /**
   * É semelhante a CanActivate, mas se aplica a rotas aninhadas.
   * @param childRoute
   * @param state
   *
   */
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return childRoute.queryParams.user === 'admin' &&
      childRoute.queryParams.password === '1234'
  }

}
