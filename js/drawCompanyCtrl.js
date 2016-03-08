angular.module("drawCompany")
.controller("drawCompanyCtrl", ['$scope', '$sce', function ($scope, $sce, $filter) {
    
    $scope.isMenuOpened = false;
    $scope.selectedStill = "img/main_sample1.png";

    $scope.openMenu = function(){
        $scope.isMenuOpened = true;
    };

    $scope.closeMenu = function(){
        $("#menu-toggle").click();
        $scope.isMenuOpened = false;
    };

    $scope.filmFilterFn = function(product){
        return product.category == "film";
    };

    $scope.commercialFilterFn = function(product){
        return product.category == "commercial";
    };

    $scope.stillFilterFn = function(product){
        return product.category == "still";
    };

    $scope.showStillModal = function(src) {
        $scope.selectedStill = src;
        $('#stillModal').modal();
    };

    $scope.data = {
        products: [
            {
                title: "SHOWBOX 그날의 분위기", desc: "MOOD OF THE DAY, 2016<br />Client : Showbox<br />Spot : Viral<br />Title : Mood of the Day Teaser<br />Agency : SALTY",
                section: "showbox_그날의_분위기", category: "film", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/QA3zJmZRaVo?rel=0&amp;showinfo=0"),
                preview: "img/film/01_그날의 분위기.jpg"
            },
            {
                title: "GUINNESS Made of More – WED", desc: "GUINNESS, 2015<br />Client : Diagio Korea<br />Spot : TV<br />Title : Made of More (Wed)<br />Agency : SALTY",
                section: "guiness_made_of_more_wed", category: "film", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/mN0IK4oRMyI?rel=0&amp;showinfo=0"),
                preview: "img/film/02_Guinness_WED.jpg"
            },
            {
                title: "GUINNESS Made of More – SUN", desc: "GUINNESS, 2015<br />Client : Diagio Korea<br />Spot : TV<br />Title : Made of More (Sun)<br />Agency : SALTY",
                section: "guiness_made_of_more_sun", category: "film", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/uUFmeq8Nqmk?rel=0&amp;showinfo=0"),
                preview: "img/film/03_Guinness_SUN.jpg"
            },
            {
                title: "GUINNESS Made of More – FRI", desc: "GUINNESS, 2015<br />Client : Diagio Korea<br />Spot : TV<br />Title : Made of More (Fri)<br />Agency : SALTY",
                section: "guiness_made_of_more_fri", category: "film", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/51mdk6jvkow?rel=0&amp;showinfo=0"),
                preview: "img/film/04_Guinness_FRI.jpg"
            },
            {
                title: "MENTOS WHITE-DAY CAMPAIGN", desc: "MENTOS, 2015<br />Client : Mentos<br />Spot : Viral<br />Title : Mentos White-Day Campaign<br />Agency : SALTY",
                section: "mentos_white_day_campaign_1", category: "film", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/BB4IMt7DI-w?rel=0&amp;showinfo=0"),
                preview: "img/film/05_Mentos_5sec_연인편.jpg"
            },
            {
                title: "MENTOS WHITE-DAY CAMPAIGN", desc: "MENTOS, 2015<br />Client : Mentos<br />Spot : Viral<br />Title : Mentos White-Day Campaign<br />Agency : SALTY",
                section: "mentos_white_day_campaign_2", category: "film", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/E6jsXfTbsXI?rel=0&amp;showinfo=0"),
                preview: "img/film/06_Mentos_5sec_썸남편.jpg"
            },
            {
                title: "MENTOS WHITE-DAY CAMPAIGN", desc: "MENTOS, 2015<br />Client : Mentos<br />Spot : Viral<br />Title : Mentos White-Day Campaign<br />Agency : SALTY",
                section: "mentos_white_day_campaign_3", category: "film", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/GzXkf6NpMTs?rel=0&amp;showinfo=0"),
                preview: "img/film/07_Mentos_5sec_선배편.jpg"
            },
            {
                title: "CJ KCON Global Teaser, 2014", desc: "CJ KCON, 2014<br />Client : CJ One<br />Spot : Viral<br />Title : CJ KCON Global Teaser<br />Agency : CJ One",
                section: "CJ KCON Global Teaser, 2014", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/iDmhCfkqhnM?rel=0&amp;showinfo=0"),
                preview: "img/commercial/01_CJ KCON - Global Teaser, 2014.jpg"
            },
            {
                title: "Laneige Pushbutton Kiosk Display, 2014", desc: "Laneige Pushbutton, 2014<br />Client : Amore Pacific<br />Spot : Viral / Kiosk Diaplay<br />Title : Laneige Pushbutton<br />Agency : BBDO Korea",
                section: "Laneige Pushbutton Kiosk Display, 2014", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/GtGOEZKWtiY?rel=0&amp;showinfo=0"),
                preview: "img/commercial/02_Laneige Pushbutton - Kiosk Display, 2014.jpg"
            },
            {
                title: "LG Built In Global USP, 2013", desc: "LG Built In, 2013<br />Client : LG<br />Spot : Viral<br />Title : LG Built In Global USP<br />Agency : HS AD",
                section: "LG Built In Global USP, 2013", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/hpAChfePeK0?rel=0&amp;showinfo=0"),
                preview: "img/commercial/03_LG Built In - Global USP.jpg"
            },
            {
                title: "LG Oven Total Global USP, 2013", desc: "LG Oven Total, 2013<br />Client : LG<br />Spot : Viral<br />Title : LG Oven Total USP<br />Agency : HS AD",
                section: "LG Oven Total Global USP, 2013", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/cVQoFDmyKSg?rel=0&amp;showinfo=0"),
                preview: "img/commercial/04_LG Oven Total - Global USP.jpg"
            },
            {
                title: "Samsung Chromebook CES Edit, 2015", desc: "Samsung Chromebook, 2015<br />Client : Samsung<br />Spot : CES / Viral<br />Title : Samsung Chromebook CES Edit<br />Agency : Samsung",
                section: "Samsung Chromebook CES Edit, 2015", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/IO24iEXp1Sk?rel=0&amp;showinfo=0"),
                preview: "img/commercial/05_Samsung Chromebook - CES Edit, 2015.jpg"
            },
            {
                title: "Samsung Series 9 CES Edit, 2013", desc: "Samsung Series 9, 2013<br />Client : Samsung<br />Spot : CES / Viral<br />Title : Samsung Series 9 CES Edit<br />Agency : Samsung",
                section: "Samsung Series 9 CES Edit, 2013", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/CstTY04tRtE?rel=0&amp;showinfo=0"),
                preview: "img/commercial/06_Samsung Series 9 - CES Edit.jpg"
            },
            {
                title: "부산국제영화제 Official Trailer, 2013", desc: "2013 Busan International Film Festival, 2013<br />Client : Busan International Film Festival<br />Spot : Official Trailer / Viral<br />Title : Samsung Series 9 CES Edit<br />Agency : Busan International Film Festival",
                section: "부산국제영화제 Official Trailer, 2013", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/4g4PRH3q3p4?rel=0&amp;showinfo=0"),
                preview: "img/commercial/07_부산국제영화제 - Official Trailer, 2013.jpg"
            },
            {
                title: "유한킴벌리 White Holiday Brand Campaign Intro, 2014", desc: "Yuhan Kimberly White Holiday, 2014<br />Client : Yuhan Kimberly<br />Spot : Viral<br />Title : White Holiday Campaign<br />Agency : Postvisual",
                section: "유한킴벌리 White Holiday Brand Campaign Intro, 2014", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/9bvHpLzP5EE?rel=0&amp;showinfo=0"),
                preview: "img/commercial/08_유한킴벌리 White Campaign - Intro.jpg"
            },
            {
                title: "한율 율려원액 TV CM, 2014", desc: "Hanyul Yulyeowonack, 2014<br />Client : Amore Pacific<br />Spot : TV / Viral<br />Title : Hanyul Yulyeowonack<br />Agency : BBDO Korea",
                section: "한율 율려원액 TV CM, 2014", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/q93OM0raL7Y?rel=0&amp;showinfo=0"),
                preview: "img/commercial/09_한율 율려원액 - CM_2014.jpg"
            },
            {
                title: "Han Huijeong - Slow Dance Music Video, 2015", desc: "Han Hee-Jung - Slow Dance, 2015<br />Client : Pastel Music<br />Spot : Music Video<br />Title : Han Hee-Jung<br />Agency : Pastel Music",
                section: "Han Huijeong - Slow Dance Music Video, 2015", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/hRwg58EQxWg?rel=0&amp;showinfo=0"),
                preview: "img/commercial/10_한희정_Slow Dance - Music Video, 2015.jpg"
            }]
    };

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }
}]);
