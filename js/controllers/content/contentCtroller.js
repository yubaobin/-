app.controller('bodyCtrl', ['$scope', '$timeout', 'contentServices', function($scope, $timeout, contentServices) {
    $scope.swiper = {};
    //page1
    $scope.separation_show = false;
    $scope.info_0_show = false;
    $scope.info_1_show = false;
    $scope.info_2_show = false;
    $scope.info_3_show = false;
    $scope.mail_show = false;
    $scope.phone_show = false;

    //page2
    $scope.detail_show = false;

    //page3
    $scope.rotate1 = false;
    $scope.rotate2 = false;
    $scope.rotate3 = false;

    $scope.slide0 = true;
    $scope.onReadySwiper = function(swiper) {

        var showList = [{
            name: 'separation_show',
            show: true,
            time: 1000
        }, {
            name: 'info_0_show',
            show: true,
            time: 1500
        }, {
            name: 'info_1_show',
            show: true,
            time: 1500
        }, {
            name: 'info_2_show',
            show: true,
            time: 1500
        }, {
            name: 'info_3_show',
            show: true,
            time: 1500
        }]
        contentServices.showPage($scope, showList);

        swiper.on('slideChangeStart', function() {
            $timeout(function() {
                switch (swiper.previousIndex) {
                    case 0:
                        $scope.slide0 = false;
                        var showList = [{
                            name: 'separation_show',
                            show: false,
                            time: 1
                        }, {
                            name: 'info_0_show',
                            show: false,
                            time: 1
                        }, {
                            name: 'info_1_show',
                            show: false,
                            time: 1
                        }, {
                            name: 'info_2_show',
                            show: false,
                            time: 1
                        }, {
                            name: 'info_3_show',
                            show: false,
                            time: 1
                        }, {
                            name: 'info_3_show',
                            show: false,
                            time: 1
                        }]
                        contentServices.showPage($scope, showList);
                        break;
                    case 1:
                        $scope.slide1 = false;
                        break;
                    case 2:
                        $scope.slide2 = false;
                        break;
                    case 3:
                        $scope.slide3 = false;
                        break;

                }
            }, 2)
        });
        swiper.on('slideChangeEnd', function() {
            $timeout(function() {
                switch (swiper.activeIndex) {
                    case 0:
                        $scope.slide0 = true;
                        var showList = [{
                            name: 'separation_show',
                            show: true,
                            time: 1000
                        }, {
                            name: 'info_0_show',
                            show: true,
                            time: 1500
                        }, {
                            name: 'info_1_show',
                            show: true,
                            time: 1500
                        }, {
                            name: 'info_2_show',
                            show: true,
                            time: 1500
                        }, {
                            name: 'info_3_show',
                            show: true,
                            time: 1500
                        }]
                        contentServices.showPage($scope, showList);
                        break;
                    case 1:
                        $scope.slide1 = true;
                        var showList = [{
                            name: 'detail_show',
                            show: true,
                            time: 1
                        }]
                        contentServices.showPage($scope, showList);
                        break;
                    case 2:
                        $scope.slide2 = true;
                        break;
                    case 3:
                        $scope.slide3 = true;
                        break;
                }
            }, 2)
        });
    };

    $scope.showInfo = function(type) {
        if (type === 'mail') {
            $scope.translation_mail = true;
            $timeout(function() {
                $scope.mail_show = true;
            }, 400)
        } else if (type === "phone") {
            $scope.translation_phone = true;
            $timeout(function() {
                $scope.phone_show = true;
            }, 400)
        }
    }

    $scope.skill_show = function(type) {
        if (type === 1) {
            $scope.rotate1 = !$scope.rotate1;
        } else if (type === 2) {
            $scope.rotate2 = !$scope.rotate2;
        } else if (type === 3) {
            $scope.rotate3 = !$scope.rotate3;
        }
    }
}]);
