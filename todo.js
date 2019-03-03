angular.module('myApp', [])
.controller('myController', function($scope) {
    $scope.itemToEdit;
    $scope.editMode = false;
    $scope.itemToChange = null;
    $scope.list = [
       { todo: "Make this", checked: true },
       { todo: "Make that", checked: false }
    ];
    $scope.addItem = function() {
       if ($scope.editMode === false) {
           $scope.list.push({todo: $scope.inputText, checked: false});
       } else {
           $scope.list[$scope.itemToEdit] = {todo: $scope.inputText, checked: $scope.list[$scope.itemToEdit].checked};
           $scope.editMode = false;
       }
        $scope.inputText = '';
    }
    $scope.changeItem = function(item) {
        $scope.editMode = true;
        $scope.itemToEdit = $scope.list.indexOf(item);
        $scope.inputText = item.todo;
    }
    $scope.clearAll = function() {
       $scope.list = [];
    }
    $scope.clearDone = function() {
        for (let i = $scope.list.length - 1; i >= 0; i--) {
            console.log(i, 'i');
            if ($scope.list[i].checked) {
                $scope.list.splice(i, 1);
            }
        }
    }
    $scope.removeItem = function (index) {
        this.list.splice(index, 1);
    };
});