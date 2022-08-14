export class Imagen {
    private _id: number = 0;
    private _descripcion: string = "";
    private _archivo: string = "";
    private _grupo: number = 0;
    private _nombreGrupo: string = "";
    private _subGrupo: number = 0;
    private _nombreSubGrupo: string = "";
    private _nombre: string= "";
    private _fecha:Date = new Date("01/01/1999");

    public Imagen(){
      // TODO document why this method 'Imagen' is empty
    
    }

    public get id(){
        return this._id;
    }

    public set id(newId:number){
        this._id = newId;
    }

    public get descripcion(){
        return this._descripcion;
    }

    public set descripcion(newDescripcion:string){
        this._descripcion = newDescripcion;
    }

    public get archivo(){
        return this._archivo;
    }

    public set archivo(newArchivo:string){
        this._archivo = newArchivo;
    }

    public get grupo(){
        return this._grupo;
    }

    public set grupo(newGrupo:number){
        this._grupo = newGrupo;
    }

    public get nombreGrupo(){
        return this._nombreGrupo;
    }

    public set nombreGrupo(newGrupo:string){
        this._nombreGrupo = newGrupo;
    }

    public get subGrupo(){
        return this._subGrupo;
    }

    public set subGrupo(newSubGrupo:number){
        this._subGrupo = newSubGrupo;
    }

    public get nombreSubGrupo(){
        return this._nombreSubGrupo;
    }

    public set nombreSubGrupo(newSubGrupo:string){
        this._nombreSubGrupo = newSubGrupo;
    }

    public get nombre(){
        return this._nombre;
    }

    public set nombre(newNombre:string){
        this._nombre = newNombre;
    }

    public get fecha(){
        return this._fecha;
    }

    public set fecha(newFecha:Date){
        this._fecha = newFecha;
    }
}
