var tela = 1
var largura = 200
var altura = 50
var xMenu = 225
var yMenu1 = 315
var yMenu2 = 375
var yMenu3 = 435

let x = 100
let y = 100

let img;

function preload(){
 close = loadImage('close.png')
 seta = loadImage('setas.png')
 pocoyo = loadImage('Pocoyo.png')
 eu = loadImage('eu.png')
 adriano = loadImage('adriano.jpeg')
}
function setup() {
  createCanvas(700, 500);
}

function draw() {
  textStyle(NORMAL)

  if (tela == 1){
    background('#5A23B5');
//tela menu
//botao iniciar
textAlign(CENTER)
textSize(26)

if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura ){
  stroke('#f0f0f0');
  fill('#140996');
  rect(xMenu, yMenu1, largura, altura, 15);
  if (mouseIsPressed){
    tela = 2;
  }
  }
fill('#f0f0f0');
noStroke();
text("START", 325, 350);
  
//botao como jogar
if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura ){
  stroke('#f0f0f0');
  fill('#140996')
  rect(xMenu, yMenu2, largura, altura, 15)
  if (mouseIsPressed){
    tela = 3;
  }
}
  fill('#f0f0f0')
  noStroke()
  text("Como Jogar", 325, 410)

  //botao creditos
  if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura ){
    stroke('#f0f0f0');
    fill('#140996');
    rect(xMenu, yMenu3, largura, altura, 15);
    if (mouseIsPressed){
    tela = 4;
    }
  }
  fill('#f0f0f0');
  noStroke();
  text("Creditos", 325, 470);
}
if (tela == 2){
  background('#323030')
  
  if (keyIsDown(LEFT_ARROW)){
        x-=5;}
      if (keyIsDown(RIGHT_ARROW)){
        x+=5;}
      if (keyIsDown(UP_ARROW)){
        y-=5;}
      if (keyIsDown(DOWN_ARROW)){
        y+=5;}

  image(Pocoyo, x, y, 100, 100)

}

//Regras
if (tela == 3){
  background('#5A23B5');
  textSize(50)
  textAlign(CENTER)
  text("Regras", 325, 110)
  textAlign(LEFT)
  textSize(25)
  text("Com as setas do teclado, leve o Pocoyo\naté a figura geométrica correspondente\nà resposta correta.", 100, 180)
  image(seta, 100, 300, 200, 200)
  image(pocoyo, 370, 280, 200, 200)
if (mouseX > 540 && mouseX < 540 + 40 && mouseY > 20 && mouseY < 20 + 40) {
  fill(240);
  rect(537, 17.8, 45, 45, 45); 
      if (mouseIsPressed) {
        tela = 1;

      }
} 
  image(close,540,20,40,40);
}

//Créditos
if (tela == 4){
  background('#5A23B5');
  text("Jogo desenvolvido por Vitor Lucas\nGraduando do curso de Ciência e Tecnologia da UFRN\nOrientado por: Adriano Marques", 325, 410)
  image(eu, 100, 79, 200, 350)
  image(adriano, 400, 150, 199, 199)
  text("Desenvolvedor", 200, 140)
  text("Orientador", 500, 140)
  if (mouseX > 540 && mouseX < 540 + 40 && mouseY > 20 && mouseY < 20 + 40) {
    fill(240);
    rect(537, 17.8, 45, 45, 45); 
        if (mouseIsPressed) {
          tela = 1;

        }
 } 
    image(close,540,20,40,40);
}
}