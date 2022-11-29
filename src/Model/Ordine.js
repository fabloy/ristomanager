export class Ordine{
    constructor(nomeCliente, telefono, descrizione, ingredienti, data,nomeProdotto, id){
        this.nomeCliente=nomeCliente;
        this.telefono=telefono
        this.descrizione=descrizione;
        this.ingredienti=ingredienti;
        this.data=data;
        this.nomeProdotto = nomeProdotto;
        this.id=id;
     }
    getDettagliOrdine(){
        return `Ordine n. ${this.id} di ${this.nome} tel:${this.telefono} 
        descrizione:${this.descrizione} ingredienti: ${this.ingredienti} data: ${this.data}`
    }
   }