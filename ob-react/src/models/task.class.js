import { LEVELS } from "./levels.enum";

export class Task{
    
    //Variables de instancia
    name='';
    description='';
    completed=false;
    level= LEVELS.NORMAL

    //Constructor
    constructor(name, description, completed, level){
        this.name=name;
        this.description=description;
        this.completed=completed;
        this.level=level;
    }








}