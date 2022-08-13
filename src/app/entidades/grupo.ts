export class Grupo {
    private _id!: number;
    private _nombre!: string;

    public Grupo(){
        this._id = 0;        
        this._nombre = "";
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
}
