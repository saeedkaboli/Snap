let El={
    Sec:document.getElementById("Security"),
    Cans:document.getElementById("Cans"),
    Dif:document.getElementById("Diffrent"),
    Comp:document.getElementById("Company"),
    CirOne:document.querySelector(".circleOne"),
    CirTwo:document.querySelector(".circleTwo"),
    CirThree:document.querySelector(".circleThree"),
    CirFour:document.querySelector(".circleFour"),
    BoxImg:document.getElementById("BoxImg"),
    title:document.getElementById("CommentTitle"),
    p:document.getElementById("ComentParagraph"),
    list:document.getElementById("list-pro")


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
    // change h1
   El.title.innerText="امنیت در اولویت است";
    //change p
    El.p.textContent="امنیت کاربران اولویت اصلی اسنپ است. به همین منظور تلاش می‌کنیم قابلیت‌هایی در جهت امنیت و آسایش بیشتر سفرهای خود به وجود آوریم. قابلیت‌هایی مانند:";
    //change list
    El.list.innerHTML=`
    <li><p>تایید صلاحیت کاربران راننده توسط ناجا</p></li>
    <li><p>ثبت اطلاعات کاربر راننده در تاکسی اینترنتی</p></li>
    <li><p>بررسی خودرو کاربر راننده</p></li>
    <li><p>عکس کاربر راننده</p></li>
    <li><p>امکان به اشتراک گذاشتن اطلاعات و نقشه مسیر با آشنایان</p></li>
    <li><p>پنهان‌سازی شماره تلفن کاربران راننده و مسافر در حین تماس</p></li>
    
    `




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
   // change h1
   El.title.innerText="با تاکسی اینترنتی اسنپ، هوشمند سفر کنید";
   //change p
   El.p.textContent="ویژگی‌های اسنپ همه آن چیزی است که یک شهروند هوشمند به آن نیاز دارد. قابلیت‌هایی مانند:";
   //change List
   El.list.innerHTML=`
   
   
   <li><p>صرفه‌جویی در هزینه و زمان</p></li>
   <li><p>حق انتخاب در نحوه پرداخت هزینه سفر (آنلاین یا نقدی)</p></li>
   <li><p>امکان انجام سفر رفت‌وبرگشت یا دو مقصده</p></li>
   <li><p>امکان انتخاب مدت زمان توقف در مسیر</p></li>
   <li><p>پشتیبانی ۲۴ساعته با تاکسی اینترنتی</p></li>
   <li><p>امکان ذخیره آدرس‌های منتخب در اپلیکیشن</p></li>
   <li><p>امکان انجام سفر رایگان، با معرفی اسنپ به دوستان</p></li>



   `


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

      // change h1
      El.title.innerText="چند سرویس در یک اپلیکیشن";
      //change p
      El.p.textContent="کاربران با نصب اپلیکیشن اسنپ می‌توانند علاوه بر استفاده از خدمات تاکسی اینترنتی از سرویس‌های مختلف سوپراپلیکیشن اسنپ هم استفاده کنند. سرویس‌هایی مانند:";
      //change list
      El.list.innerHTML=`
      <li><p><b>اسنپ اکو:</b> سفری مقرون‌به‌صرفه و با کیفیت</p></li>
      <li><p><b>اسنپ‌رُز:</b> سفر بانوان و خانواده‌ها، با هم‌راهان خانم</p></li>
      <li><p><b>اسنپ‌باکس:</b> حمل بسته و مرسولات با موتورسیکلت</p></li>
      <li><p><b>اسنپ‌‌‌‌‌وانت:</b> جابه‌جایی بارهای سنگین</p></li>
      <li><p><b>اسنپ‌بایک:</b> جابه‌جایی مسافران با موتورسیکلت</p></li>
      <li><p><b>اسنپ‌فود:</b> سفارش غذا</p></li>
      <li><p><b>اسنپ‌مارکت:</b> خرید از سوپرمارکت‌ها و شعبه‌های هایپراستار</p></li>
      <li><p><b>اسنپ‌تریپ:</b> رزرو هتل‌های داخلی و خارجی و خرید بلیت هواپیما و اتوبوس</p></li>
      
      `
  

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

       // change h1
   El.title.innerText="نیاز یک سازمان هوشمند";
   //change p
   El.p.textContent="اسنپ راهکارهایی برای هوشمندسازی حمل‌ونقل کارکنان سازمان‌ها و شرکت‌ها دارد. خدماتی مانند:";
   //change list
   El.list.innerHTML=`
   <li><p><b>پنل سازمانی: </b>با ثبت‌نام در پنل سازمانی، از طریق یک صفحه وب می‌توان از تمام سرویس‌های تاکسی اینترنتی اسنپ استفاده کرد. استفاده همزمان از همه سرویس‌ها، مدیریت بهتر سفرها، شفاف‌سازی هزینه‌های حمل‌ونقل سازمانی و گزارش‌گیری قابل اعتماد از قابلیت‌های این پنل است.</p></li>
   <li><p><b>کد سازمانی:</b>در این حالت، یک کد سازمانی مخصوص برای سازمان و تمام اعضای مجموعه ایجاد می‌شود. به این ترتیب ریز گزارش‌ سفرهای کارمندان به صورت هفتگی با تاکسی اینترنتی اسنپ برای مسئول سازمان ارسال می‌شود.</p></li>
   
   
   `



}
El.Sec.onclick=Security;
El.Cans.onclick=Can;
El.Dif.onclick=DI;
El.Comp.onclick=Com;