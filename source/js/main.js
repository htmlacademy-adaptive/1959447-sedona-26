const likeButtons = Array.from(document.querySelectorAll(".button-love"));
const likesNumbers = Array.from(document.querySelectorAll(".card__like-count"));

likeButtons.forEach ((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("button-love--like");
    const current = Number(likesNumbers[index].textContent);
    const inc = button.classList.contains("button-love--like")? 1 : -1;
    likesNumbers[index].textContent = current + inc;
  })
})
