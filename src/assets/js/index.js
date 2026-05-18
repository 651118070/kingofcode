const menu = document.querySelector(".menu");
const navbar = document.querySelector("#mobileMenu");
const closeMenu = document.querySelector("#closeMenu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");

  navbar.classList.toggle("-translate-y-full");
  navbar.classList.toggle("translate-y-0");
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("translate-y-0");
  navbar.classList.add("-translate-y-full");

  menu.classList.remove("active");
});
const counters = document.querySelectorAll('.counter');

const startCounter = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');

    let count = 0;

    const updateCounter = () => {
      const increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerHTML = `<span class="text-orange"></span>${Math.ceil(count)}`;
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerHTML = `<span class="text-orange"></span>${target}`;
      }
    };

    updateCounter();
  });
};


// INTERSECTION OBSERVER
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      if (entry.target.querySelector('.counter')) {
        startCounter();
      }
    }
  });
}, {
  threshold: 0.3
});


document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {

  const btn = accordion.querySelector(".accordion-btn");
  const content = accordion.querySelector(".accordion-content");
  const icon = accordion.querySelector(".accordion-icon");
  const title = accordion.querySelector(".accordion-title");
  const bar = accordion.querySelector(".active-bar");

  btn.addEventListener("click", () => {

    const isHidden = content.classList.contains("hidden");

    // CLOSE ALL
    accordions.forEach((item) => {

      item.querySelector(".accordion-content")
        .classList.add("hidden");

      item.querySelector(".accordion-icon")
        .classList.remove("fa-angle-up");

      item.querySelector(".accordion-icon")
        .classList.add("fa-angle-down");

      item.querySelector(".accordion-title")
        .classList.remove("text-orange-500");

      item.querySelector(".accordion-title")
        .classList.add("text-[#6e6e6e]");

      item.querySelector(".active-bar")
        .classList.add("hidden");

    });

    // OPEN CURRENT
    if (isHidden) {

      content.classList.remove("hidden");

      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");

      title.classList.remove("text-[#6e6e6e]");
      title.classList.add("text-orange-500");

      bar.classList.remove("hidden");

    }

  });

});
const track = document.getElementById("scrollTrack");

let position = 0;
let isPaused = false;

track.addEventListener("mouseenter", () => {
  isPaused = true;
});

track.addEventListener("mouseleave", () => {
  isPaused = false;
});

function autoScroll() {

  if (!isPaused) {
    position -= 1;
  }

  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;

  requestAnimationFrame(autoScroll);
}

autoScroll();
  // PAUSE ON HOVER
  track.addEventListener("mouseenter", () => {
    speed = 0;
  });
  
  track.addEventListener("mouseleave", () => {
    speed = 1;
  });
  const data = {

    entreprise: [

      {
        id: 1,
        menu: "Réseau de stations",
        title: "Réseau de stations",
        subtitle: "Un réseau conçu pour la performance et la croissance",
        description:
          "À travers son réseau de stations, OLA Energy offre des carburants fiables, des services intégrés et une expérience de proximité pensée pour répondre aux besoins des clients au quotidien.",
        image:
          "",
        stats: [
          { number: "1350", label: "Stations-service" },
          { number: "175", label: "Boutiques de proximité" },
          { number: "161", label: "Cafés & restaurants" },
        ],
      },

      {
        id: 2,
        menu: "Lubrifiants",
        title: "Lubrifiants",
        subtitle: "Des solutions pour tous les moteurs",
        description:
          "Notre gamme de lubrifiants protège les moteurs, améliore les performances et garantit une durabilité optimale dans les conditions africaines.",
        image:
          "",
        stats: [
          { number: "250", label: "Produits disponibles" },
          { number: "42", label: "Pays couverts" },
          { number: "98%", label: "Satisfaction clients" },
        ],
      },

      {
        id: 3,
        menu: "O'Card",
        title: "O'Card",
        subtitle: "Une carte intelligente pour vos achats",
        description:
          "Simplifiez vos paiements carburant et profitez d’un meilleur suivi de vos dépenses grâce à la solution O'Card.",
        image:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
        stats: [
          { number: "50K+", label: "Utilisateurs" },
          { number: "24/7", label: "Support" },
          { number: "100%", label: "Transactions sécurisées" },
        ],
      },

      {
        id: 4,
        menu: "Aviation",
        title: "Aviation",
        subtitle: "L’énergie au service des vols",
        description:
          "OLA Energy fournit des carburants aviation fiables répondant aux normes internationales les plus strictes.",
        image:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
        stats: [
          { number: "80", label: "Aéroports" },
          { number: "24", label: "Partenaires" },
          { number: "99%", label: "Disponibilité" },
        ],
      },

      {
        id: 5,
        menu: "Marine",
        title: "Marine",
        subtitle: "Des solutions énergétiques maritimes",
        description:
          "Nous accompagnons les acteurs maritimes avec des produits adaptés aux besoins des ports et navires.",
        image:
          "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
        stats: [
          { number: "35", label: "Ports" },
          { number: "12", label: "Pays côtiers" },
          { number: "400+", label: "Clients maritimes" },
        ],
      },

      {
        id: 6,
        menu: "Boutiques marhaba",
        title: "Boutiques marhaba",
        subtitle: "Une expérience de proximité moderne",
        description:
          "Les boutiques marhaba proposent restauration rapide, produits essentiels et services pratiques.",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
        stats: [
          { number: "175", label: "Boutiques" },
          { number: "24h", label: "Disponibilité" },
          { number: "500+", label: "Produits" },
        ],
      },

      {
        id: 7,
        menu: "Industrie & Vente en gros",
        title: "Industrie & Vente en gros",
        subtitle: "Des solutions adaptées aux entreprises",
        description:
          "Nous accompagnons les industriels avec des solutions énergétiques fiables et compétitives.",
        image:
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1600&auto=format&fit=crop",
        stats: [
          { number: "1000+", label: "Entreprises" },
          { number: "40", label: "Dépôts" },
          { number: "24/7", label: "Livraison" },
        ],
      },

      {
        id: 8,
        menu: "Approvisionement et negoce",
        title: "Énergies nouvelles",
        subtitle: "Vers une transition énergétique durable",
        description:
          "OLA Energy investit dans les solutions énergétiques innovantes pour l’Afrique de demain.",
        image:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
        stats: [
          { number: "12", label: "Projets verts" },
          { number: "18", label: "Pays" },
          { number: "2030", label: "Vision durable" },
        ],
      },

    ],

    particuliers: [

      {
        id: 1,
        menu: "Station Service",
        title: "Station Service",
        subtitle: "Une qualité fiable au quotidien",
        description:
          "Des carburants performants conçus pour protéger votre moteur et optimiser votre conduite.",
        image:
          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop",
        stats: [
          { number: "98%", label: "Qualité certifiée" },
          { number: "24/7", label: "Stations ouvertes" },
          { number: "42", label: "Pays" },
        ],
      },

      {
        id: 2,
        menu: "Ola AutoCare",
        title: "Ola AutoCare",
        subtitle: "Des services pensés pour vous",
        description:
          "Profitez de services modernes et rapides dans toutes nos stations.",
        image:
          "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1600&auto=format&fit=crop",
        stats: [
          { number: "300+", label: "Services" },
          { number: "24h", label: "Disponibilité" },
          { number: "99%", label: "Satisfaction" },
        ],
      },

      {
        id: 3,
        menu: "Lubrifiants",
        title: "Lubrifiants",
        subtitle: "Des offres toute l’année",
        description:
          "Découvrez des réductions et avantages exclusifs dans nos stations.",
        image:
          "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1600&auto=format&fit=crop",
        stats: [
          { number: "120", label: "Offres" },
          { number: "50K", label: "Clients fidèles" },
          { number: "7j/7", label: "Disponibilité" },
        ],
      },

      {
        id: 4,
        menu: "Marhaba",
        title: "Marhaba",
        subtitle: "Des solutions modernes et rapides",
        description:
          "Payez facilement grâce à plusieurs méthodes de paiement adaptées.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
        stats: [
          { number: "10+", label: "Méthodes" },
          { number: "100%", label: "Sécurisé" },
          { number: "Instant", label: "Validation" },
        ],
      },

      {
        id: 5,
        menu: "GPL",
        title: "GPL",
        subtitle: "Une expérience moderne",
        description:
          "Découvrez nos boutiques modernes avec une large gamme de produits.",
        image:
          "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1600&auto=format&fit=crop",
        stats: [
          { number: "500+", label: "Produits" },
          { number: "175", label: "Boutiques" },
          { number: "24h", label: "Disponibilité" },
        ],
      },

     

    ],

  };

  const menuContainer = document.getElementById("menuContainer");
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const description = document.getElementById("description");
  const stats = document.getElementById("stats");
  const contentCard = document.getElementById("contentCard");

  const entrepriseBtn = document.getElementById("entrepriseBtn");
  const particulierBtn = document.getElementById("particulierBtn");

  let currentTab = "entreprise";

  function renderMenu(tab) {

    menuContainer.innerHTML = "";

    data[tab].forEach((item, index) => {

      menuContainer.innerHTML += `
      
        <div
          class="menu-item flex items-start gap-5 cursor-pointer text-gray-400 transition hover:text-[#0d4fb3]"
          onclick="changeContent('${tab}', ${index})"
          id="menu-${tab}-${index}"
        >

          <div class="line w-[3px] h-12 bg-orange-500 rounded-full mt-1"></div>

          <div class="flex items-center gap-6">

            <span class="text-xl font-bold opacity-60">
              ${item.id}
            </span>

            <span class="text-xl font-bold leading-tight max-w-[220px]">
              ${item.menu}
            </span>

          </div>

        </div>
      
      `;
    });

    activateMenu(tab, 0);
    updateContent(tab, 0);

  }

  function activateMenu(tab, index){

    const allItems = document.querySelectorAll(".menu-item");

    allItems.forEach(item => {
      item.classList.remove("active");
    });

    document
      .getElementById(`menu-${tab}-${index}`)
      .classList.add("active");

  }

  function updateContent(tab, index){

    const item = data[tab][index];

    title.textContent = item.title;
    subtitle.textContent = item.subtitle;
    description.textContent = item.description;

    contentCard.style.backgroundImage = `
      linear-gradient(rgba(0,22,120,.75), rgba(0,22,120,.82)),
      url('${item.image}')
    `;

    stats.innerHTML = "";

    item.stats.forEach(stat => {

      stats.innerHTML += `
      
        <div class="border-l-2 border-orange-400 pl-6">

          <h2 class="text-5xl font-extrabold mb-2">
            ${stat.number}
          </h2>

          <p class="text-lg text-white/90">
            ${stat.label}
          </p>

        </div>
      
      `;
    });

    contentCard.classList.remove("fade");

    setTimeout(() => {
      contentCard.classList.add("fade");
    }, 10);

  }

  function changeContent(tab, index){

    activateMenu(tab, index);
    updateContent(tab, index);

  }

  entrepriseBtn.addEventListener("click", () => {

    currentTab = "entreprise";

    entrepriseBtn.classList.add(
      "border",
      "border-orange-400",
      "text-orange-500",
      "bg-white",
      "rounded-lg",
      "px-6",
      "py-3"
    );

    particulierBtn.classList.remove(
      "border",
      "border-orange-400",
      "text-orange-500",
      "bg-white",
      "rounded-lg",
      "px-6",
      "py-3"
    );

    particulierBtn.classList.add("text-gray-500");

    renderMenu("entreprise");

  });

  particulierBtn.addEventListener("click", () => {

    currentTab = "particuliers";

    particulierBtn.classList.add(
      "border",
      "border-orange-400",
      "text-orange-500",
      "bg-white",
      "rounded-lg",
      "px-6",
      "py-3"
    );

    entrepriseBtn.classList.remove(
      "border",
      "border-orange-400",
      "text-orange-500",
      "bg-white",
      "rounded-lg",
      "px-6",
      "py-3"
    );

    entrepriseBtn.classList.add("text-gray-500");

    renderMenu("particuliers");

  });

  renderMenu("entreprise");