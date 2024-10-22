
export default function menu_page() {
  const content = document.querySelector('.content');
  content.textContent = "";

  const section = document.createElement('section');
  section.classList.add('menu-page-body');

  const h3 = document.createElement('h3');
  h3.textContent = "Cuisine Collection"

  const div1 = document.createElement("div");
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const div4 = document.createElement('div');
  const div5 = document.createElement('div');

  


  content.appendChild(section);
  section.appendChild(h3);
  section.appendChild(div1)
  
  div1.appendChild(div2);
  div1.appendChild(div3);
  div1.appendChild(div4);
  div1.appendChild(div5);

  const starterHeader = document.createElement('h3');
  starterHeader.textContent = "Starter"
  div2.appendChild(starterHeader);

  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');

  p1.textContent = "Soup of the Day";
  p2.textContent = "Stuffed Mushrooms";
  p3.textContent = "Mozzarella Sticks";
  p4.textContent = "Shrimp Cocktail";
  p5.textContent = "Hummus with Pita";

  div2.appendChild(p1);
  div2.appendChild(p2);
  div2.appendChild(p3);
  div2.appendChild(p4);
  div2.appendChild(p5);

  const mainCourse = document.createElement('h3');
  mainCourse.textContent = "Main Course"
  div3.appendChild(mainCourse);

  const p6 = document.createElement('p');
  const p7 = document.createElement('p');
  const p8 = document.createElement('p');
  const p9 = document.createElement('p');
  const p10 = document.createElement('p');
  const p11 = document.createElement('p');

  p6.textContent = "Grilled Chicken Breast";
  p7.textContent = "Vegetarian Stir-Fry ";
  p8.textContent = "Chicken Parmesan";
  p9.textContent = "Stuffed Bell Peppers";
  p10.textContent = "Margherita Pizza";
  p11.textContent = "Seafood Paella";

  div3.appendChild(p6);
  div3.appendChild(p7);
  div3.appendChild(p8);
  div3.appendChild(p9);
  div3.appendChild(p10);
  div3.appendChild(p11);

  const dessert = document.createElement('h3');
  dessert.textContent = "Dessert";
  div4.appendChild(dessert);

  const p12 = document.createElement('p');
  const p13 = document.createElement('p');
  const p14 = document.createElement('p');
  const p15 = document.createElement('p');
  const p16 = document.createElement('p');
  const p17 = document.createElement('p');

  p12.textContent = "Chocolate Lava Cake";
  p13.textContent = "Apple Pie";
  p14.textContent = "Crème Brûlée";
  p15.textContent = "Brownie Sundae";
  p16.textContent = "Ice Cream Trio";
  p17.textContent = "Sticky Toffee Pudding";

  div4.appendChild(p12);
  div4.appendChild(p13);
  div4.appendChild(p14);
  div4.appendChild(p15);
  div4.appendChild(p16);
  div4.appendChild(p17);

  const beverage = document.createElement('h3');
  beverage.textContent = "Beverage";
  div5.appendChild(beverage);

  const p18 = document.createElement('p');
  const p19 = document.createElement('p');
  const p20 = document.createElement('p');
  const p21 = document.createElement('p');
  const p22 = document.createElement('p');
  const p23 = document.createElement('p');

  p18.textContent = "Smoothies";
  p19.textContent = "Iced Coffee";
  p20.textContent = "Herbal Teas";
  p21.textContent = "Mocktailse";
  p22.textContent = "Soft Drinks";
  p23.textContent = "Wine";

  div5.appendChild(p18);
  div5.appendChild(p19);
  div5.appendChild(p20);
  div5.appendChild(p21);
  div5.appendChild(p22);
  div5.appendChild(p23);

  
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
