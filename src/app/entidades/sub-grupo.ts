export class SubGrupo {
    private _id!: number;
    private _nombre!: string;
    private _grupo!: number;

    public SubGrupo(){
        this._id = 0;        
        this._nombre = "";
        this._grupo = 0;
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

    public get grupo(){
        return this._grupo;
    }

    public set grupo(newGrupo:number){
        this._grupo = newGrupo;
    }
}
