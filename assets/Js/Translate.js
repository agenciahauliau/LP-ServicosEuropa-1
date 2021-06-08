window.addEventListener("load", function () {
  Translate()
});

function Translate() {
  
  const local = localStorage.getItem("langPage");
  if (local != null) {
    const params = new URLSearchParams(window.location.search);
    params.set("lang", local);

    window.history.replaceState( {}, "", decodeURIComponent(`${window.location.pathname}?${params}`));
  } else {
    const LanguageBrowser = navigator.language;

    const params = new URLSearchParams(window.location.search);
    params.set("lang", LanguageBrowser);

    window.history.replaceState( {}, "", decodeURIComponent(`${window.location.pathname}?${params}`));

  }

  const urlLang = new URLSearchParams(window.location.search).get("lang");

  document.querySelector("html").setAttribute("lang", urlLang);

  const Translator = new Request("assets/Lang/Language.json");

  fetch(Translator)
    .then((response) => response.json())
    .then((data) => {
      const speech = urlLang.replace(/-/, "");

      //meta page

      document.querySelector('title').innerText = data[speech].metatags.title;

      document.querySelector('meta[name="title"]').setAttribute("content", data[speech].metatags.title);
      document.querySelector('meta[name="description"]').setAttribute("content", data[speech].metatags.description);
      document.querySelector('meta[name="keywords"]').setAttribute("content", data[speech].metatags.keywords);

      document.querySelector('meta[property="og:title"]').setAttribute("content", data[speech].metatags.title);
      document.querySelector('meta[property="og:description"]').setAttribute("content", data[speech].metatags.description);

      document.querySelector('meta[property="twitter:title"]').setAttribute("content", data[speech].metatags.title);
      document.querySelector('meta[property="twitter:description"]').setAttribute("content", data[speech].metatags.description);

      //text page

      document.querySelector(".one h1").innerText = data[speech].text.one.title;
      document.querySelector(".one h2").innerText =
        data[speech].text.one.subtitle;

      document.querySelector(".two .titleSection").innerText =
        data[speech].text.two.title;

      document.querySelector(".adaptBox h3").innerText =
        data[speech].text.two.adaptTitle;
      document.querySelector(".adaptBox p").innerText =
        data[speech].text.two.adaptSubtitle;
      document.querySelector(".adaptText p").innerText =
        data[speech].text.two.adaptText;
      document.querySelector(".adaptText li:nth-child(1)").innerText =
        data[speech].text.two.adaptListOne;
      document.querySelector(".adaptText li:nth-child(2)").innerText =
        data[speech].text.two.adaptListTwo;
      document.querySelector(".adaptText li:nth-child(3)").innerText =
        data[speech].text.two.adaptListThree;
      document.querySelector(".adaptText li:nth-child(4)").innerText =
        data[speech].text.two.adaptListFour;
      document.querySelector(".adaptText li:nth-child(5)").innerText =
        data[speech].text.two.adaptListFive;

      document.querySelector(".reachBox h3").innerText =
        data[speech].text.two.reachTitle;
      document.querySelector(".reachBox p").innerText =
        data[speech].text.two.reachSubtitle;
      document.querySelector(".reachText p").innerText =
        data[speech].text.two.reachText;
      document.querySelector(".reachText li:nth-child(1)").innerText =
        data[speech].text.two.reachListOne;
      document.querySelector(".reachText li:nth-child(2)").innerText =
        data[speech].text.two.reachListTwo;
      document.querySelector(".reachText li:nth-child(3)").innerText =
        data[speech].text.two.reachListThree;
      document.querySelector(".reachText li:nth-child(4)").innerText =
        data[speech].text.two.reachListFour;

      document.querySelector(".convertBox h3").innerText =
        data[speech].text.two.convertTitle;
      document.querySelector(".convertBox p").innerText =
        data[speech].text.two.convertSubtitle;
      document.querySelector(".convertText p").innerText =
        data[speech].text.two.convertText;
      document.querySelector(".convertText li:nth-child(1)").innerText =
        data[speech].text.two.convertListOne;
      document.querySelector(".convertText li:nth-child(2)").innerText =
        data[speech].text.two.convertListTwo;
      document.querySelector(".convertText li:nth-child(3)").innerText =
        data[speech].text.two.convertListThree;
      document.querySelector(".convertText li:nth-child(4)").innerText =
        data[speech].text.two.convertListFour;
      document.querySelector(".convertText li:nth-child(5)").innerText =
        data[speech].text.two.convertListFive;
      document.querySelector(".convertText li:nth-child(6)").innerText =
        data[speech].text.two.convertListSix;
      document.querySelector(".convertText .alert").innerText =
        data[speech].text.two.convertListObs;

      document
        .querySelectorAll(".textInformation button")
        .forEach((el) => (el.innerText = data[speech].text.two.pickme));

      document.querySelector(".three h2").innerText =
        data[speech].text.three.title;
      document.querySelector(".three h3").innerText =
        data[speech].text.three.subtitle;
      document.querySelector(".three p:nth-child(3)").innerText =
        data[speech].text.three.textPOne;
      document.querySelector(".three p:nth-child(4)").innerText =
        data[speech].text.three.textPTwo;
      document.querySelector(".three p:nth-child(5)").innerText =
        data[speech].text.three.textPThree;
      document.querySelector(".three p:nth-child(6)").innerText =
        data[speech].text.three.textPFour;

      document.querySelector(".four .Licia h3").innerText =
        data[speech].text.four.liciaName;
      document.querySelector(".four .Licia h4").innerText =
        data[speech].text.four.liciaRoll;
      document.querySelector(".four .Licia p").innerText =
        data[speech].text.four.liciaTestimonial;

      document.querySelector(".four .Junior h3").innerText =
        data[speech].text.four.juniorName;
      document.querySelector(".four .Junior h4").innerText =
        data[speech].text.four.juniorRoll;
      document.querySelector(".four .Junior p:nth-child(3)").innerText =
        data[speech].text.four.juniorPOneTestimonial;
      document.querySelector(".four .Junior p:nth-child(4)").innerText =
        data[speech].text.four.juniorPTwoTestimonial;

      document.querySelector(".four .Antonio h3").innerText =
        data[speech].text.four.antonioName;
      document.querySelector(".four .Antonio h4").innerText =
        data[speech].text.four.antonioRoll;
      document.querySelector(".four .Antonio p").innerText =
        data[speech].text.four.antonioTestimonial;

      document.querySelector(".five h2").innerText =
        data[speech].text.five.title;
      document.querySelector(".five p:nth-child(2)").innerText =
        data[speech].text.five.textPOne;
      document.querySelector(".five p:nth-child(3)").innerText =
        data[speech].text.five.textPTwo;
      document.querySelector(".five label[for='name']").innerText =
        data[speech].text.five.formName;
      document.querySelector(".five label[for='website']").innerText =
        data[speech].text.five.formWebsite;
      document.querySelector(".five label[for='email']").innerText =
        data[speech].text.five.formEmail;
      document.querySelector(".five label[for='tel']").innerText =
        data[speech].text.five.formTel;
      document.querySelector(".five label[for='language']").innerText =
        data[speech].text.five.formLanguage;
      document.querySelector(".five label[for='package']").innerText =
        data[speech].text.five.formPackage;
      document.querySelector(".five option[value='Adapt']").innerText =
        data[speech].text.five.optionPackageOne;
      document.querySelector(".five option[value='Reach']").innerText =
        data[speech].text.five.optionPackageTwo;
      document.querySelector(".five option[value='Convert']").innerText =
        data[speech].text.five.optionPackageThree;
      document.querySelector(".five option[value='Custom Service']").innerText =
        data[speech].text.five.optionPackageFour;
      document.querySelector(".five #sendMensage").innerText =
        data[speech].text.five.formButton;
    });
}
