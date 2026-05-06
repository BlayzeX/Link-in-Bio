document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener("click", () => {
    const link = btn.dataset.link;
    if (link) {
      window.open(link, "_blank");
    }
  });
});
const buttons = document.querySelectorAll("button");

buttons.forEach((btn, index) => {
  setTimeout(() => {
    btn.classList.add("show");
  }, index * 150);
});
let i = 0;
let wordIndex = 0;
let isDeleting = false;

const words = ["Ahmed", "BlayzeX"];
const typing = document.getElementById('typing');

function typingAnimation(){
  let currentWord = words[wordIndex];

  if(!isDeleting){
    typing.innerHTML = currentWord.slice(0, i++);
    
    if(i > currentWord.length){
      isDeleting = true;
      setTimeout(typingAnimation, 1000); // pause
      return;
    }
  } 
  else {
    typing.innerHTML = currentWord.slice(0, i--);
    
    if(i === 0){
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typingAnimation, isDeleting ? 80 : 120);
}

typingAnimation();