import menu_page from "./menu-page";

export default function home_page() {
  const content = document.querySelector('.content');
  content.textContent = "";

  const section = document.createElement('section');
  section.classList.add('home-page-body');
  const h1 = document.createElement('h1');
  h1.textContent = "food & drinks restaurant";
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = "At Food & Drink, we believe that food and drink are more than just sustenance – they’re an experience, a journey, and a celebration of life’s most vibrant flavors. Whether you're a foodie looking for your next gourmet adventure or simply in need of a comforting meal to share with loved ones, we’ve got something to satisfy every craving."
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');
  const para3 = document.createElement('p');
  const menuButton = document.createElement('button');

  para1.textContent = "An Eclectic Culinary Experience";
  para2.textContent = "A Captivating Array of Drinks";
  para3.textContent = "Enchanting Live Music Performances";
  menuButton.textContent = "menu >>"

  content.appendChild(section)
  section.appendChild(h1);
  section.appendChild(div1);
  div1.appendChild(div2);
  div1.appendChild(div3);
  div2.appendChild(h3);

  div3.appendChild(para1)
  div3.appendChild(para2)
  div3.appendChild(para3)
  div3.appendChild(menuButton)

  menuButton.addEventListener('click', menu_page);

  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');
  const p = document.createElement('p');
  p.textContent = "By: Kwame Adonoo Paintsil";

  const anchorSpan = document.createElement('span');
  const a1 = document.createElement('a');
  const a2 = document.createElement('a');

  a1.href ="https://github.com/kapaintsil";
  a2.href ="https://x.com/KwameAdonoo";
  a1.target = "blank";
  a2.target = "blank";

  a1.innerHTML = `<i class="fa-brands fa-square-github"></i>`;
  a2.innerHTML = `<i class="fa-brands fa-square-x-twitter"></i>`;

  anchorSpan.appendChild(a1);
  anchorSpan.appendChild(a2);

  authorDiv.appendChild(p);
  authorDiv.appendChild(anchorSpan);

  section.appendChild(authorDiv);
}