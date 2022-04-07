app.controller('selectController', ['$scope', '$resource',
    function('$scope, $resource'){

    // -- Define Scope Methods. ----------------- //

    // I explicitly select Joanna just to demonstrate how
    // the two-way data binding will behave. Once we
    // select Joanna explicitly, the ngModel will reflect
    // that change in the Select menu.
    $scope.finish = function() {
        //$scope.selection = $scope.friends[ 1 ];
    };

    // -- Define Scope Variables. --------------- //

    $scope.optionsAngerData = [
        { id: 1, name: "Je n'aime pas que"},
        { id: 2, name: "Je suis fâché que"},
        { id: 3, name: "Je suis frustré parce que"}
    ];

    $scope.optionsSadnessData = [
        { id: 1, name: "Je suis décu parce que"},
        { id: 2, name: "J'ai de la peine parce que"},
        { id: 3, name: "Je suis triste que"}
    ];
    
    $scope.optionsAnger = $.map(
        $scope.optionsAngerData,
        function( option ) {
            // will be mirrored in the selection variable.
            return({
                value: option,
                text: option.name
            });
        }
    );

    $scope.optionsSadness = $.map(
        $scope.optionsSadnessData,
        function( option ) {
            // will be mirrored in the selection variable.
            return({
                value: option,
                text: option.name
            });
        }
    );

    // Since the select list is NOT just a list of
    // friends, we have to differentiate between our
    // list of friends and our selection.
    $scope.selectionAnger = null;
    $scope.selectedSadness = null;

    // -- Define Scope Events. ------------------ //

    // As the select menu changes, it will change our
    // selection. When that happens, we have to map that
    // change onto our Friends collection.
    $scope.$watch(
        "selectionAnger",
        function( value ) {
            $scope.selectedAnger = $scope.selectionAnger;
        }
    );
    $scope.$watch(
        "selectionSadness",
        function( value ) {
            $scope.selectedSadness = $scope.selectionSadness;
        }
    );

}])
