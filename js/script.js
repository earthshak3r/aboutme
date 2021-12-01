"use strict";

// Reveal sections
const allSections = document.querySelectorAll(".reveal");

const revealSection = function(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
});

// Lazy loading images
const imgTargets = document.querySelectorAll(".lazy-img");

const loadImg = function(entries, observer) {
    const [entry] = entries;

    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("lazy-img");
    observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: "-220px",
});

imgTargets.forEach((img) => imgObserver.observe(img));