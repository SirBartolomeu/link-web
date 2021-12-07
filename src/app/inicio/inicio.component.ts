import { Component, OnInit } from '@angular/core';
import { CarouselInicialComponent } from '../carousel-inicial/carousel-inicial.component';

@Component({
  selector: 'inicio-comp',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  //  images = ['assets/galpao.png', 'assets/Porto.jpg', 'assets/transporte.jpg'] 
  constructor() {
    
  }

  ngOnInit(): void {
    this.assetsImages = "/home/arturo/Desktop/ProjetoLink/link-web/src/assets/galpao.png"
  }

   assetsImages = ""

}
