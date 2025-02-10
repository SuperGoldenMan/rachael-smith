$(document).ready(function () {
    let currentImageIndex = 0;
    let images = [];
    let activeSection = "";

    // Open lightbox
    $(".layout-container img").on("click", function () {
        // Identify which section the clicked image belongs to
        activeSection = $(this).closest(".content").attr("id");

        // Select only images from the same section
        images = $("#" + activeSection + " .layout-container img");

        currentImageIndex = images.index(this);
        showImage(currentImageIndex);
        $("#lightbox").fadeIn();
        $("body").addClass("no-scroll"); // Prevent scrolling
    });

    // Close lightbox
    $(".close").on("click", function () {
        closeLightbox();
    });

    // Show previous image
    $(".prev").on("click", function () {
        showPreviousImage();
    });

    // Show next image
    $(".next").on("click", function () {
        showNextImage();
    });

    // Keyboard navigation
    $(document).on("keydown", function (e) {
        if ($("#lightbox").is(":visible")) {
            if (e.key === "ArrowLeft") {
                showPreviousImage();
            } else if (e.key === "ArrowRight") {
                showNextImage();
            } else if (e.key === "Escape") {
                closeLightbox();
            }
        }
    });

    // Function to display the image
    function showImage(index) {
        const img = images.eq(index);
        $(".lightbox-img").attr("src", img.attr("src"));
        $(".lightbox-title").text(img.attr("alt") || "Image");
    }

    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    function closeLightbox() {
        $("#lightbox").fadeOut();
        $("body").removeClass("no-scroll");
    }
  });