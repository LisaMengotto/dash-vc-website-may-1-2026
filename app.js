const companies = {
  glean: {
    name: "Glean",
    subtitle: "AI search for work",
    description:
      "Productivity infrastructure for teams that need trustworthy knowledge access across the modern enterprise."
  },
  etched: {
    name: "Etched",
    subtitle: "Custom silicon for AI",
    description:
      "A company building specialized compute infrastructure for the next generation of large-scale model inference."
  },
  hightouch: {
    name: "Hightouch",
    subtitle: "Composable CDP",
    description:
      "Data activation software that helps teams operationalize warehouse-native customer intelligence."
  },
  limitless: {
    name: "Limitless",
    subtitle: "AI memory systems",
    description:
      "Tools focused on capturing, structuring, and extending human memory with intelligent software."
  },
  ambient: {
    name: "Ambient",
    subtitle: "Clinical AI",
    description:
      "Applied AI for healthcare workflows, designed to reduce friction and expand what clinical teams can do."
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
