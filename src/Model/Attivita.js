export class Attivita{
    constructor(nome, email, password, id){
        this.nome=nome;
        this.email=email;
        this.password= password;
        this.ordiniDaEvadere=[];
        this.ordiniEvasi=[];
        this.id=id;
     }
     getAttivitaDetail(){
      return `Nome attività: ${this.nome}, Email attività: ${this.email}`
    }
   }
