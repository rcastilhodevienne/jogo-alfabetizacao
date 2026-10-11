// Dicionário com 104 palavras divididas em 3 níveis
const dicionario = [
    // Nível 1: 3 a 4 letras (35 palavras)
    { p: "SOL", e: "☀️", n: 1 }, { p: "LUA", e: "🌙", n: 1 }, { p: "PAO", e: "🍞", n: 1 }, { p: "CAO", e: "🐶", n: 1 },
    { p: "GATO", e: "🐱", n: 1 }, { p: "RATO", e: "🐭", n: 1 }, { p: "LEAO", e: "🦁", n: 1 }, { p: "SAPO", e: "🐸", n: 1 },
    { p: "PATO", e: "🦆", n: 1 }, { p: "URSO", e: "🐻", n: 1 }, { p: "FOCA", e: "🦭", n: 1 }, { p: "BOLA", e: "⚽", n: 1 },
    { p: "CASA", e: "🏠", n: 1 }, { p: "DADO", e: "🎲", n: 1 }, { p: "FADA", e: "🧚", n: 1 }, { p: "FOGO", e: "🔥", n: 1 },
    { p: "GELO", e: "🧊", n: 1 }, { p: "BOLO", e: "🎂", n: 1 }, { p: "DOCE", e: "🍬", n: 1 }, { p: "BALA", e: "🍬", n: 1 },
    { p: "MAO", e: "🖐️", n: 1 }, { p: "PE", e: "🦶", n: 1 }, { p: "OLHO", e: "👁️", n: 1 }, { p: "UVA", e: "🍇", n: 1 },
    { p: "RIO", e: "🏞️", n: 1 }, { p: "MAR", e: "🌊", n: 1 }, { p: "CEU", e: "🌌", n: 1 }, { p: "TREM", e: "🚂", n: 1 },
    { p: "VACA", e: "🐄", n: 1 }, { p: "GALO", e: "🐓", n: 1 }, { p: "LOBO", e: "🐺", n: 1 }, { p: "MACA", e: "🍎", n: 1 },
    { p: "PERA", e: "🍐", n: 1 }, { p: "OVO", e: "🥚", n: 1 }, { p: "FLOR", e: "🌸", n: 1 },
    
    // Nível 2: 5 a 6 letras (35 palavras)
    { p: "TIGRE", e: "🐯", n: 2 }, { p: "COBRA", e: "🐍", n: 2 }, { p: "PORCO", e: "🐷", n: 2 }, { p: "MILHO", e: "🌽", n: 2 },
    { p: "LIVRO", e: "📖", n: 2 }, { p: "LAPIS", e: "✏️", n: 2 }, { p: "CHAVE", e: "🔑", n: 2 }, { p: "CARRO", e: "🚗", n: 2 },
    { p: "BARCO", e: "⛵", n: 2 }, { p: "NUVEM", e: "☁️", n: 2 }, { p: "CHUVA", e: "🌧️", n: 2 }, { p: "FOLHA", e: "🍃", n: 2 },
    { p: "PEIXE", e: "🐟", n: 2 }, { p: "RADIO", e: "📻", n: 2 }, { p: "MACACO", e: "🐒", n: 2 }, { p: "BANANA", e: "🍌", n: 2 },
    { p: "CAVALO", e: "🐎", n: 2 }, { p: "OVELHA", e: "🐑", n: 2 }, { p: "COELHO", e: "🐰", n: 2 }, { p: "JACARE", e: "🐊", n: 2 },
    { p: "GIRAFA", e: "🦒", n: 2 }, { p: "ABELHA", e: "🐝", n: 2 }, { p: "ARANHA", e: "🕷️", n: 2 }, { p: "BALEIA", e: "🐳", n: 2 },
    { p: "ARVORE", e: "🌳", n: 2 }, { p: "BONECA", e: "🪆", n: 2 }, { p: "MENINO", e: "👦", n: 2 }, { p: "MENINA", e: "👧", n: 2 },
    { p: "SORVETE", e: "🍦", n: 2 }, { p: "QUEIJO", e: "🧀", n: 2 }, { p: "RELOGIO", e: "⌚", n: 2 }, { p: "SAPATO", e: "👞", n: 2 },
    { p: "COROA", e: "👑", n: 2 }, { p: "NINHO", e: "🪹", n: 2 }, { p: "BALAO", e: "🎈", n: 2 },

    // Nível 3: 7+ letras (34 palavras)
    { p: "CACHORRO", e: "🐕", n: 3 }, { p: "TARTARUGA", e: "🐢", n: 3 }, { p: "ELEFANTE", e: "🐘", n: 3 }, { p: "FORMIGA", e: "🐜", n: 3 },
    { p: "TUBARAO", e: "🦈", n: 3 }, { p: "BORBOLETA", e: "🦋", n: 3 }, { p: "DINOSSAURO", e: "🦖", n: 3 }, { p: "HELICOPTERO", e: "🚁", n: 3 },
    { p: "FOGUETE", e: "🚀", n: 3 }, { p: "ESTRELA", e: "🌟", n: 3 }, { p: "PLANETA", e: "🪐", n: 3 }, { p: "CHOCOLATE", e: "🍫", n: 3 },
    { p: "BISCOITO", e: "🍪", n: 3 }, { p: "TELEFONE", e: "☎️", n: 3 }, { p: "BICICLETA", e: "🚲", n: 3 }, { p: "PRINCESA", e: "👸", n: 3 },
    { p: "PINGUIM", e: "🐧", n: 3 }, { p: "MORANGO", e: "🍓", n: 3 }, { p: "MELANCIA", e: "🍉", n: 3 }, { p: "ABACAXI", e: "🍍", n: 3 },
    { p: "CENOURA", e: "🥕", n: 3 }, { p: "BRINQUEDO", e: "🧸", n: 3 }, { p: "PRESENTE", e: "🎁", n: 3 }, { p: "MONSTRO", e: "👾", n: 3 },
    { p: "UNICORNIO", e: "🦄", n: 3 }, { p: "BOMBEIRO", e: "🧑‍🚒", n: 3 }, { p: "PROFESSOR", e: "🧑‍🏫", n: 3 }, { p: "HOSPITAL", e: "🏥", n: 3 },
    { p: "CACHOEIRA", e: "🏞️", n: 3 }, { p: "COMPUTADOR", e: "💻", n: 3 }, { p: "TELEVISAO", e: "📺", n: 3 }, { p: "PASSARINHO", e: "🐦", n: 3 },
    { p: "ESCORREGADOR", e: "🛝", n: 3 }, { p: "QUADRO", e: "🖼️", n: 3 }
];

let palavraAtual = "";
let letrasCorretas = [];
let pontuacao = 0;

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function mudarNivel() {
    iniciarRodada();
}

function iniciarRodada() {
    document.getElementById('btn-proximo').classList.add('escondido');
    letrasCorretas = [];
    
    // Filtrar palavras pelo nível
    const nivel = parseInt(document.getElementById('nivel').value);
    const palavrasValidas = dicionario.filter(item => item.n === nivel);
    
    // Escolher uma palavra aleatória
    const escolha = palavrasValidas[Math.floor(Math.random() * palavrasValidas.length)];
    palavraAtual = escolha.p;
    
    // Mostrar a imagem (Emoji)
    document.getElementById('emoji-display').textContent = escolha.e;
    
    // Criar as caixas vazias
    const slotsDiv = document.getElementById('slots-palavra');
    slotsDiv.innerHTML = "";
    for (let i = 0; i < palavraAtual.length; i++) {
        const slot = document.createElement('div');
        slot.className = 'slot';
        slot.id = 'slot-' + i;
        slotsDiv.appendChild(slot);
    }
    
    // Criar os botões de letras embaralhadas
    const letras = palavraAtual.split("");
    const letrasEmbaralhadas = embaralhar([...letras]);
    
    const botoesDiv = document.getElementById('letras-embaralhadas');
    botoesDiv.innerHTML = "";
    
    letrasEmbaralhadas.forEach((letra, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-letra';
        btn.textContent = letra;
        btn.onclick = () => tentarLetra(letra, btn);
        botoesDiv.appendChild(btn);
    });
}

function tentarLetra(letraSelecionada, botao) {
    const proximaPosicao = letrasCorretas.length;
    const letraCorreta = palavraAtual[proximaPosicao];
    
    if (letraSelecionada === letraCorreta) {
        // Acertou a letra!
        letrasCorretas.push(letraSelecionada);
        botao.classList.add('usada'); // Esconde o botão
        
        const slot = document.getElementById('slot-' + proximaPosicao);
        slot.textContent = letraSelecionada;
        slot.classList.add('preenchido');
        
        // Verifica se completou a palavra
        if (letrasCorretas.length === palavraAtual.length) {
            vitoria();
        }
    } else {
        // Errou a letra (Animação de tremer)
        botao.classList.add('shake');
        setTimeout(() => botao.classList.remove('shake'), 400);
    }
}

function vitoria() {
    pontuacao += 10;
    document.getElementById('pontuacao').textContent = pontuacao;
    
    // Pinta todos os slots de verde
    for (let i = 0; i < palavraAtual.length; i++) {
        document.getElementById('slot-' + i).classList.add('vitoria');
    }
    
    // Solta confetes mágicos!
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
    });
    
    // Mostra o botão para ir para a próxima
    document.getElementById('btn-proximo').classList.remove('escondido');
}

// Inicia o jogo ao abrir a página
iniciarRodada();
