function validateForm() {
    let x = document.forms["valForm"]["fname"].value;
    let y = document.forms["valForm"]["Teléfono"].value;
    let z = document.forms["valForm"]["femail"].value;

    if (x == "") {
        alert("Por favor, complete el campo Nombre");
        return false;
    }
    if (y == "") {
        alert("Por favor, complete el campo Telefono");
        return false;
    }
    if (z == "") {
        alert("Por favor, complete el campo Email");
        return false;
    }


    alert("Muchas gracias. Nos contactaremos a la brevedad.");

}

// WhatsApp Contact
$(document).ready(function () {

    //click event on a tag
    $('.wc-list').on("click", function () {

        var number = $(this).attr("number");
        var message = $(this).attr("message");

        //checking for device type
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // redirect link for mobile WhatsApp chat awc
            window.open('https://wa.me/' + number + '/?text=' + message, '-blank');
        } else {
            // redirect link for WhatsApp chat in website
            window.open('https://web.WhatsApp.com/send?phone=' + number + '&text=' + message, '-blank');
        }
    })
});

// to change fa icon of floating chat button
$(function () {
    $("#wc-times").hide();
    $("#wc-whatsapp").click(function () {
        $("#wc-whatsapp").hide();
        $("#wc-times").fadeIn();
        $(".wc-panel").removeClass("animated zoomOut");
        $(".wc-panel").addClass("animated zoomIn");
        $(".wc-panel").show();
    });

    $("#wc-times").click(function () {
        $("#wc-times").hide();
        $("#wc-whatsapp").fadeIn();
        $(".wc-panel").removeClass("animated zoomIn");
        $(".wc-panel").addClass("animated zoomOut");
        //$(".wc-panel").hide();
    });
});