export class MobileInputs {

  constructor() {
    //Show the mobile inputs if the user is on mobile.
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.querySelector("#mobile-inputs").classList.add("active");

      this.setUpButtonEvents();
    }
  }

  setUpButtonEvents() {
    let fireButton = document.querySelector("#button-fire");
    let moveLeftButton = document.querySelector("#button-left");
    let moveRightButton = document.querySelector("#button-right");

    fireButton.onpointerdown = () => {
      this.fire = true;
    };
    fireButton.onpointerleave = () => {
      this.fire = false;
    }

    moveLeftButton.onpointerdown = ()=>{
      this.left = true;
    }
    moveLeftButton.onpointerup = () => {
      this.left = false;
    }
    moveLeftButton.onpointerleave = () => {
      this.left = false;
    }

    moveRightButton.onpointerdown = ()=>{
      this.right = true;
    }
    moveRightButton.onpointerup = () => {
      this.right = false;
    }
    moveRightButton.onpointerleave = () => {
      this.right = false;
    }
  }

}
