class Contato {
    // Metodo construtor
    constructor(){
        this.nome = null;
        this.email = null;
        this.fone = null;
        this.mensagem = null;
        this.dt_cad = new Date();
        this.idade = null;
        this.tipo_contato = null;
    }
    // verificar se o numero é numero
    // if (/^\d+$/.teste(this.na))

    // metodo expesifico do metodo esésifico da classe contato
    Enviar(event){
            event.preventDefault();
            const aviso = "Você está na pagina de contato";
            let ano = 2025;
            let erros = "";

            this.nome = getElementById('Nome').value;
            this.email = getElementById('Email').value;
            this.fone = getElementById('Telefone').value;
            this.mensagem = getElementById('Mensagem').value;
            this.dt_cad = new Date();
            this.idade = getElementById('Idade').value;
            this.tipo_contato = getElementById('Tipo_contato').value;

            if(this.nome == ''){
                alert("Nome precisa ser preenchido")
            }
            alert(aviso + ' de ' + this.nome.value + ' em ' + ano);

            let tabela = document

            linha.insertCell().linha.innerHTML = this.nome;
            linha.insertCell().linha.innerHTML = this.email;
            linha.insertCell().linha.innerHTML = this.fone;
            linha.insertCell().linha.innerHTML = this.mensagem;
            linha.insertCell().linha.innerHTML = this.Date;
            linha.insertCell().linha.innerHTML = this.idade;
            linha.insertCell().linha.innerHTML = this.tipo_contato;
            
    }
}

contato = new Contato();

// function Enviar(){
//     let usuario = "Bernardo"
//             const aviso = "Você está na pagina de contato"
//             let ano = 2025

//             if(usuario === null){
//                 alert("Dado invalido")
//             }

//             alert(aviso + " de " + this.nome + " em " + ano)
//         }
