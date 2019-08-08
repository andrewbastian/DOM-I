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


//## Task 1: Create selectors to point your data into elements
// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images.  Use the IDs to update src path content
//
let ctaImg = document.querySelector("#cta-img");
ctaImg.src = 'img/header-img.png';

// ## Task 2: Update the HTML with the JSON data
// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images
//
let appendChild = document.createElement('a')
let prependChild = document.createElement('a')

var aS = document.querySelector('nav');
aS.appendChild(appendChild);
aS.prepend(prependChild);
let navItems = document.querySelectorAll('a');
navItems.forEach((aTags, i) => {
aTags.textContent = siteContent.nav['nav-item-'+ i]
});

document.querySelector('h1').textContent = siteContent["cta"]["h1"];
document.querySelector('button').textContent = siteContent["cta"]["button"];

let h4s= document.querySelectorAll('h4')
h4s[0].textContent = siteContent['main-content']["features-h4"];
h4s[1].textContent = siteContent['main-content']["about-h4"];
h4s[2].textContent = siteContent['main-content']["services-h4"];
h4s[3].textContent = siteContent['main-content']["product-h4"];
h4s[4].textContent = siteContent['main-content']["vision-h4"];
h4s[5].textContent = siteContent['contact']["contact-h4"];

//
document.getElementById('middle-img').src = "img/mid-page-accent.jpg"
//
let pS = document.querySelectorAll('p')
pS[0].textContent = siteContent['main-content']["features-content"];
pS[1].textContent = siteContent['main-content']["about-content"];
pS[2].textContent = siteContent['main-content']["services-content"];
pS[3].textContent = siteContent['main-content']["product-content"];
pS[4].textContent = siteContent['main-content']["vision-content"];
pS[5].textContent = siteContent['contact']["address"];
pS[6].textContent = siteContent['contact']["phone"];
pS[7].textContent = siteContent['contact']["email"];
pS[8].textContent = siteContent['footer']["copyright"];




//
