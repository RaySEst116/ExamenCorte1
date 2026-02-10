import { Component, signal, Input, ViewChild } from '@angular/core';
import { AgregarCalificacion } from '../../components/agregar-calificacion/agregar-calificacion';

interface Registro {
  matricula: string;
  nombre: string;
  corte1: string;
  corte2: string;
  corte3: string;
}

@Component({
  selector: 'app-calificaciones',
  imports: [AgregarCalificacion],
  templateUrl: './calificaciones.html',
  styleUrl: './calificaciones.scss',
})

export class Calificaciones {
  protected readonly title = signal('examen');

  @Input() registros: Registro[] = []
  @ViewChild(AgregarCalificacion) agregarCalificacionComponent!: AgregarCalificacion;
  registroSeleccionado: Registro | null = null;
  indiceEdicion: number = -1;

  addRegistro(registro: Registro) {
    if (this.registroSeleccionado && this.indiceEdicion !== -1) {
      this.registros[this.indiceEdicion] = registro;
      this.registroSeleccionado = null;
      this.indiceEdicion = -1;
    } else {
      this.registros.push(registro);
    }
  }

  delete(registro: Registro) {
    this.registros = this.registros.filter(r => r !== registro)
  }

  edit(registro: Registro) {
    this.registroSeleccionado = registro;
    this.indiceEdicion = this.registros.findIndex(r => r.matricula === registro.matricula);
    this.agregarCalificacionComponent.cargarDatosEdicion(registro);
  }
}
