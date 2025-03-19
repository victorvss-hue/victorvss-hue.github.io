document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");

    menuButton.addEventListener("click", function (event) {
        event.stopPropagation(); 
        
        menu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
    
    document.querySelectorAll(".menu-options a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });
});
