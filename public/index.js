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


  /*if cancel button clicked or no input, then close the modal*/
/*
  function closeModal(){
    var modal = document.querySelector("#cookies-open-modal");
    var backdrop = document.querySelector("#cookies-modal-backdrop");
    console.log("x button clicked");
    modal.style.display = "none"; /*do not show if clicked*/
//    backdrop.style.display= "none"; /*do not show if clicked*/
//  }
/*
  var close= document.querySelector(".modal-close-button");
    if(close){
      close.addEventListener("click", function(){
        closeModal();
      });
    }

  var open=document.querySelector("#cookies-open-button");
  if(open){
    open.addEventListener("click", function(){
      cookiesCreate();
    });
  }
});
}
*/
