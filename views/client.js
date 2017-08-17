const app = angular.module('fileSizeApp', ['ngFileUpload']);

app.controller('fileUploadCtrl', ['Upload', '$window', (Upload, $window)=>{
    const ctrl = this;
    ctrl.submot = () =>{ //Called upon form submit index.html
      if (ctrl.upload_form.file.$vald && ctrl.file){
        ctrl.upload(ctrl.file); //Fires upload function defined below
      }
    } 
    ctrl.upload = (file) => {
      Upload.upload({
        url: 'httmp;//localhost:3000/upload', //webAPI exposed to upload the file
        data:{file:file}
      }).then((resp)=>{
        if(resp.data.error_code === 0 ){
          //Success handling
          $window.alert('Success');
        } else {
          //Failure handling
          $window.alter('Something went wrong');
        }
      }, (resp) => {
        console.log('Error status: ' + resp.status);
        $window.alert('Error status: ' + resp.status);
      });
    }
}]);