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
                title: "Film #1", desc: "We are an experimental creative studio driven by research, technology and the pursuit of new aesthetics and techniques.",
                section: "film_1", category: "film", src: $sce.trustAsResourceUrl("https://player.vimeo.com/video/149478317?color=f3d0b5&title=0&byline=0&portrait=0&badge=0"),
                preview: "img/main_sample1.png"
            },
            {
                title: "Film #2", desc: "We are an experimental creative studio driven by research, technology and the pursuit of new aesthetics and techniques.",
                section: "film_2", category: "film", src: $sce.trustAsResourceUrl("https://player.vimeo.com/video/155246808?color=ffffff&title=0&byline=0&portrait=0"),
                preview: "img/main_sample2.png"
            },
            {
                title: "Commercial #1", desc: "We are an experimental creative studio driven by research, technology and the pursuit of new aesthetics and techniques.",
                section: "commercial_1", category: "commercial", src: $sce.trustAsResourceUrl("https://player.vimeo.com/video/155572038?color=f3d0b5&title=0&byline=0&portrait=0"),
                preview: "img/main_sample3.png"
            },
            {
                title: "Commercial #2", desc: "We are an experimental creative studio driven by research, technology and the pursuit of new aesthetics and techniques.",
                section: "commercial_2", category: "commercial", src: $sce.trustAsResourceUrl("https://player.vimeo.com/video/153737805?color=f3d0b5&title=0&byline=0&portrait=0"),
                preview: "img/main_sample1.png"
            },
            {
                title: "Commercial #3", desc: "We are an experimental creative studio driven by research, technology and the pursuit of new aesthetics and techniques.",
                section: "commercial_3", category: "commercial", src: $sce.trustAsResourceUrl("https://player.vimeo.com/video/154058746?color=ff0179&title=0&byline=0&portrait=0&badge=0"),
                preview: "img/main_sample2.png"
            },
            {
                title: "Still #1", desc: "We are an experimental creative studio driven by research, technology and the pursuit of new aesthetics and techniques.",
                section: "still_1", category: "still", src: "img/sample_src.jpg",
                preview: "img/main_sample3.png"
            },
            {
                title: "Still #2", desc: "We are an experimental creative studio driven by research, technology and the pursuit of new aesthetics and techniques.", 
                section: "still_2", category: "still", src: "img/main_sample1.png",
                preview: "img/main_sample1.png"
            }]
    };
}]);
