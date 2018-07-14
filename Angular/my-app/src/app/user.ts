export class User{
    constructor(
        public name:string, 
        public email:string, 
        public password:string, 
        public street:string, 
        public city:string, 
        public state:string,
        public checkme:boolean
    ){}
}