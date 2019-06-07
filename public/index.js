  /*var cook=document.querySelector("#cookies");
  if(cook){
    cook.addEventListener("click", function(){
  function cookiesCreate(){
    var modal = document.querySelector("#cookies-open-modal");
    var backdrop = document.querySelector("#cookies-modal-backdrop");
    modal.style.display = "block"; /*show if clicked*/
//    backdrop.style.display= "block"; /*show if clicked*/
//  }
//  var modal = document.querySelector("#open-modal");

  var modalContext = {
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
  });


//Stuff for inserting photo and getting the windows to pop up when the buttons are pushed
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

  //get the information from the fields
