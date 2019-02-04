app.controller('homeCtrl', function ($scope, companyService) {

    $scope.companies = [];
    //    Get All companies
    $scope.getAll = function () {
        $scope.companies = companyService.query();        
        console.log($scope.companies);
    };
    //    get IRB by ID
    $scope.idIRB;
    $scope.getById = function (id) {
        $scope.irbSelection = companyService.get({ id: id });
    }
    console.log($scope.getAll());
});