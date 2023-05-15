export class Educacion {
    id: string;
    nombre:string;
    titulo: string;
    fechaInicio:string;
    fechaFin:string;

    constructor(id: string, nombre:string, titulo:string, fechaInicio:string, fechaFin:string){
        this.nombre=nombre;
        this.id=id;
        this.titulo=titulo;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;

    }

}