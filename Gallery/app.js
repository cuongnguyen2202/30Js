const panels = document.querySelectorAll(".panel");

function toggle() {
    this.classList.toggle("open");
}

function activeProp(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}

function notFocus(e) {
    if (!this.contains(e.target) && !e.target.matches(".panel")) {
        this.classList.remove("open");
    }
}
panels.forEach((panel) => {
    panel.addEventListener("click", toggle);
});
panels.forEach((panel) => {
    panel.addEventListener("transitionend", activeProp);
});
panels.forEach((panel) => {
    panel.addEventListener("click", notFocus);
});