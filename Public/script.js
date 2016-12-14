window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return; //end if no audio selected

  audio.currentTime = 0; //resets time to 0
  key.classList.remove('playing');

  audio.play();

  key.classList.add('playing');
 // key.classList.remove('playing');
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
