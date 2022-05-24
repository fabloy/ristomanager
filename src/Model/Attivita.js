export class Attivita{
    constructor(nome, email, password, id){
        this.nome=nome;
        this.email=email;
        this.password= password;
        this.ordiniDaEvadere=[];
        this.ordiniEvasi=[];
        this.id=id;
     }
     setOrdineDaEvadere(ordine){
       this.ordineDaEvadere=[...this.ordiniDaEvadere, {...ordine}]
     }
     evadiOrdine(ordineDaEvadere){
       console.log(this.ordiniDaEvadere.filter(ord=>ord!==ordineDaEvadere))
     }
     getAttivitaDetail(){
      return `Nome attività: ${this.nome}, Email attività: ${this.email}`
    }
   }
