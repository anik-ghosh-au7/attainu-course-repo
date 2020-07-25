$.validator.setDefaults({
  submitHandler: function () {
    let form_data = new FormData($('#signupForm')[0]);
    let http_req = new XMLHttpRequest();
      http_req.onloadstart = () => {
        console.log('started');
        let responsediv = document.createElement( "div" );
        responsediv.id = 'response';
        $("#newDialog").append(responsediv);
        let button = document.createElement('button');
        button.id = 'closeDialog';
        button.innerText = 'Close';
        button.addEventListener('click', closeDialogBox());
        $("#newDialog").append(button);
        $("#newDialog")[0].showModal();
      };
      http_req.open('POST', '/');
      http_req.upload.onprogress = function(e) {
        showProgress(e);
      };
      http_req.upload.onloadend = function(e) {
        loadend(e);
      };
      http_req.send(form_data);
      http_req.onloadend = (e) => {
        console.log(http_req.responseText);
        $('#signupForm')[0].reset();
        $('#response')[0].innerHTML += `<h5>${http_req.responseText}</h5>`;
      }
  }
});

$.validator.addMethod('filesize', function(value, element, param) {
  return this.optional(element) || (element.files[0].size <= param) 
});

  $(document).ready(function () {
    $("#signupForm").validate({
      rules: {
        image: { 
          required: true, 
          extension: "png|jpe?g|gif", 
          filesize: 1048576 * 40
        }
      },
      messages: {
        image: "File must be JPG, GIF or PNG, less than 40MB"
      },
      errorElement: "em",
      errorPlacement: function (error, element) {
        error.addClass("help-block");
        error.insertAfter(element);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
      }
    });
  });

function closeDialogBox() {
  return () => {
    console.log('button clicked');
    $('#response').remove();
    $('#closeDialog').remove();
    $('#newDialog')[0].close();
  }
};

function showProgress(e) {
  console.log(`${e.type}: ${e.loaded} bytes transferred`);
  $('#response')[0].innerHTML += `<p>${e.type} --> ${e.loaded} bytes transferred</p>`;
};

function loadend(e) {
  $('#response')[0].innerHTML += `<p>${e.type} --> ${e.loaded} upload finished</p>`;
};