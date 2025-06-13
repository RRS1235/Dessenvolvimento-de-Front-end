class Contato {
    constructor() {
        this.contatos = [];
        this.dt_cad = new Date();
    }

    enviar(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('gmail').value;
        const phone = document.getElementById('phone').value;
        const mensagem = document.getElementById('mensagem').value;
        const idade = document.getElementById('idade').value;
        const tipo_contato_radio = document.getElementsByName('tipo_contato');
        
        let tipo_contato = "Não selecionado";
        for (let i = 0; i < tipo_contato_radio.length; i++) {
            if (tipo_contato_radio[i].checked) {
                tipo_contato = tipo_contato_radio[i].value;
                break;
            }
        }

        const novoContato = {
            nome,
            email,
            phone,
            mensagem,
            idade,
            tipo_contato,
            dt_cad: new Date()
        };

        this.contatos.push(novoContato);
        this.adicionarNaTabela(novoContato);
        document.querySelector("form").reset();
    }

    adicionarNaTabela(contato) {
        const tabela = document.querySelector("#tabGrid table");

        const linha = tabela.insertRow();

        linha.insertCell().innerText = contato.nome;
        linha.insertCell().innerText = contato.email;
        linha.insertCell().innerText = contato.phone;
        linha.insertCell().innerText = contato.mensagem;
        linha.insertCell().innerText = contato.idade;
        linha.insertCell().innerText = contato.tipo_contato;

        const cellAcoes = linha.insertCell();

        const btnEditar = document.createElement('button');
        btnEditar.innerText = 'Editar';
        btnEditar.onclick = () => this.editarContato(linha, contato);

        const btnDeletar = document.createElement('button');
        btnDeletar.innerText = 'Excluir';
        btnDeletar.onclick = () => tabela.deleteRow(linha.rowIndex);

        cellAcoes.appendChild(btnEditar);
        cellAcoes.appendChild(btnDeletar);
    }

    editarContato(linha, contato) {
        const celulas = linha.cells;

        document.getElementById('nome').value = celulas[0].innerText;
        document.getElementById('gmail').value = celulas[1].innerText;
        document.getElementById('phone').value = celulas[2].innerText;
        document.getElementById('mensagem').value = celulas[3].innerText;
        document.getElementById('idade').value = celulas[4].innerText;

        const tipo = celulas[5].innerText.toLowerCase();
        if (tipo === "whatsapp") document.getElementById('whatsapp_cont').checked = true;
        else if (tipo === "discord") document.getElementById('discord_cont').checked = true;
        else if (tipo === "email") document.getElementById('email_cont').checked = true;

        linha.remove();
    }
}

const contato = new Contato();

// => "=" atribui   =>"=="compara o conteudo string a =2025; int b = 2025  a==b(true) => "===" compara variaveis 
// string a = 2025 int b = 2025 a===b(false)
