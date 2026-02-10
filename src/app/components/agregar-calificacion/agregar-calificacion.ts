import { Component, EventEmitter } from '@angular/core';
import { Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Output } from '@angular/core';

@Component({
  selector: 'app-agregar-calificacion',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './agregar-calificacion.html',
  styleUrl: './agregar-calificacion.scss',
})
export class AgregarCalificacion {
  formularioCalif: FormGroup;
  @Output() registro = new EventEmitter()

  constructor(private fb: FormBuilder) {
    this.formularioCalif = this.fb.group({
      matricula: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      nombre: ['', [Validators.required, Validators.pattern("^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$")]],
      corte1: [''],
      corte2: [''],
      corte3: ['']
    });
  }

  
  submit() {
    if (this.formularioCalif.valid) {
      this.registro.emit(this.formularioCalif.value)
      this.formularioCalif.reset()
    } else {
      alert('Datos no validos')
    }
  }
}