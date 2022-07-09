import { Component, OnInit } from '@angular/core';
import { comentario } from 'src/app/interfaces/comentario';

@Component({
  selector: 'app-list-comentario',
  templateUrl: './list-comentario.component.html',
  styleUrls: ['./list-comentario.component.css']
})
export class ListComentarioComponent implements OnInit {

listcomentario:comentario[] =[
 { titulo:'Angular',creador:'fernando', fechaCreacion: new Date(),texto:'framework para crear SPA'},
  { titulo:'React',creador:'Miguel', fechaCreacion: new Date(),texto:'dada'} 
  
]


  constructor() { }

  ngOnInit(): void {
  }

}
