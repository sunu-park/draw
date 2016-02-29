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
                title: "SHOWBOX 그날의 분위기", desc: "영화 '그날의 분위기' 를 위한 티징 예고편. 키아이디어인 영화 제목의 줄임말 ‘그분’을 개발하고, ‘자느냐 마느냐 그분이 문제로다’라는 키카피와 ‘그분 반전법’ 이라는 테마 아래 3개의 호기심을 자극하는 영상을 제작하였습니다.",
                section: "showbox_그날의_분위기", category: "film", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/QA3zJmZRaVo?rel=0&amp;showinfo=0"),
                preview: "img/film/01_그날의 분위기.jpg"
            },
            {
                title: "GUINNESS Made of More – WED", desc: "기네스의 새로운 과제는 그동안의 프리미엄한 이미지에서 벗어나 Togetherness와 home consumption을 통해 타겟층을 넓히는 것이었습니다. ‘깊이 알수록 깊이 좋아진다’는 컨셉은 제품 속성과 인간 관계의 공통점에서 도출되었으며, 광고는 세 가지 시간대에 일어나는 스토리를 보여줍니다.",
                section: "guiness_made_of_more_wed", category: "film", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/mN0IK4oRMyI?rel=0&amp;showinfo=0"),
                preview: "img/film/02_Guinness_WED.jpg"
            },
            {
                title: "GUINNESS Made of More – SUN", desc: "기네스의 새로운 과제는 그동안의 프리미엄한 이미지에서 벗어나 Togetherness와 home consumption을 통해 타겟층을 넓히는 것이었습니다. ‘깊이 알수록 깊이 좋아진다’는 컨셉은 제품 속성과 인간 관계의 공통점에서 도출되었으며, 광고는 세 가지 시간대에 일어나는 스토리를 보여줍니다.",
                section: "guiness_made_of_more_sun", category: "film", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/uUFmeq8Nqmk?rel=0&amp;showinfo=0"),
                preview: "img/film/03_Guinness_SUN.jpg"
            },
            {
                title: "GUINNESS Made of More – FRI", desc: "기네스의 새로운 과제는 그동안의 프리미엄한 이미지에서 벗어나 Togetherness와 home consumption을 통해 타겟층을 넓히는 것이었습니다. ‘깊이 알수록 깊이 좋아진다’는 컨셉은 제품 속성과 인간 관계의 공통점에서 도출되었으며, 광고는 세 가지 시간대에 일어나는 스토리를 보여줍니다.",
                section: "guiness_made_of_more_fri", category: "film", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/51mdk6jvkow?rel=0&amp;showinfo=0"),
                preview: "img/film/04_Guinness_FRI.jpg"
            },
            {
                title: "MENTOS WHITE-DAY CAMPAIGN", desc: "밸런타인데이에 초콜릿을 받은 남자들에게 멘토스를 생각나게 할 수 있도록 ‘CHOCOLATE ATTACK’이라는 강한 키비주얼을 활용하여 선배, 애인, 썸남의 3가지 강렬한 5초 영상을 제작하였습니다.",
                section: "mentos_white_day_campaign_1", category: "film", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/BB4IMt7DI-w?rel=0&amp;showinfo=0"),
                preview: "img/film/05_Mentos_5sec_연인편.jpg"
            },
            {
                title: "MENTOS WHITE-DAY CAMPAIGN", desc: "밸런타인데이에 초콜릿을 받은 남자들에게 멘토스를 생각나게 할 수 있도록 ‘CHOCOLATE ATTACK’이라는 강한 키비주얼을 활용하여 선배, 애인, 썸남의 3가지 강렬한 5초 영상을 제작하였습니다.",
                section: "mentos_white_day_campaign_2", category: "film", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/E6jsXfTbsXI?rel=0&amp;showinfo=0"),
                preview: "img/film/06_Mentos_5sec_썸남편.jpg"
            },
            {
                title: "MENTOS WHITE-DAY CAMPAIGN", desc: "밸런타인데이에 초콜릿을 받은 남자들에게 멘토스를 생각나게 할 수 있도록 ‘CHOCOLATE ATTACK’이라는 강한 키비주얼을 활용하여 선배, 애인, 썸남의 3가지 강렬한 5초 영상을 제작하였습니다.",
                section: "mentos_white_day_campaign_3", category: "film", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/GzXkf6NpMTs?rel=0&amp;showinfo=0"),
                preview: "img/film/07_Mentos_5sec_선배편.jpg"
            },
            {
                title: "CJ KCON Global Teaser, 2014", desc: "",
                section: "CJ KCON Global Teaser, 2014", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/iDmhCfkqhnM?rel=0&amp;showinfo=0"),
                preview: "img/commercial/01_CJ KCON - Global Teaser, 2014.jpg"
            },
            {
                title: "Laneige Pushbutton Kiosk Display, 2014", desc: "",
                section: "Laneige Pushbutton Kiosk Display, 2014", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/GtGOEZKWtiY?rel=0&amp;showinfo=0"),
                preview: "img/commercial/02_Laneige Pushbutton - Kiosk Display, 2014.jpg"
            },
            {
                title: "LG Built In Global USP, 2013", desc: "",
                section: "LG Built In Global USP, 2013", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/hpAChfePeK0?rel=0&amp;showinfo=0"),
                preview: "img/commercial/03_LG Built In - Global USP.jpg"
            },
            {
                title: "LG Oven Total Global USP, 2013", desc: "",
                section: "LG Oven Total Global USP, 2013", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/cVQoFDmyKSg?rel=0&amp;showinfo=0"),
                preview: "img/commercial/04_LG Oven Total - Global USP.jpg"
            },
            {
                title: "Samsung Chromebook CES Edit, 2015", desc: "",
                section: "Samsung Chromebook CES Edit, 2015", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/IO24iEXp1Sk?rel=0&amp;showinfo=0"),
                preview: "img/commercial/05_Samsung Chromebook - CES Edit, 2015.jpg"
            },
            {
                title: "Samsung Series 9 CES Edit, 2013", desc: "",
                section: "Samsung Series 9 CES Edit, 2013", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/CstTY04tRtE?rel=0&amp;showinfo=0"),
                preview: "img/commercial/06_Samsung Series 9 - CES Edit.jpg"
            },
            {
                title: "부산국제영화제 Official Trailer, 2013", desc: "",
                section: "부산국제영화제 Official Trailer, 2013", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/4g4PRH3q3p4?rel=0&amp;showinfo=0"),
                preview: "img/commercial/07_부산국제영화제 - Official Trailer, 2013.jpg"
            },
            {
                title: "유한킴벌리 White Holiday Brand Campaign Intro, 2014", desc: "",
                section: "유한킴벌리 White Holiday Brand Campaign Intro, 2014", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/9bvHpLzP5EE?rel=0&amp;showinfo=0"),
                preview: "img/commercial/08_유한킴벌리 White Campaign - Intro.jpg"
            },
            {
                title: "한율 율려원액 TV CM, 2014", desc: "",
                section: "한율 율려원액 TV CM, 2014", category: "commercial", src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/q93OM0raL7Y?rel=0&amp;showinfo=0"),
                preview: "img/commercial/09_한율 율려원액 - CM_2014.jpg"
            },
            {
                title: "Han Huijeong - Slow Dance Music Video, 2015", desc: "",
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
