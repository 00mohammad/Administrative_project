let manu = document.querySelector(" menu")
let manuBtn = document.querySelector(" header__icon")
let manuBtnIcon = document.querySelector(" header__icon i")

manuBtn.addEventListener("click", function(manuBtnIconclassList){
  if (manuBtnIconclassList.contains("fa-bars")){
      manu.style.left = "0"
      // noinspection JSValidateTypes
      manuBtnIcon.classList = "fa-times"
    } else {
       manu.style.left = "-290"
  }    // noinspection JSValidateTypes
        manuBtnIcon.classList = "fa-times"
}
)