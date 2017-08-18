angular.module('fileMetadataApp', ['ngFileUpload'])
    .controller('MyCtrl',['$scope', 'Upload', '$window', function($scope, Upload, $window){
        var vm = this;
        vm.submit = function(){ //function to call on form submit
            if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
                vm.upload(vm.file); //call upload function
            }
        }
        vm.upload = function (file) {
            Upload.upload({
                url: 'http://localhost:3000/upload', //webAPI exposed to upload the file
                data:{file:file} //pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                if(resp.data.error_code === 1){ //validate success
                    $window.alert('an error occured');
                } else {
                    $window.alert('Success!');
                    $scope.resultJSON = angular.toJson(resp.data);
                }
            }, function (resp) { //catch error
                console.log('Error status: ' + resp.status);
                $window.alert('Error status: ' + resp.status);
            });
        };
    }]);