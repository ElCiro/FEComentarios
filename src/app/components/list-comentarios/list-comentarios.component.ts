import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentario';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios: Comentario []=[
  {
    titulo: 'Angular',
    creador:'Ciro Ivan',
    fechaCreacion: new Date(),
    texto:'Framework para crear SPA'
  },
  {
    titulo: 'Recat',
    creador:'Elayayaii',
    fechaCreacion: new Date(),
    texto:'Framework para crear SPA'
  },
  {
    titulo: 'VUE',
    creador:'ELCiro',
    fechaCreacion: new Date(),
    texto:'Framework progresivopara crear SPA'
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
