let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  let canvas = createCanvas(800, 400);
  canvas.parent('recomendador');  // Insere o canvas no elemento com id 'recomendador'
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade: ");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = int(campoIdade.value());  // Convertendo a idade para número
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 14) {
    return "O menino que descobriu o vento";
  } 
  if (idade >= 12) {
    return gostaDeFantasia || gostaDeAventura ? "Homem aranha: no aranhaverso" : "Ladrões de bicicleta";
  }
  if (idade >= 10) {
    return gostaDeFantasia ? "As aventuras de Pi" : "Depois da chuva";
  }
  return gostaDeFantasia ? "A viagem de Chihiro" : "O feitiço do tempo";
}
