export class Persona {

    id: string;
    nombre:string;
    apellido:string;
    titulo:string;
    foto:string;
    descripcion:string;

    constructor(id: string, nombre:string, apellido:string, titulo:string, foto:string, descripcion:string){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.titulo=titulo;
        this.foto=foto;
        this.descripcion=descripcion;
    }


}