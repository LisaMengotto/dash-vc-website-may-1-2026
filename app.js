const companies = {
  glean: {
    name: "Glean",
    subtitle: "AI for work",
    description: "Work AI that works like magic."
  },
  etched: {
    name: "Etched",
    subtitle: "Semiconductors",
    description: "Building the hardware for superintelligence."
  },
  hightouch: {
    name: "Hightouch",
    subtitle: "AI for marketing",
    description: "Make your marketers limitless."
  },
  blackstar: {
    name: "Blackstar",
    subtitle: "New hardware",
    description:
      "The computer, made personal. We're building a new computer that knows you."
  },
  contrario: {
    name: "Contrario",
    subtitle: "AI for recruiting",
    description:
      "Fill critical roles faster with AI-empowered recruiters."
  }
};

const navToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const spotlight = document.querySelector("[data-spotlight]");
const pills = document.querySelectorAll(".portfolio-pill");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const renderSpotlight = (companyKey) => {
  const company = companies[companyKey];
  if (!company || !spotlight) return;

  spotlight.innerHTML = `
    <h2>${company.name}</h2>
    <h3>${company.subtitle}</h3>
    <p>${company.description}</p>
  `;
};

pills.forEach((pill) => {
  pill.addEventListener("click", () => {
    pills.forEach((item) => item.classList.remove("is-active"));
    pill.classList.add("is-active");
    renderSpotlight(pill.dataset.company);
  });
});
