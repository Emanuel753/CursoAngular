(function () {
'use strict';
angular.module("adivinarNumero",[]) //Aplicacion basado en SPA
.controller('GuessTheNumberController', GuessTheNumberController);

function GuessTheNumberController($scope){
	$scope.verifyGuess = function(){
		$scope.deviation = $scope.original - $scope.guess;
		$scope.no0ftries = $scope.no0fTries +1;
	}

	$scope.initializeGame=function(){
		$scope.no0ftries = 0;
		$scope.original = Math.floor((Math.random() * 1000)+1);
		$scope.guess = null;
		$scope.deviation = null;
	}
	$scope.initializeGame();
}


})();