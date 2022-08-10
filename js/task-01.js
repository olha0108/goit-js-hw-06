const navEl = document.querySelectorAll("li.item");

console.log(`Number of categories: ${navEl.length}`);

navEl.forEach((navEl) => {
  const titleEl = navEl.querySelector("h2");

  console.log(`Category: ${titleEl.textContent}`);

  const ulNavEl = navEl.querySelectorAll("li").length;

  console.log(`Elements: ${ulNavEl}`);
});
