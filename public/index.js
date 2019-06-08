//for cookies and Clubs

function cookiesCreate(){
  var modal = document.querySelector("#cookies-open-modal");
  var backdrop = document.querySelector("#cookies-modal-backdrop");
  modal.style.display = "block"; /*do not show if clicked*/
  backdrop.style.display= "block"; /*do not show if clicked*/
}

  function cookieClose(){
    var modal = document.querySelector("#cookies-open-modal");
    var backdrop = document.querySelector("#cookies-modal-backdrop");
    modal.style.display = "none"; /*do not show if clicked*/
    backdrop.style.display= "none"; /*do not show if clicked*/
  }

  var close= document.querySelector("#cookies-close-button");
   if(close){
     close.addEventListener("click", function(){
       cookieClose();
     });
   }

 var open=document.querySelector("#cookies");
 if(open){
   open.addEventListener("click", function(){
     cookiesCreate();
   });
 }

 //for info Night

 function infoCreate(){
   var modal = document.querySelector("#info-open-modal");
   var backdrop = document.querySelector("#info-modal-backdrop");
   modal.style.display = "block"; /*do not show if clicked*/
  backdrop.style.display= "block"; /*do not show if clicked*/
 }

   function infoClose(){
     var modal = document.querySelector("#info-open-modal");
     var backdrop = document.querySelector("#info-modal-backdrop");
     console.log("x button clicked");
     modal.style.display = "none"; /*do not show if clicked*/
     backdrop.style.display= "none"; /*do not show if clicked*/
   }

  var infoOpen=document.querySelector("#info");
  if(infoOpen){
    infoOpen.addEventListener("click", function(){
      infoCreate();
    });
  }

  var infoCancel= document.querySelector("#modal-close-button");
    if(infoCancel){
      infoCancel.addEventListener("click", function(){
        console.log("info event");
        infoClose();
      });
    }




  //var modal = document.querySelector("#open-modal");

  /*var modalContext = {
    eventTitle: "eventTitle",
    when: "when",
    where: "where",
    what: "what"
  };

  var modalHTML = Handlebars.templates.modal(modalContext);
  (document.body).insertAdjacentHTML('beforeend', modalHTML);
  var modal = document.querySelector("#open-modal");
  var backdrop = document.querySelector("#modal-backdrop");
  var calendarDays = document.getElementsByClassName("event");


  for(var i = 0; i < calendarDays.length; i++){
    calendarDays[i].addEventListener('click', function calendarDaysFunction(){

        modal.classList.remove('hidden');
        backdrop.classList.remove('hidden');
    });
  }


  var modalCloseButton = document.querySelector("#modal-close-button");
  modalCloseButton.addEventListener('click', function closeModal(){
    modal.classList.add('hidden');
    backdrop.classList.add('hidden');
  });*/


//Stuff for inserting photo and getting the windows to pop up when the buttons are pushed

//find out the class that person is trying to get
/*function getClass(){
  var path = window.location.pathname;
  var pathParts = path.split('/');
  if(pathParts[1] == 'active' || pathParts[1] == 'members' || pathParts[1] == 'potential' || pathParts[1] == 'rho' || pathParts[1] == 'sigma' || pathParts[1] == 'tau' || pathParts[1] == 'rho'){
    return pathParts[1];
  }
  else{
    return null;
  }
}
/*
fucntion addPhotoButtonClick(){
  var photoURL = document.getElementById('photo-url').value.trim();
  var caption = document.getElementById('photo-caption').value.trim();

  if(!photoURL || !caption){
    alert("You must put both a url and a caption");
  }
  else{
    var postRequest = new XMLHttpRequest();
    var requestURL = '/' + getClass() + '/addPhoto';
    postRequest.open('POST', requestURL);

    var requestBody = JSON.stringify({
      url: photoURL,
      caption: caption
    });

    postRequest.addEventListener('load', function(event){
      if(event.target.status === 200){
        if(getClass() == 'active'){
          var photoCardTemp = Handlebars.templates.photoCardActives;
          var newPhotoCardHTML = photoCardTemp({
            url: photoURL,
            caption: caption
          });
          var photoCardCont = document.querySelector('.photo-card-actives-container');
          photoCardCont.insertAdjacentHTML('beforeend', newPhotoCardHTML);
        }
        else if(getClass() != 'active' && getClass() != null){
          var photoCardTemp = Handlebars.templates.photoCard;
          var newPhotoCardHTML = photoCardTemp({
            url: photoURL,
            caption: caption
          });
          var photoCardCont = document.querySelector('.photo-card-container');
          photoCardCont.insertAdjacentHTML('beforeend', newPhotoCardHTML);
        }
      }
      else{
        alert("Error storing photo: " + event.target.response);
      }
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(requestBody);

    closeWindow();

  }
}

function openWindow(){
  var windowBackground = document.getElementById('window-backdrop');
  var photoWindow = document.getElementById('add-photo-window');
  //unhide the add photo window and the background
  windowBackground.classList.remove('hidden');
  photoWindow.classList.remove('hidden');
}

function closeWindow(){
  var windowBackground = document.getElementById('window-backdrop');
  var photoWindow = document.getElementById('add-photo-window');
  //unhide the add photo window and the background
  windowBackground.classList.add('hidden');
  photoWindow.classList.add('hidden');

  //clear the fields
  var url = document.getElementById('photo-url');
  var caption = document.getElementById('photo-caption');
  url.value = '';
  caption.value = '';
}

window.addEventListener('DOMContentLoaded', function(){
  var addPhotoButton = document.getElementById('add-photo-button');
  if(addPhotoButton){
    addPhotoButton.addEventListener('click', openWindow);
  }

  var windowAcceptButton = document.getElementsById('window-accept');
  if(windowAcceptButton){
    windowAcceptButton.addEventListener('click', addPhotoButtonClick);
  }

  var windowCancelButtons = document.getElementByClassName('window-close-button');
  for(var i = 0; i < windowCancelButtons.length; i++){
    windowCancelButtons[i].addEventListener('click', closeWindow);
  }
});


/*
  //insert a new photo
  function insertNewPhoto(photoUrl, photoCaption){
    var photo = {
      url: photoUrl,
      caption: photoCaption
    };

    var photoCompile = Handlebars.templates.photoCard(photo);
    var photoCont = document.querySelector('.photo-page');
    photoCont.insertAdjacentHTML('beforeend', photoCompile);

  };

  //show the create photo window
  var addPhotoButton = document.querySelector('#add-photo-button');
  addPhotoButton.addEventListener('click', function(event){
    var windowBackground = document.getElementById('window-backdrop');
    var photoWindow = document.getElementById('add-photo-window');
    //unhide the add photo window and the background
    windowBackground.classList.remove('hidden');
    photoWindow.classList.remove('hidden');
  });

  //variable that get what is in the text fields
  var url = document.getElementById('photo-url');
  var caption = document.getElementById('photo-caption');

  //cloe the window with the x
  var windowClose1 = document.querySelector('#window-close');
  windowClose1.addEventListener('click', function(event){
    var windowBackground = document.getElementById('window-backdrop');
    var photoWindow = document.getElementById('add-photo-window');
    //hide the add photo window and the background
    windowBackground.classList.add('hidden');
    photoWindow.classList.add('hidden');
    //delete the stuff within the fields
    url.value = '';
    caption.value = '';
  });

  //close the window with the cancel button
  var windowClose2 = document.querySelector('#window-cancel');
  windowClose2.addEventListener('click', function(event){
    var windowBackground = document.getElementById('window-backdrop');
    var photoWindow = document.getElementById('add-photo-window');
    //hide the add photo window and the background
    windowBackground.classList.add('hidden');
    photoWindow.classList.add('hidden');
    //delete the stuff within the fields
    url.value = '';
    caption.value = '';
  });

  //add photo winidow button
  var acceptButton = document.getElementById('window-accept');
  acceptButton.addEventListener('click', function(event){
    //wont go through unless both fields are filled
    if(url.value && caption.value){
      //close and delete everything like above
      var windowBackground = document.getElementById('window-backdrop');
      var photoWindow = document.getElementById('add-photo-window');
      //hide the add photo window and the background
      windowBackground.classList.add('hidden');
      photoWindow.classList.add('hidden');
      //add a call to a function that creates the twit and sends it to memory


      //delete the stuff within the fields
      url.value = '';
      caption.value = '';
    }
    else{
      alert("You must put both a url and a caption");
    }
  });
*/
  //get the information from the fields





  function handleRegAccept(){

    var namePerson= document.getElementById('name-enter').value.trim();
    var majorPerson= document.getElementById('major-enter').value.trim();
    var emailPerson= document.getElementById('email-enter').value.trim();
    var attendPerson= document.getElementById('attend-enter').value.trim();

    if(!namePerson || !majorPerson || !emailPerson || !attendPerson){
      alert("Enter all of your information!");
    }else{
      var request = new XMLHttpRequest();
      var url = '/register'+ '/addRegister';
      request.open('POST', url);

      var requestBody = JSON.stringify({
        name: namePerson,
        major: majorPerson,
        email: emailPerson,
        eventsComing: attendPerson
      });

      request.addEventListener('load', function (event) {
        if (event.target.status === 200) {
          var registerTemplate = Handlebars.templates.register;
          var registerHTML = registerTemplate({
            name: namePerson,
            major: majorPerson,
            email: emailPerson,
            eventsComing: attendPerson
          });
          var registerContainer = document.querySelector('.event-container');
          registerContainer.insertAdjacentHTML('beforeend', registerHTML);
        } else {
          var message = event.target.response;
          alert("Error storing information on server: " + message);
        }
      });

      request.setRequestHeader('Content-Type', 'application/json');
      request.send(requestBody);

      hideRegisterModal();
    }
  }

  function showRegisterModal(){
    var modal = document.querySelector("#add-register-window");
    var backdrop = document.querySelector("#register-backdrop");
    modal.style.display = "block"; /*do not show if clicked*/
    backdrop.style.display= "block"; /*do not show if clicked*/
  }

  function clearRegisterModalInputs() {
    var modalInputElements = document.querySelectorAll('#add-register-window input')
    for (var i = 0; i < modalInputElements.length; i++) {
      modalInputElements[i].value = '';
    }
  }
  function hideRegisterModal(){
    var modal = document.querySelector("#add-register-window");
    var backdrop = document.querySelector("#register-backdrop");
    console.log("x button clicked");
    modal.style.display = "none"; /*do not show if clicked*/
    backdrop.style.display= "none"; /*do not show if clicked*/

   clearRegisterModalInputs();
  }
    var registerClose= document.querySelector("#register-close");
     if(registerClose){
       registerClose.addEventListener("click", function(){
         hideRegisterModal();
       });
     }

     var registerCancel= document.querySelector("#register-cancel");
      if(registerCancel){
        registerCancel.addEventListener("click", function(){
          hideRegisterModal();
        });
      }

   var registerOpen=document.querySelector("#create-register-button");
   if(registerOpen){
     registerOpen.addEventListener("click", function(){
       showRegisterModal();
     });
   }

   var registerAccept=document.querySelector("#register-accept");
   if(registerAccept){
     registerAccept.addEventListener("click", function(){
       handleRegAccept();
     });
   }
