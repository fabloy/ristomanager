

export const filtra=(el, elenco)=>{
  let nuovoElencoOrdiniDaEvadere = elenco.filter(f=>f!==el)
  let elencoOrdiniEvasi = elenco.filter(f=>f===el)
  return [nuovoElencoOrdiniDaEvadere, elencoOrdiniEvasi]
}