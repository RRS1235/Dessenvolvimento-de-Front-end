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
    // if (/^\)

    // metodo expesifico do metodo esésifico da classe contato
    Enviar(){
        this.nome = document.getElementById('nome');
            const aviso = "Você está na pagina de contato";
            let ano = 2025;

            if(this.nome === ""){
                alert("Nome precisa ser preenchido")
            }

            alert(aviso + ' de ' + this.nome.value + ' em ' + ano);
    }
}

contato = new Contato();
