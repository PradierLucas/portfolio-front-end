export class Experiencia {

    nombreEmpresa: string;
    puesto: string;
    id: string;
    fechaInicio: string;
    fechaFin: string;
    descripcion: string;

    constructor(id: string, nombreEmpresa: string,
        puesto: string,
        fechaInicio: string,
        fechaFin: string,
        descripcion: string) {

        this.id = id;
        this.nombreEmpresa = nombreEmpresa;
        this.puesto = puesto;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.descripcion = descripcion;

    }
}
