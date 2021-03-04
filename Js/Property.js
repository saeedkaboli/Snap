let El={
    Sec:document.getElementById("Security"),
    Cans:document.getElementById("Cans"),
    Dif:document.getElementById("Diffrent"),
    Comp:document.getElementById("Company"),
    CirOne:document.querySelector(".circleOne"),
    CirTwo:document.querySelector(".circleTwo"),
    CirThree:document.querySelector(".circleThree"),
    CirFour:document.querySelector(".circleFour"),
    BoxImg:document.getElementById("BoxImg")


}
function Security(){
    //show Content Security
    El.Sec.style.background="#008d4b";
    El.CirOne.style.width="15px";
    El.CirOne.style.height="15px";
    // Hide the other Content
    // two item
    El.Cans.style.background="#00ef74";
    El.CirTwo.style.width="10px";
    El.CirTwo.style.height="10px";
    // three item
    El.Dif.style.background="#00ef74";
    El.CirThree.style.width="10px";
    El.CirThree.style.height="10px";
    //foue item
    El.Comp.style.background="#00ef74";
    El.CirFour.style.width="10px";
    El.CirFour.style.height="10px";
    // Changes Img
    El.BoxImg.src="Images/Service-Img/SpriteImg/icons-sprite-5.png";




}
function Can(){
  //show Content Can
  El.Cans.style.background="#008d4b";
  El.CirTwo.style.width="15px";
  El.CirTwo.style.height="15px";
  // Hide the other Content
  // one item
  El.Sec.style.background="#00ef74";
  El.CirOne.style.width="10px";
  El.CirOne.style.height="10px";
  // three item
  El.Dif.style.background="#00ef74";
  El.CirThree.style.width="10px";
  El.CirThree.style.height="10px";
  //foue item
  El.Comp.style.background="#00ef74";
  El.CirFour.style.width="10px";
  El.CirFour.style.height="10px";
   // Changes Img
   El.BoxImg.src="Images/Service-Img/SpriteImg/icons-sprite-6.png";


}
function DI(){
    //show Content Diffrent
  El.Dif.style.background="#008d4b";
  El.CirThree.style.width="15px";
  El.CirThree.style.height="15px";
  // Hide the other Content
  // one item
  El.Sec.style.background="#00ef74";
  El.CirOne.style.width="10px";
  El.CirOne.style.height="10px";
  // one item
  El.Cans.style.background="#00ef74";
  El.CirTwo.style.width="10px";
  El.CirTwo.style.height="10px";
  //foue item
  El.Comp.style.background="#00ef74";
  El.CirFour.style.width="10px";
  El.CirFour.style.height="10px";
   // Changes Img
   El.BoxImg.src="Images/Service-Img/SpriteImg/icons-sprite-2.png";

}
function Com(){
      //show Content Diffrent
     

      El.Comp.style.background="#008d4b";
      El.CirFour.style.width="15px";
      El.CirFour.style.height="15px";
      // Hide the other Content
      // one item
      El.Sec.style.background="#00ef74";
      El.CirOne.style.width="10px";
      El.CirOne.style.height="10px";
      // one item
      El.Cans.style.background="#00ef74";
      El.CirTwo.style.width="10px";
      El.CirTwo.style.height="10px";
      //three item
      El.Dif.style.background="#00ef74";
      El.CirThree.style.width="10px";
      El.CirThree.style.height="10px";
       // Changes Img
    El.BoxImg.src="Images/Service-Img/SpriteImg/icons-sprite-4.png";

}
El.Sec.onclick=Security;
El.Cans.onclick=Can;
El.Dif.onclick=DI;
El.Comp.onclick=Com;