const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav
const links = document.getElementsByTagName("a");

Array.from(links).forEach((link, nav) => {
  const navItems = Object.values(siteContent["nav"]);
  link.textContent = navItems[nav];
})

const newNavA = document.createElement("a");
newNavA.textContent = "Home";
newNavA.src = "index.html";

const newNavB = document.createElement("a");
newNavB.textContent = "Help";
newNavB.src = "#";

const navParent = document.querySelector("nav");

navParent.prepend(newNavA);
navParent.appendChild(newNavB);

Array.from(links).forEach(link => {
  link.style.color = "green";
})

// CTA
const cta = document.querySelector(".cta-text h1");
cta.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector(".cta-text button")
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

// Main Content
  // Features
const featuresHeader = document.querySelector(".top-content .text-content:first-child h4");
featuresHeader.textContent = siteContent["main-content"]["features-h4"];

const featuresText = document.querySelector(".top-content .text-content:first-child p");
featuresText.textContent = siteContent["main-content"]["features-content"];

  // About
const aboutHeader = document.querySelector(".top-content .text-content:last-child h4");
aboutHeader.textContent = siteContent["main-content"]["about-h4"];

const aboutText = document.querySelector(".top-content .text-content:last-child p");
aboutText.textContent = siteContent["main-content"]["about-content"];

  // Middle Image
const midImg = document.getElementById("middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

  // Services
const servicesHeader = document.querySelector(".bottom-content .text-content:first-child h4");
servicesHeader.textContent = siteContent["main-content"]["services-h4"];

const servicesText = document.querySelector(".bottom-content .text-content:first-child p");
servicesText.textContent = siteContent["main-content"]["services-content"];

  // Product
const productHeader = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
productHeader.textContent = siteContent["main-content"]["product-h4"];

const productText = document.querySelector(".bottom-content .text-content:nth-child(2) p");
productText.textContent = siteContent["main-content"]["product-content"];

  // Vision
const visionHeader = document.querySelector(".bottom-content .text-content:last-child h4");
visionHeader.textContent = siteContent["main-content"]["vision-h4"];

const visionText = document.querySelector(".bottom-content .text-content:last-child p");
visionText.textContent = siteContent["main-content"]["vision-content"];

// Contact 
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const address = document.querySelector(".contact p:nth-child(2)");
address.textContent = siteContent["contact"]["address"];

const phone = document.querySelector(".contact p:nth-child(3)");
phone.textContent = siteContent["contact"]["phone"];

const email = document.querySelector(".contact p:last-child");
email.textContent = siteContent["contact"]["email"];

// Footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];
