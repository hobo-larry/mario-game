
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const restart = document.querySelector('.restart')  

restart.addEventListener('click', ()=> {
    
      restartGame();
    
  });

//handle jump

    document.addEventListener('keydown',  (event) => {
        if (event.key === ' ') {
            mario.classList.add('jump');
            setTimeout(() => {
                mario.classList.remove('jump');
            }, 5);
        }
       
    
}
)
function restartGame() {
    location.reload();
  }


document.addEventListener('keydown', (event)=> {
    if (event.key === 'r' || event.key === 'R') 
      restartGame();
    }
  );
//handle collision


function collision() {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {
        // Collision logic here
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        restart.style.display = 'block';
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
      }
      setInterval(collision, 20);
    
}
collision()