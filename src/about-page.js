
export default function about_page() {
  const content = document.querySelector('.content');
  content.textContent = "";

  const section = document.createElement('section');
  section.classList.add('about-page-body');
  content.appendChild(section);

  const h1 = document.createElement('h1');
  h1.textContent = "About Us:";
  section.appendChild(h1);

  
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3= document.createElement('p');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');

  p1.innerHTML = 
                    "Welcome to <b>Food & Drinks Restaurant</b>, where culinary delights meet exceptional experiences! Our journey began with a passion for food and a vision to create a dining destination that celebrates flavor, creativity, and community.";
  p2.innerHTML = 
                    "At <b>Food & Drinks Restaurant</b>, we are committed to using only the finest ingredients, sourcing locally whenever possible. Our diverse menu features a blend of traditional favorites and innovative creations, all crafted to satisfy every palate.";
  p3.innerHTML = 
                    "<b>Our mission</b> is to create memorable experiences for our guests, and our dedicated team is here to ensure you feel at home. From our talented chefs to our friendly staff, we all share a love for hospitality and a commitment to your satisfaction.";
  p4.innerHTML = 
                    "Join us on a gastronomic journey filled with delightful flavors, warm hospitality, and a sense of community. We invite you to explore our menu, make a reservation, or follow us on social media to stay updated on our latest offerings and events.";
  p5.innerHTML = "We can't wait to serve you!";

  section.appendChild(p1);
  section.appendChild(p2);
  section.appendChild(p3);
  section.appendChild(p4);
  section.appendChild(p5);


  
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
