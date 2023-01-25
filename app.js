
// acortar texto
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const text = card.querySelector(".texto");
    const btn = card.querySelector(".leer-mas");

    if(text.textContent.length > 100) {
        let originalText = text.textContent;
        text.textContent = text.textContent.slice(0, 100) + "...";
        btn.style.display = "block";
        btn.addEventListener("click", () => {
            text.textContent = originalText;
            btn.style.display = "none";
        });
    }else{
        btn.style.display = "none";
    };
    
});


new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.carousel__indicadores',
    arrows: {
        prev: '.carousel__anterior',
        next: '.carousel__siguiente'
    },
    responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 450,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }
    ]
});

const links = document.querySelectorAll('nav a')
for (let link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    let href = link.getAttribute('href')
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    })
  })
}

const link = document.querySelectorAll("a");
links.forEach(linkk => {
  linkk.addEventListener("click", function() {
    document.querySelector("ul").style.left = "-100%";
  });
});

const checkbtn = document.querySelector(".checkbtn");
const navbar = document.querySelector("ul");

checkbtn.addEventListener("click", function() {
    if(navbar.style.left === "-100%"){
        navbar.style.left = "0";
    } else {
        navbar.style.left = "-100%";
    }
});