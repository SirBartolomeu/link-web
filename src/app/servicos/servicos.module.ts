import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArmazenagemComponent } from './armazenagem/armazenagem.component';
import { OperacoesComponent } from './operacoes/operacoes.component';
import { TransporteComponent } from './transporte/transporte.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';



@NgModule({
  declarations: [
    ArmazenagemComponent,
    OperacoesComponent,
    TransporteComponent,
    TecnologiaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicosModule { }
