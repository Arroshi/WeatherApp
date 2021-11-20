(() => {

    const hamburger = document.querySelector(".hamburger"),
        search = document.querySelector(".search"),
        secContainer = document.querySelector(".section-container"),
        barra = document.querySelector(".barra-top"),
        contToogle = document.querySelector(".content-toggle"),
        contSearch = document.querySelector(".search-toggle"),
        toggle = document.querySelector(".toggle"),
        dayItems = document.querySelector(".day-items"),
        // --
        dayHour = document.getElementById("hour"),
        dayClime = document.querySelectorAll(".day-clime"),
        dayDetails = document.querySelectorAll(".day-details"),
        dayHightlights = document.querySelectorAll(".day-hightlights");


    // const body = document.body;


    hamburger.addEventListener("click", () => {
        toggle.classList.toggle("open");

        if (!toggle.classList.contains("open")) {
            barra.style.paddingLeft = "7%";
            secContainer.style.marginLeft = "0";
            // --
            contToogle.style.opacity = "0";
            // contSearch.style.opacity = "0";
            // --
            hamburger.querySelector("i").classList.remove("fa-times");
            hamburger.querySelector("i").classList.add("fa-bars");
            // --
            // dayHour.style.marginLeft = "0";
            // --
            // cerrarAll();
            // --
            functions();
        } else {
            barra.style.paddingLeft = "15px";
            secContainer.style.marginLeft = "300px";
            // --
            contToogle.style.opacity = "1";
            // contSearch.style.opacity = "1";
            // --
            hamburger.querySelector("i").classList.remove("fa-bars");
            hamburger.querySelector("i").classList.add("fa-times");
            // --
            // dayHour.style.marginLeft = "160px";
            // --

            // --
            functions();
        }
    })

    // search.addEventListener("click", () => {

    //     if (contToogle.classList.contains("show")) {
    //         contToogle.classList.remove("show");
    //         contToogle.classList.add("hide");

    //         contSearch.classList.add("show");
    //         contSearch.classList.remove("hide");
    //     } else {
    //         contToogle.classList.remove("hide");
    //         contToogle.classList.add("show");

    //         contSearch.classList.remove("show");
    //         contSearch.classList.add("hide");
    //     }

    // })

    function functions() {
        // --
        day();
        // --
        details();
        // --
        hightlights();
        // --
        sliderDayItem();
    }

    // function cerrarAll() {

    //     contToogle.classList.remove("hide");
    //     contToogle.classList.add("show");

    //     contSearch.classList.remove("show");
    //     contSearch.classList.add("hide");

    // }


    function day() {
        dayClime.forEach((dayClime) => {
            if (!toggle.classList.contains("open")) {
                dayClime.style.padding = "0px 35px";
            } else {
                dayClime.style.padding = "0px 13px 0px 9px";
            }
        })
    }

    function details() {

        dayDetails.forEach((dayDetails) => {
            if (!toggle.classList.contains("open")) {
                dayDetails.style.padding = "9px 25px";
            } else {
                dayDetails.style.padding = "9px 15px";
            }
        })
    }

    function hightlights() {
        dayHightlights.forEach((dayHightlights) => {
            if (!toggle.classList.contains("open")) {
                dayHightlights.style.padding = "30px 200px 0";
            } else {
                dayHightlights.style.padding = "30px 100px 0";

            }
        })
    }

    function sliderDayItem() {
        if (!toggle.classList.contains("open")) {
            dayItems.style.display = "flex";
            dayItems.style.overflow = "";
            dayItems.style.whiteSpace = "";
        } else {

            dayItems.style.display = "block";
            dayItems.style.overflowX = "auto";
            dayItems.style.whiteSpace = "nowrap";
        }
    }

    // hamburger.addEventListener("click", openToogle);

    // function openToogle() {
    //     toogle.classList.toggle("open");
    // }

    // hamburger.addEventListener("click", () => {
    //     body.classList.toggle("show-toggle")
    // })


})();

// PRELOADER
window.addEventListener("load", () => {
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";

    }, 600)
});
// END PRELOADER