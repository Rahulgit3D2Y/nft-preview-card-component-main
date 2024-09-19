const card = document.querySelector(".container");

card.addEventListener("mousemove", (e) => {
  const cardRect = card.getBoundingClientRect();
  const centerX = cardRect.left + cardRect.width / 2;
  const centerY = cardRect.top + cardRect.height / 2;

  const mouseX = e.clientX - centerX;
  const mouseY = e.clientY - centerY;

  const rotateX = (mouseY / cardRect.height) * 30; // Adjust the tilt intensity
  const rotateY = (mouseX / cardRect.width) * -30;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});
