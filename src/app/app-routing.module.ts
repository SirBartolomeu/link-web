import { OperacoesComponent } from './servicos/operacoes/operacoes.component';
import { TecnologiaComponent } from './servicos/tecnologia/tecnologia.component';
import { TransporteComponent } from './servicos/transporte/transporte.component';
import { FaleConoscoComponent } from './contato/fale-conosco/fale-conosco.component';
import { ArmazenagemComponent } from './servicos/armazenagem/armazenagem.component';
import { SobreComponent } from './historia/sobre/sobre.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path:'sobre', component: SobreComponent },
  //to do: rota para cada serviço e subrota
  { path:'serviços/armazenagem', component: ArmazenagemComponent },
  { path:'serviços/transporte', component: TransporteComponent },
  { path:'serviços/tecnologia', component:  TecnologiaComponent},
  { path:'serviços/operações', component: OperacoesComponent },
  { path:'contato', component: FaleConoscoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
