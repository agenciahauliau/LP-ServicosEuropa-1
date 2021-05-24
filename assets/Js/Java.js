'use restrict';

window.onload = function () {
	scrollSection();
};

window.onscroll = function () {
	scrollSection();
};

function scrollSection() {
	const sections = document.querySelectorAll('section, header, footer');
	const astronaut = document.querySelector('.three .astronaut');
	const quotes = document.querySelectorAll('.four .testimonial');

	for (const section of sections) {
		if (((section.offsetTop - window.pageYOffset) * 100) / window.innerHeight > 70) {
			section.classList.remove('active');
		} else {
			section.classList.add('active');
		}
	}

	if (((sections.item(3).offsetTop - window.pageYOffset) * 100) / window.innerHeight > 35) {
		astronaut.classList.remove('active');
	} else {
		astronaut.classList.add('active');
	}

	for (const quote of quotes) {
		if (((sections.item(4).offsetTop + quote.offsetTop - window.pageYOffset) * 100) / window.innerHeight > 60) {
			quote.classList.remove('active');
		} else {
			quote.classList.add('active');
		}
	}
}

const services = document.querySelectorAll(".boxServices div[class*='Box']");

for (const idx in services) {
	const scrollTwo = document.querySelector('.two .scroll');

	services[idx].onclick = function () {
		scrollTwo.scrollTo({
			top: 0,
			left: idx * services[0].offsetWidth - 40,
			behavior: 'smooth',
		});
	};
}

const pickMes = document.querySelectorAll(".textInformation div[class*='Text'] .text button");
const package = document.querySelector("select[name='package']");
const form = document.querySelector('.five .form form');

for (const idx in pickMes) {
	pickMes[idx].onclick = function () {
		package.value = pickMes[idx].value;
		window.scrollTo({
			top: form.offsetTop,
			behavior: 'smooth',
		});
	};
}

async function enviar() {
	const url = window.location.hostname.replace(/^[^/]*\/\/\w+.|(www.)/g, '');
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	let raw = JSON.stringify({
		de: `site@${url}`,
		para: ['contato@hi4u.me'],
		assunto: `Solicitação de contato pelo formulário do site ${url}`,
		mensagem: `Novo contato do site ${url}\n\n
                Nome: ${document.querySelector('#name').value}\n\n
                Website: ${document.querySelector('#website').value}\n\n
                Email: ${document.querySelector('#email').value}\n\n
                Telefone: ${document.querySelector('#tel').value}\n\n
                Lingua: ${document.querySelector('#language').value}\n\n
                Package: ${document.querySelector('#package').value}\n\n
                `,
	});

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
	};

	return await fetch('https://services.rangell.com.br/v1/enviar', requestOptions)
		.then((response) => response.text())
		.then((result) => {
			console.log(result);
			window.alert('Your request has been sent. We will get in touch with you soon. Thank you.');
			document.querySelector('#name').value = '';
			document.querySelector('#email').value = '';
			document.querySelector('#tel').value = '';
			document.querySelector('#website').value = '';
		})
		.catch((error) => {
			console.log('error', error);
			window.alert(
				'There is some data missing or an unexpected error has occurred. Check the information you entered or refresh the page and try again.'
			);
		});
}

async function executaEnvio() {
	document.querySelector('#sendMensage').disabled = true;
	await enviar();
	document.querySelector('#sendMensage').disabled = false;
}
