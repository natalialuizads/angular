import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
})
export class PerfilComponent implements OnInit {
  idUsuario: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    /*
     * Pegando os parametros da rota
     * Exemplo 1:                    */
    this.activatedRoute.params.subscribe((res) => {
      this.idUsuario = res.id;
    });

    // Exemplo 2:
    const { id } = this.activatedRoute.snapshot.params;
    console.log(id);

    // Pegando queryParams da rota
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(res);
    });

    // Redirect pelo componente ao inves template
    setInterval(() => {
      /*
      Não faz reload da página
      this.router.navigate(['']);
       */

      /*
      Faz reload da página
      */
      this.router.navigateByUrl('');
    }, 5000);
  }
}
