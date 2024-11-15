document.addEventListener("scroll", function () {
    const fadeItems = document.querySelectorAll(".fade-item");

    fadeItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (itemPosition < screenHeight - 50) {
            item.classList.add("visible");
        } else {
            item.classList.remove("visible");
        }
    });
});