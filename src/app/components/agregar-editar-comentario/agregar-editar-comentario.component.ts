import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { comentario } from 'src/app/interfaces/comentario';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {
agregarcomentario: FormGroup;
  constructor(private fb: FormBuilder) { 
      this.agregarcomentario = this.fb.group({
        titulo: ['', Validators.required],
        creador: ['', Validators.required],
        texto: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }
  agregar(){
    console.log(this.agregarcomentario)
    const comentario: comentario = {
      titulo: this.agregarcomentario.get('titulo')?.value,
      creador: this.agregarcomentario.get('titulo')?.value,
      texto: this.agregarcomentario.get('titulo')?.value,
      fechaCreacion: new Date,
    }
    console.log(comentario);
  }

}
