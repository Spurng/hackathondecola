import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import { DepoimentosPageComponent } from './components/depoimentos-page/depoimentos-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { LeisPaginaComponent } from './components/leis-pagina/leis-pagina.component';

const routes: Routes = [
  {
    path:'',
    component: MenuTemplateComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'depoimentos',
        component: DepoimentosPageComponent
      },
      {
        path: 'leis',
        component: LeisPaginaComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
