angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {

        $scope.data = {};
        var user_data = new Array();
           $scope.data  = {
               email:'',
               password:'',
              };
	$scope.user_login = function(){
		console.log($scope.data);	
	    

	    if ($scope.data.checked) {
	       $scope.result = "checked";
	       localStorage.setItem('admin_data', JSON.stringify($scope.data));
	       $state.go('addbook');
	     } else {
	       $scope.result = "notchecked";
	       localStorage.setItem('user_data', JSON.stringify($scope.data));
	       $state.go('booklist');
	     }
	     console.log($scope.result );
	     
	}

	$scope.gotoadmin = function(){
		console.log("admin")
		$state.go('adminlogin')
	}


	     
})

.controller('BookListCtrl', function($scope, $state) {

	 $scope.book_display = JSON.parse(localStorage.getItem('book_list'));
	 console.log($scope.book_display);
    $scope.bookDetails = function(id, index){
    $scope.book_display.splice(index, 1);
    localStorage.setItem('book_list', JSON.stringify($scope.book_display));
    }
	
})


.controller('BookDetailsCtrl', function($scope, $state) {

	 $scope.book_display = JSON.parse(localStorage.getItem('book_list'));
	 console.log($scope.book_display);
	
})


.controller('AddBookCtrl', function($scope, $state,$ionicPopup) {
	    $scope.IsVisible = false;
        $scope.openForm = function(){
            $scope.IsVisible = $scope.IsVisible = true;
        }

       
        // var book_info = new Array();
           $scope.data  = {
               bookName:'',
               isbnNumber:'',
               authorName:'',
               releaseDate:'',
               addedDate:'',
               category:'',
              };
          $scope.addBooksForm = function(){
         
          var existingEntries = JSON.parse(localStorage.getItem("book_list"));
          if(existingEntries == null) existingEntries = [];
          existingEntries.push($scope.data);
          localStorage.setItem("book_list", JSON.stringify(existingEntries));

             var alertPopup = $ionicPopup.alert({
		     title: 'Your Book Added Succesfully',
		     template: 'Welcome Again'
		     });
		     alertPopup.then(function(res) {
		     console.log('Thanks');
		     });		       
            $scope.IsVisible = true;
          };

          $scope.openBookList = function(){
          $state.go('booklist')
          }

})


.controller('AdminLoginCtrl', function($scope, $state) {
	$scope.data  = {
               email:'',
               password:'',
              };
	$scope.admin_login = function(){
	console.log($scope.data);
    localStorage.setItem('admin_data', JSON.stringify($scope.data));
	$state.go('addbook');
	}
            

});