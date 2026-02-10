import { Component, signal, Input } from '@angular/core';
import { AgregarCalificacion, formularioCalif } from '../../components/agregar-calificacion/agregar-calificacion';

interface Registro {
  matricula: string;
  nombre: string;
  corte1: string;
  corte2: string;
  corte3: string;
}

@Component({
  selector: 'app-calificaciones',
  imports: [AgregarCalificacion, formularioCalif],
  templateUrl: './calificaciones.html',
  styleUrl: './calificaciones.scss',
})

export class Calificaciones {
  protected readonly title = signal('examen');

  @Input() registros: Registro[] = []
  @Input() editarRegistro: Registro

  addRegistro(registro: Registro) { this.registros.push(registro) }

  delete(registro: Registro) {
    this.registros = this.registros.filter(r => r !== registro) 
  }

  edit() {
    this.formularioCalif.setValue({
      nombre: this.editarRegistro.nombre,
      corte1: this.editarRegistro.corte1,
      corte2: this.editarRegistro.corte2,
      corte3: this.editarRegistro.corte3
    })
  }
}
