
export default function contact_page() {
  const content = document.querySelector('.content');
  content.textContent = "";

  const section = document.createElement('section');
  section.classList.add('contact-page-body');
  content.appendChild(section);

  const div1 = document.createElement('div')
  const div2 = document.createElement('div')
  
  section.appendChild(div1);
  section.appendChild(div2);

  const h1 = document.createElement('h1');
  h1.textContent = "Contact Us:";
  div1.appendChild(h1);

  const p1 = document.createElement('p');
  const p2 = document.createElement('p');

  p1.textContent = "We’d love to hear from you! Whether you have a question, feedback, or want to make a reservation, feel free to reach out to us. Our team is here to assist you and ensure your experience with us is exceptional."
  p2.innerHTML = "<b>Contact us today — we look forward to connecting with you!</b>"
  
  div1.appendChild(p1);
  div1.appendChild(p2);

  const form = document.createElement('form');
  div2.appendChild(form);

  const label1 = document.createElement('label');
  const label2 = document.createElement('label');
  const label3 = document.createElement('label');

  label1.textContent = "First Name:";
  label2.textContent = "last Name:";
  label3.textContent = "Email:";

  const input1 = document.createElement('input');
  const input2 = document.createElement('input');
  const input3 = document.createElement('input');
  const textarea = document.createElement('textarea');
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');

  input3.type = "email";
  button2.type = "reset";

  button1.textContent = "Submit";
  button2.textContent = "Reset";

  form.appendChild(label1);
  form.appendChild(input1);
  form.appendChild(label2);
  form.appendChild(input2);
  form.appendChild(label3);
  form.appendChild(input3);
  form.appendChild(textarea);
  form.appendChild(button1);
  form.appendChild(button2);

  button1.addEventListener('click', (e) => e.preventDefault());

  
  const authorDiv = document.createElement('div');
  authorDiv.classList.add('contactAuthor');
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

  div2.appendChild(authorDiv);

}
