import { Routes } from '@angular/router';
import { Calificaciones } from './pages/calificaciones/calificaciones';
import { DatosGenerales } from './pages/datos-generales/datos-generales';

export const routes: Routes = [
    {
        path: '',
        component: Calificaciones
    },
    {
        path: 'calificaciones',
        component: Calificaciones
    },
    {
        path: 'datos-generales',
        component: DatosGenerales
    }
];
