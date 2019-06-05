  var cook=document.querySelector("#cookies");
  if(cook){
    cook.addEventListener("click", function(){
  function cookiesCreate(){
    var modal = document.querySelector("#cookies-open-modal");
    var backdrop = document.querySelector("#cookies-modal-backdrop");
    modal.style.display = "block"; /*show if clicked*/
    backdrop.style.display= "block"; /*show if clicked*/
  }

  /*if cancel button clicked or no input, then close the modal*/

  function closeModal(){
    var modal = document.querySelector("#cookies-open-modal");
    var backdrop = document.querySelector("#cookies-modal-backdrop");
    console.log("x button clicked");
    modal.style.display = "none"; /*do not show if clicked*/
    backdrop.style.display= "none"; /*do not show if clicked*/
  }

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
