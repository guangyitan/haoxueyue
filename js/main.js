(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // customer-feedbacks carousel
    $(".customer-feedback-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Reusable Image Modal Script
    $('#imageModal').on('show.bs.modal', function (event) {
        var triggerImage = $(event.relatedTarget);
        var imageSrc = triggerImage.data('image-src');
        var imageAlt = triggerImage.data('image-alt') || 'Image';
        $('#modalImage').attr('src', imageSrc).attr('alt', imageAlt);
    });
})(jQuery);

function togglePriceClicked(btn) {
    // Get current state from data attribute (default false)
    let showingReal = btn.dataset.showingReal === "true";

    // Find the container and prices
    const container = btn.closest(".fees-container");
    const prices = container.querySelectorAll(".price");

    prices.forEach(price => {
        const amount = price.dataset.amount;
        const suffix = price.dataset.suffix || "";
        const num = amount.replace(/\D/g, "");

        if (showingReal) {
            const placeholder = "X".repeat(num.length);
            price.textContent = "RM" + placeholder + suffix;
        } else {
            price.textContent = amount + suffix;
        }
    });

    // Toggle state and store it back in data attribute
    showingReal = !showingReal;
    btn.dataset.showingReal = showingReal;

    // Update label text based on language
    const icon = btn.querySelector("i");
    const label = btn.querySelector(".label");

    if (label.textContent.includes("显示") || label.textContent.includes("隐藏")) {
        label.textContent = showingReal ? "隐藏价格" : "显示价格";
    } else if (label.textContent.includes("Tunjuk") || label.textContent.includes("Sembunyi")) {
        label.textContent = showingReal ? "Sembunyi Harga" : "Tunjuk Harga";
    } else {
        label.textContent = showingReal ? "Hide Price" : "Show Price";
    }

    // Toggle eye icon
    icon.classList.toggle("bi-eye", !showingReal);
    icon.classList.toggle("bi-eye-slash", showingReal);
}