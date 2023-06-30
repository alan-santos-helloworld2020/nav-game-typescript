import './style.scss'

const naveHeroContainer: HTMLDivElement | null = document.querySelector("#naveHeroContainer");
const contador: HTMLSpanElement | null = document.querySelector("#contador-nave");

let px = 0;
let py = 0;
let velocity=10

let largura = "150px"
let altura = "150px";

naveHeroContainer!.style.width = largura;
naveHeroContainer!.style.height = altura;


function gameControl(evt: KeyboardEvent){

  switch (evt.code) {
    case "ArrowRight":
      if (px < 1170) {
        px += velocity;
        naveHeroContainer!.style.left = `${px}px`
        naveHeroContainer!.style.transform = "rotate(90deg)"
      }
      break;
    case "ArrowLeft":
      if (px > 0) {
        px -= velocity;        
        naveHeroContainer!.style.left = `${px}px`
        naveHeroContainer!.style.transform = "rotate(-90deg)"
      }
      break;
    case "ArrowUp":
      if(py > 0)
        py -= velocity;
        naveHeroContainer!.style.top = `${py}px`
        naveHeroContainer!.style.transform = "rotate(0deg)"
      break;
    case "ArrowDown":
        if(py < 708)
          py += velocity;
          naveHeroContainer!.style.top = `${py}px`
          naveHeroContainer!.style.transform = "rotate(180deg)"
      break;
    default:
      break;
  }

  contador!.innerHTML = `posX:${px.toString()} posY:${py.toString()}`

}


document.addEventListener("keydown", gameControl);



