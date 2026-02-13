import { Component, signal, Input } from '@angular/core';
import { AgregarCalificacion } from '../../components/agregar-calificacion/agregar-calificacion';

interface Registro {
  matricula: string;
  nombre: string;
  corte1: string;
  corte2: string;
  corte3: string;
}

@Component({
  selector: 'app-calificacion',
  imports: [AgregarCalificacion],
  templateUrl: './calificacion.html',
  styleUrl: './calificacion.scss',
})
export class Calificacion {
  protected readonly title = signal('examen');

  @Input() registros: Registro[] = []

  addRegistro(registro: Registro) { this.registros.push(registro) }

  delete(registro: Registro) {
    this.registros = this.registros.filter(r => r !== registro) 
  }
}
