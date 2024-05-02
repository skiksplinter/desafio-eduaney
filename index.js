// Variáveis para armazenar os dados do herói
let nome = "SkikS The Brave"; // Insira o nome do seu herói
let xp = 9005; // Insira a quantidade de XP do seu herói

// Definição das faixas de XP e seus respectivos níveis
const niveis = [
  { faixa: xp < 1000, nivel: "Ferro" },
  { faixa: xp >= 1000 && xp < 2000, nivel: "Bronze" },
  { faixa: xp >= 2000 && xp < 5000, nivel: "Prata" },
  { faixa: xp >= 5000 && xp < 7000, nivel: "Ouro" },
  { faixa: xp >= 7000 && xp < 8000, nivel: "Platina" },
  { faixa: xp >= 8000 && xp < 9000, nivel: "Ascendente" },
  { faixa: xp >= 9000 && xp < 10000, nivel: "Imortal" },
  { faixa: xp >= 10000, nivel: "Radiante" },
];

// Encontrando o nível do herói
let nivelAtual;
for (const nivel of niveis) {
  if (nivel.faixa) {
    nivelAtual = nivel.nivel;
    break;
  }
}

// Exibindo a mensagem final
console.log(`O Herói de nome ${nome} está no nível de ${nivelAtual}`);
