import { Refreshable } from "./refreshable";

export class ExampleRouteComponent implements Refreshable {
    refresh(){
        console.log("REFRESH");
        
        return "recarga pantalla";
    }
}
