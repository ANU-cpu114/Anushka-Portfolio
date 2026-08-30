
// Close the mobile navbar after clicking a menu item

document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {

    link.addEventListener("click", function () {

        const navbar = document.querySelector(".navbar-collapse");

        if (navbar.classList.contains("show")) {

            const bsCollapse =
                new bootstrap.Collapse(navbar, {
                    toggle: false
                });

            bsCollapse.hide();
        }

    });

});
