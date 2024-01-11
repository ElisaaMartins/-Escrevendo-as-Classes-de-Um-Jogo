class jogo{
    constructor(nomeJogador, idadeJogador, tipoJogador){
        this.nomeJogador = nomeJogador
        this.idadeJogador = idadeJogador
        this.tipoJogador = tipoJogador
    }

    atacar(){

        let ataque = ""

        switch (this.tipoJogador){ 
            case "mago":
            ataque = "magia"
            break
            
            case "guerreiro":
            ataque = "espada"
            break
            
            case "monge":
            ataque = "artes marciais"
            break

            case "ninja":
            ataque = "shuriken"
            break

            default:
            ataque = "ataque indefinido"
          }

        console.log(`O ${this.tipoJogador} atacou usando ${ataque}`)

        }
    }

    let jogador = new jogo("Josias", 100, "mago")

    jogador.atacar()
