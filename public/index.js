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

    function mockCreate(){
          var modal = document.querySelector("#mock-open-modal");
          var backdrop = document.querySelector("#mock-modal-backdrop");
          modal.style.display = "block"; /*do not show if clicked*/
         backdrop.style.display= "block"; /*do not show if clicked*/
        }

          function mockClose(){
            var modal = document.querySelector("#mock-open-modal");
            var backdrop = document.querySelector("#mock-modal-backdrop");
            console.log("x button clicked");
            modal.style.display = "none"; /*do not show if clicked*/
            backdrop.style.display= "none"; /*do not show if clicked*/
          }

         var mockOpen=document.querySelector("#mock");
         if(mockOpen){
           mockOpen.addEventListener("click", function(){
             mockCreate();
           });
         }

         var mockCancel= document.querySelector("#mock-close-button");
           if(mockCancel){
             mockCancel.addEventListener("click", function(){
               console.log("mock event");
               mockClose();
             });
           }

           function prefCreate(){
             var modal = document.querySelector("#pref-open-modal");
             var backdrop = document.querySelector("#pref-modal-backdrop");
             modal.style.display = "block"; /*do not show if clicked*/
            backdrop.style.display= "block"; /*do not show if clicked*/
           }

             function prefClose(){
               var modal = document.querySelector("#pref-open-modal");
               var backdrop = document.querySelector("#pref-modal-backdrop");
               console.log("x button clicked");
               modal.style.display = "none"; /*do not show if clicked*/
               backdrop.style.display= "none"; /*do not show if clicked*/
             }

            var prefOpen=document.querySelector("#pref");
            if(prefOpen){
              prefOpen.addEventListener("click", function(){
                prefCreate();
              });
            }

            var prefCancel= document.querySelector("#pref-close-button");
              if(prefCancel){
               prefCancel.addEventListener("click", function(){
                  console.log("pref event");
                  prefClose();
                });
              }

              function bidCreate(){
                var modal = document.querySelector("#bid-open-modal");
                var backdrop = document.querySelector("#bid-modal-backdrop");
                modal.style.display = "block"; /*do not show if clicked*/
               backdrop.style.display= "block"; /*do not show if clicked*/
              }

                function bidClose(){
                  var modal = document.querySelector("#bid-open-modal");
                  var backdrop = document.querySelector("#bid-modal-backdrop");
                  console.log("x button clicked");
                  modal.style.display = "none"; /*do not show if clicked*/
                  backdrop.style.display= "none"; /*do not show if clicked*/
                }

               var bidOpen=document.querySelector("#bid");
               if(bidOpen){
                 bidOpen.addEventListener("click", function(){
                   bidCreate();
                 });
               }

               var bidCancel= document.querySelector("#bid-close-button");
                 if(bidCancel){
                  bidCancel.addEventListener("click", function(){
                     console.log("bid event");
                     bidClose();
                   });
                 }

                 function brunchCreate(){
                   var modal = document.querySelector("#brunch-open-modal");
                   var backdrop = document.querySelector("#brunch-modal-backdrop");
                   modal.style.display = "block"; /*do not show if clicked*/
                  backdrop.style.display= "block"; /*do not show if clicked*/
                 }

                   function brunchClose(){
                     var modal = document.querySelector("#brunch-open-modal");
                     var backdrop = document.querySelector("#brunch-modal-backdrop");
                     console.log("x button clicked");
                     modal.style.display = "none"; /*do not show if clicked*/
                     backdrop.style.display= "none"; /*do not show if clicked*/
                   }

                  var brunchOpen=document.querySelector("#brunch");
                  if(brunchOpen){
                    brunchOpen.addEventListener("click", function(){
                      brunchCreate();
                    });
                  }

                  var brunchCancel= document.querySelector("#brunch-close-button");
                    if(brunchCancel){
                     brunchCancel.addEventListener("click", function(){
                        console.log("brunch event");
                        brunchClose();
                      });
                    }

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

   function getPhotoTypeFromURL() {
     var path = window.location.pathname;
     return path;
   }


   function handlePhotoAccept(){

     var photoURL = document.getElementById('photo-url').value.trim();
     var caption= document.getElementById('photo-caption').value.trim();

     if(!photoURL || !caption){
       alert("Enter both a URL and a caption!");
     }else{
       var request = new XMLHttpRequest();
       var photoPath = getPhotoTypeFromURL();
       var url = photoPath + '/addPhoto';
       request.open('POST', url);

       var requestBody = JSON.stringify({
         url: photoURL,
         caption: caption
       });

       request.addEventListener('load', function (event) {
         if (event.target.status === 200) {
           var photoCardTemplate = Handlebars.templates.photoCard;
           var photoHTML = photoCardTemplate({
             url: photoURL,
             caption: caption
           });
           var photoContainer = document.querySelector('.photo-card-container');
           photoContainer.insertAdjacentHTML('beforeend', photoHTML);
         } else {
           var message = event.target.response;
           alert("Error storing information on server: " + message);
         }
       });

       request.setRequestHeader('Content-Type', 'application/json');
       request.send(requestBody);

       hidePhotoModal();
     }
   }

   function showPhotoModal(){
     var modal = document.querySelector("#add-photo-window");
     var backdrop = document.querySelector("#window-backdrop");
     modal.style.display = "block"; /*do not show if clicked*/
     backdrop.style.display= "block"; /*do not show if clicked*/
   }

   function clearPhotoModalInputs() {
     var modalInputElements = document.querySelectorAll('#add-photo-window input')
     for (var i = 0; i < modalInputElements.length; i++) {
       modalInputElements[i].value = '';
     }
   }
   function hidePhotoModal(){
     var modal = document.querySelector("#add-photo-window");
     var backdrop = document.querySelector("#window-backdrop");
     console.log("x button clicked");
     modal.style.display = "none"; /*do not show if clicked*/
     backdrop.style.display= "none"; /*do not show if clicked*/

    clearPhotoModalInputs();
   }
     var photoWindowClose= document.querySelector("#window-close");
      if(photoWindowClose){
        photoWindowClose.addEventListener("click", function(){
          hidePhotoModal();
        });
      }

      var photoCancel= document.querySelector("#window-cancel");
       if(photoCancel){
         photoCancel.addEventListener("click", function(){
           hidePhotoModal();
         });
       }

    var photoOpen=document.querySelector("#add-photo-button");
    if(photoOpen){
      photoOpen.addEventListener("click", function(){
        showPhotoModal();
      });
    }

    var photoAccept=document.querySelector("#window-accept");
    if(photoAccept){
      photoAccept.addEventListener("click", function(){
        handlePhotoAccept();
      });
    }
