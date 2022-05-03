export class Ordine{
    constructor(nome, telefono, descrizione, ingredienti, data, id){
        this.nome=nome;
        this.telefono=telefono
        this.descrizione=descrizione;
        this.ingredienti=ingredienti;
        this.data=data
        this.id=id;
     }
    getDettagliOrdine(){
        return `Ordine n. ${this.id} di ${this.nome} tel:${this.telefono} 
        descrizione:${this.descrizione} ingredienti: ${this.ingredienti} data: ${this.data}`
    }
   }