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
      nombre: ['', Validators.required],
      matricula: ['', Validators.required],
      corte1: [''],
      corte2: [''],
      corte3: ['']
    });
  }

  submit() {
    if (this.formularioCalif.valid) {
      this.registro.emit(this.formularioCalif.value)
      this.formularioCalif.reset()

      console.log(this.formularioCalif.value)
    } else {
      alert('Datos no validos')
    }
  }
}