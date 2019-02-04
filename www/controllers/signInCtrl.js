app.controller('signInCtrl', function ($scope, $auth, $window, $state, $ionicPopup) {

    $scope.handleLoginBtnClick = function () {
        $auth.submitLogin($scope.loginForm)
            .then(function (resp) {

            })
            .catch(function (resp) {

            });
    };

    $scope.$on('auth:login-success', function (ev, user) {
        var options = {
            animation: 'slide',
            onTransitionEnd: function () { }
        };
        $state.go("home");
        console.log(user);
    });

    $scope.$on('auth:login-error', function (ev, reason) {
        console.log(reason);
        $scope.error = reason.errors[0];
        $ionicPopup.alert({
            title: 'Error',
            template: '' + $scope.error + '',
            buttonLabel: 'OK',
            animation: 'default'
        });
    });

    $scope.previewPage = function () {
        var options = {
            animation: 'slide',
            onTransitionEnd: function () { }
        }
        //        $state.go("app.login");
    }

    $scope.signUp = function () {
        //        $state.go("app.signUp");        
    }

});