export class Ordine{
    constructor(nomeCliente, telefono, descrizione, data,nomeProdotto,quantita, prezzo, id){
        this.nomeCliente=nomeCliente;
        this.telefono=telefono
        this.descrizione=descrizione;
        this.data=data;
        this.nomeProdotto = nomeProdotto;
        this.quantita=quantita;
        this.prezzo=prezzo;
        this.id=id;
     }
    getDettagliOrdine(){
        return `Ordine n. ${this.id} di ${this.nome} tel:${this.telefono} 
        descrizione:${this.descrizione} ingredienti: ${this.ingredienti} data: ${this.data}`
    }
   }