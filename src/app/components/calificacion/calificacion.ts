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
  selector: 'app-calificacion',
  imports: [AgregarCalificacion],
  templateUrl: './calificacion.html',
  styleUrl: './calificacion.scss',
})
export class Calificacion {
  protected readonly title = signal('examen');

  @Input() registros: Registro[] = [
    { matricula: '2021001', nombre: 'Juan Perez', corte1: '6', corte2: '7', corte3: '8' },
    { matricula: '2021002', nombre: 'María Gómez', corte1: '9', corte2: '6', corte3: '5' },
    { matricula: '2021003', nombre: 'Carlos Ruiz', corte1: '4', corte2: '8', corte3: '7' },
  ]

  @ViewChild(AgregarCalificacion) agregarComp?: AgregarCalificacion;

  addRegistro(registro: Registro) {
    const idx = this.registros.findIndex(r => r.matricula === registro.matricula);
    if (idx > -1) {
      this.registros[idx] = registro;
    } else {
      this.registros.push(registro);
    }
  }

  seleccionar(registro: Registro) {
    this.agregarComp?.cargarDatosEdicion(registro);
  }

  delete(registro: Registro) {
    this.registros = this.registros.filter(r => r !== registro)
  }
}
