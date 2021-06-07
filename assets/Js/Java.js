"use restrict";

window.onload = function () {
  scrollSection();
  if (!localStorage.getItem("cookieAccept")) {
    cookieContainer.classList.add("display");
    setTimeout(() => {
      cookieContainer.classList.add("active");
    }, 500);
  }
  
  var translate = new Translate();
  var currentLng = 'fr';//'fr'
  var attributeName = 'data-tag';
  translate.init(attributeName, currentLng);
  translate.process();
};

window.onscroll = function () {
  scrollSection();
};

function scrollSection() {
  const sections = document.querySelectorAll("section, header, footer");
  const astronaut = document.querySelector(".three .astronaut");
  const quotes = document.querySelectorAll(".four .testimonial");

  for (const section of sections) {
    if (
      ((section.offsetTop - window.pageYOffset) * 100) / window.innerHeight >
      70
    ) {
      section.classList.remove("active");
    } else {
      section.classList.add("active");
    }
  }

  if (
    ((sections.item(3).offsetTop - window.pageYOffset) * 100) /
      window.innerHeight >
    35
  ) {
    astronaut.classList.remove("active");
  } else {
    astronaut.classList.add("active");
  }

  for (const quote of quotes) {
    if (
      ((sections.item(4).offsetTop + quote.offsetTop - window.pageYOffset) *
        100) /
        window.innerHeight >
      60
    ) {
      quote.classList.remove("active");
    } else {
      quote.classList.add("active");
    }
  }
}

const services = document.querySelectorAll(".boxServices div[class*='Box']");

for (const idx in services) {
  const scrollTwo = document.querySelector(".two .scroll");

  services[idx].onclick = function () {
    scrollTwo.scrollTo({
      top: 0,
      left: idx * services[0].offsetWidth - 40,
      behavior: "smooth",
    });
  };
}

const pickMes = document.querySelectorAll(
  ".textInformation div[class*='Text'] .text button"
);
const package = document.querySelector("select[name='package']");
const form = document.querySelector(".five .form form");

for (const idx in pickMes) {
  pickMes[idx].onclick = function () {
    package.value = pickMes[idx].value;
    window.scrollTo({
      top: form.offsetTop,
      behavior: "smooth",
    });
  };
}

async function enviar() {
  const url = window.location.hostname.replace(/^[^/]*\/\/\w+.|(www.)/g, "");
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    de: `site@${url}`,
    para: ["contato@hi4u.me"],
    assunto: `Solicitação de contato pelo formulário do site ${url}`,
    mensagem: `Novo contato do site ${url}\n\n
                Nome: ${document.querySelector("#name").value}\n\n
                Website: ${document.querySelector("#website").value}\n\n
                Email: ${document.querySelector("#email").value}\n\n
                Telefone: ${document.querySelector("#tel").value}\n\n
                Lingua: ${document.querySelector("#language").value}\n\n
                Package: ${document.querySelector("#package").value}\n\n
                `,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  return await fetch(
    "https://services.rangell.com.br/v1/enviar",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      window.alert(
        "Your request has been sent. We will get in touch with you soon. Thank you."
      );
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#tel").value = "";
      document.querySelector("#website").value = "";
    })
    .catch((error) => {
      console.log("error", error);
      window.alert(
        "There is some data missing or an unexpected error has occurred. Check the information you entered or refresh the page and try again."
      );
    });
}

async function executaEnvio() {
  document.querySelector("#sendMensage").disabled = true;
  await enviar();
  document.querySelector("#sendMensage").disabled = false;
}

function activateTracking() {
  let g = document.createElement("script");
  g.setAttribute(
    "src",
    "https://www.googletagmanager.com/gtag/js?id=G-4V439Y8Y33"
  ),
    document.head.appendChild(g);
  let gt = document.createElement("script");
  (gt.text = `window.dataLayer = window.dataLayer || [];\n
	  function gtag(){dataLayer.push(arguments);}\n
	  gtag('js', new Date());\n
	  gtag('config', 'G-4V439Y8Y33');`),
    document.head.appendChild(gt);

  let f = document.createElement("script");
  (f.text = `\n
	  !function(f,b,e,v,n,t,s)\n 
	  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n
	  n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n
	  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n
	  n.queue=[];t=b.createElement(e);t.async=!0;\n
	  t.src=v;s=b.getElementsByTagName(e)[0];\n
	  s.parentNode.insertBefore(t,s)}(window, document,'script',\n
	  'https://connect.facebook.net/en_US/fbevents.js');\n
	  fbq('init', '200709611745559');\n 
	  fbq('track', 'PageView');\n`),
    document.head.appendChild(f);
  let ft = document.createElement("noscript");
  ft.setAttribute("height", "1"),
    ft.setAttribute("width", "1"),
    ft.setAttribute("style", "display:none"),
    ft.setAttribute(
      "src",
      `https://www.facebook.com/tr?id=200709611745559&ev=PageView&noscript=1`
    ),
    document.head.appendChild(ft);
  let c = document.createElement("script");
  (c.text = `\n
		(function (c, l, a, r, i, t, y) {
			c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };\n
			t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;\n
			y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);\n
		})(window, document, "clarity", "script", "5j5c2163qz");`),
    document.head.appendChild(c);
}

const cookieContainer = document.querySelector(".cookies");
const cookieAccept = document.querySelector(".cookieAccept");

cookieAccept.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieAccept", "true");
  activateTracking();
  setTimeout(() => {
    cookieContainer.classList.remove("display");
  }, 2000);
});


function Translate() {
  //initialization
  this.init = function (attribute, lng) {
    this.attribute = attribute;
    this.lng = lng;
  };

  //translate
  this.process = function () {
    _self = this;
    var xrhFile = new XMLHttpRequest();
    //load content data
    xrhFile.open("GET", "assets/Lang/" + this.lng + ".json", false);
    xrhFile.onreadystatechange = function () {
      if (xrhFile.readyState === 4) {
        if (xrhFile.status === 200 || xrhFile.status == 0) {
          var LngObject = JSON.parse(xrhFile.responseText);

          var allDom = document.getElementsByTagName("*");
          for (var i = 0; i < allDom.length; i++) {
            var elem = allDom[i];
            var key = elem.getAttribute(_self.attribute);

            if (key != null) {
              console.log(key);
              elem.innerHTML = LngObject[key];
            }
          }
        }
      }
    };
    xrhFile.send();
  };
}
