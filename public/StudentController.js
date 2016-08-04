app.controller('studentCtrl' , function($scope, Student, $http){
	$scope.student = new Student();

	var refresh = function() {
  $scope.students = Student.query();
  $scope.student ="";
}
refresh();

$scope.add = function(student) {
  Student.save(student,function(){
    refresh();
  });
};

    $scope.update = function(student){
        student.$update(function () {
            refresh();
        });
    };

    $scope.edit = function(id) {
        $scope.student = Student.get({ id: id });
        alert(JSON.stringify($scope.student));
    };

    $scope.remove = function(obj){
        obj.$delete(function(){
            refresh();
        });
    };

    $scope.deselect = function() {
        $scope.student = "";
    }


});