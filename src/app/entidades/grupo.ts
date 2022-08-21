export class Grupo {
    private _id!: number;
    private _nombre!: string;
    private _descripcion!: string;

    public Grupo(){
        this._id = 0;        
        this._nombre = "";
        this._descripcion = "";
    }

    public get id(){
        return this._id;
    }

    public set id(newId:number){
        this._id = newId;
    }

    public get nombre(){
        return this._nombre;
    }

    public set nombre(newNombre:string){
        this._nombre = newNombre;
    }

    public get descripcion(){
        return this._descripcion;
    }

    public set descripcion(newDescripcion:string){
        this._descripcion = newDescripcion;
    }
}
