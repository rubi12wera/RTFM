'use strict';

var app = angular.module('rtfmApp');
app.controller("threadCtrl", function ($scope, threadRef, commentsRef, $firebaseObject, $firebaseArray){
	
	var thread = $firebaseObject(threadRef);

    thread.$bindTo($scope, 'data')

    $scope.comments = $firebaseArray(commentsRef);

    $scope.createComment = function (username, text) {
      $scope.comments.$add({
        username: username,
        text: text
      });

    };
});