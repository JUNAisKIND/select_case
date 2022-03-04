const toggleBtn = document.querySelector(".navbar_toggle");

const nav = document.querySelector(".navbar");
const menu = document.querySelector(".navbar_menu");
const sns = document.querySelector(".navbar_sns");

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  menu.classList.toggle('active');
  sns.classList.toggle('active');
})
class afterText extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode : 'open'});
    this.shadowRoot.innerHTML = `<span></span><style>span::after {content: "${this.innerHTML}";}</style>`;
  }
}
customElements.define('af-t', afterText);

function changeImg(id, img) { //id format : type1, type2, type3 ...
  const docu = document.querySelector(`#${id} div img`);
  docu.setAttribute("src", `images/${id}/${img}.jpg`);
}

function goBuying() {
  if(confirm("구매하러 가실 건가요?")) {
    window.open('others/buying.html');
  } 
}