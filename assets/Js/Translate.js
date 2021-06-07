window.addEventListener("load", function () {
  const Lang = new Request("assets/Lang/Language.json");
  fetch(Lang)
    .then((response) => response.json())
    .then((data) => {
      const Langue = navigator.language.replace(/-/, "");

      document.querySelector(".one h1").innerText = data[Langue].one.title;
      document.querySelector(".one h2").innerText = data[Langue].one.subtitle;

      document.querySelector(".two .titleSection").innerText = data[Langue].two.title;

      document.querySelector(".adaptBox h3").innerText = data[Langue].two.adaptTitle;
      document.querySelector(".adaptBox p").innerText = data[Langue].two.adaptSubtitle;
      document.querySelector(".adaptText p").innerText = data[Langue].two.adaptText;
      document.querySelector(".adaptText li:nth-child(1)").innerText = data[Langue].two.adaptListOne;
      document.querySelector(".adaptText li:nth-child(2)").innerText = data[Langue].two.adaptListTwo;
      document.querySelector(".adaptText li:nth-child(3)").innerText = data[Langue].two.adaptListThree;
      document.querySelector(".adaptText li:nth-child(4)").innerText = data[Langue].two.adaptListFour;
      document.querySelector(".adaptText li:nth-child(5)").innerText = data[Langue].two.adaptListFive;

      document.querySelector(".reachBox h3").innerText = data[Langue].two.reachTitle;
      document.querySelector(".reachBox p").innerText = data[Langue].two.reachSubtitle;
      document.querySelector(".reachText p").innerText = data[Langue].two.reachText;
      document.querySelector(".reachText li:nth-child(1)").innerText = data[Langue].two.reachListOne;
      document.querySelector(".reachText li:nth-child(2)").innerText = data[Langue].two.reachListTwo;
      document.querySelector(".reachText li:nth-child(3)").innerText = data[Langue].two.reachListThree;
      document.querySelector(".reachText li:nth-child(4)").innerText = data[Langue].two.reachListFour;

      document.querySelector(".convertBox h3").innerText = data[Langue].two.convertTitle;
      document.querySelector(".convertBox p").innerText = data[Langue].two.convertSubtitle;
      document.querySelector(".convertText p").innerText = data[Langue].two.convertText;
      document.querySelector(".convertText li:nth-child(1)").innerText = data[Langue].two.convertListOne;
      document.querySelector(".convertText li:nth-child(2)").innerText = data[Langue].two.convertListTwo;
      document.querySelector(".convertText li:nth-child(3)").innerText = data[Langue].two.convertListThree;
      document.querySelector(".convertText li:nth-child(4)").innerText = data[Langue].two.convertListFour;
      document.querySelector(".convertText li:nth-child(5)").innerText = data[Langue].two.convertListFive;
      document.querySelector(".convertText li:nth-child(6)").innerText = data[Langue].two.convertListSix;
      document.querySelector(".convertText .alert").innerText = data[Langue].two.convertListObs;

      document.querySelectorAll(".textInformation button").forEach(el => el.innerText = data[Langue].two.pickme);

      console.log(document.querySelectorAll(".textInformation button").NodeChilds)

      document.querySelector(".three h2").innerText = data[Langue].three.title;
      document.querySelector(".three h3").innerText = data[Langue].three.subtitle;
      document.querySelector(".three p:nth-child(3)").innerText = data[Langue].three.textPOne;
      document.querySelector(".three p:nth-child(4)").innerText = data[Langue].three.textPTwo;
      document.querySelector(".three p:nth-child(5)").innerText = data[Langue].three.textPThree;
      document.querySelector(".three p:nth-child(6)").innerText = data[Langue].three.textPFour;

      document.querySelector(".four .Licia h3").innerText = data[Langue].four.liciaName;
      document.querySelector(".four .Licia h4").innerText = data[Langue].four.liciaRoll;
      document.querySelector(".four .Licia p").innerText = data[Langue].four.liciaTestimonial;

      document.querySelector(".four .Junior h3").innerText = data[Langue].four.juniorName;
      document.querySelector(".four .Junior h4").innerText = data[Langue].four.juniorRoll;
      document.querySelector(".four .Junior p:nth-child(3)").innerText = data[Langue].four.juniorPOneTestimonial;
      document.querySelector(".four .Junior p:nth-child(4)").innerText = data[Langue].four.juniorPTwoTestimonial;

      document.querySelector(".four .Antonio h3").innerText = data[Langue].four.antonioName;
      document.querySelector(".four .Antonio h4").innerText = data[Langue].four.antonioRoll;
      document.querySelector(".four .Antonio p").innerText = data[Langue].four.antonioTestimonial;

      document.querySelector(".five h2").innerText = data[Langue].five.title;
      document.querySelector(".five p:nth-child(2)").innerText = data[Langue].five.textPOne;
      document.querySelector(".five p:nth-child(3)").innerText = data[Langue].five.textPTwo;
      document.querySelector(".five label[for='name']").innerText = data[Langue].five.formName;
      document.querySelector(".five label[for='website']").innerText = data[Langue].five.formWebsite;
      document.querySelector(".five label[for='email']").innerText = data[Langue].five.formEmail;
      document.querySelector(".five label[for='tel']").innerText = data[Langue].five.formTel;
      document.querySelector(".five label[for='language']").innerText = data[Langue].five.formLanguage;
      document.querySelector(".five label[for='package']").innerText = data[Langue].five.formPackage;
      document.querySelector(".five option[value='Adapt']").innerText = data[Langue].five.optionPackageOne;
      document.querySelector(".five option[value='Reach']").innerText = data[Langue].five.optionPackageTwo;
      document.querySelector(".five option[value='Convert']").innerText = data[Langue].five.optionPackageThree;
      document.querySelector(".five option[value='Custom Service']").innerText = data[Langue].five.optionPackageFour;
      document.querySelector(".five #sendMensage").innerText = data[Langue].five.formButton;      
    });
});
