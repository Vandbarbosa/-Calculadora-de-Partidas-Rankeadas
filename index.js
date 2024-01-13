
let saldovitoriasTotal= saldoVitorias (115, 14 ) 

function saldoVitorias (vitorias, derrotas) {

    let quantidadevitorias= vitorias
    let vitoriasTotal= vitorias-derrotas
    let nameHeroi= "Jacolle"
 
    
    console.log("O herói " + nameHeroi + " tem saldo de " + vitoriasTotal + " e está no " )


    if (quantidadevitorias <10) { console.log ( "nivel Ferro" )
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               else if (vitoriasTotal >=11 & vitoriasTotal <=20) { return nivel= "Bronze"
        }

    else if (quantidadevitorias >=21 && quantidadevitorias<=50) { console.log ("nivel Prata" )              
            }

    else if (quantidadevitorias >=51 && quantidadevitorias <=80) { console.log ("nivel Ouro")
            }

    else if (quantidadevitorias >=81 && quantidadevitorias <=90) { console.log ( "nivel Diamante")
            }

    else if (quantidadevitorias >=91 && quantidadevitorias <=100) { console.log  ("nivel Lendário") 
            }

    else if (quantidadevitorias >=101) { console.log  (nivel= "nivel Imortal")}

    return vitoriasTotal          
            

                       
           

     }
            
    
