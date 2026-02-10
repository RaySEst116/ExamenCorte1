import { Component, EventEmitter, Input } from '@angular/core';
import { Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Output } from '@angular/core';

interface Registro {
  matricula: string;
  nombre: string;
  corte1: string;
  corte2: string;
  corte3: string;
}

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
  @Output() registro = new EventEmitter<Registro>()
  modoEdicion: boolean = false;

  constructor(private fb: FormBuilder) {
    this.formularioCalif = this.fb.group({
      nombre: ['', Validators.required],
      matricula: ['', Validators.required],
      corte1: [''],
      corte2: [''],
      corte3: ['']
    });
  }

  cargarDatosEdicion(registro: Registro) {
    this.modoEdicion = true;
    this.formularioCalif.patchValue({
      nombre: registro.nombre,
      matricula: registro.matricula,
      corte1: registro.corte1,
      corte2: registro.corte2,
      corte3: registro.corte3
    });
  }

  submit() {
    if (this.formularioCalif.valid) {
      this.registro.emit(this.formularioCalif.value)
      this.formularioCalif.reset()
      this.modoEdicion = false;

      console.log(this.formularioCalif.value)
    } else {
      alert('Datos no validos')
    }
  }

  resetForm() {
    this.formularioCalif.reset();
    this.modoEdicion = false;
  }
}
