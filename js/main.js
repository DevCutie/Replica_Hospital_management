import { renderHome } from "./pages/home.js";
import { renderLogin } from "./pages/login.js";



window.addEventListener("hashchange", router);
window.addEventListener("load", router);

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                if (entry.target.classList.contains('hidden')) {
                    entry.target.classList.add('show');
                }
               
                if (entry.target.classList.contains('slide-left') || 
                    entry.target.classList.contains('slide-right')) {
                    entry.target.classList.add('slide-in');
                }
            }
        });
    }, { threshold: 0.1 }); 

  
    const elements = document.querySelectorAll('.hidden, .slide-left, .slide-right');
    elements.forEach((el) => observer.observe(el));
}

function router() {
  const path = window.location.hash || "#home";
  const app = document.getElementById("app");
  
  if (path === "#login") {
    renderLogin(app);
  } else {
    renderHome(app);
  }
  

  setTimeout(initAnimations, 100); 
}