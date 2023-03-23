import axios from 'axios';

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/176.55.63.6
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/




axios.get('https://apis.ergineer.com/ipgeoapi/176.55.63.6')
.then(response => {
	console.log(response.data);
})
.catch(error => {
	console.log(error);
});


function createCard(data) {
	const carDiv = document.createElement('div');
	const img = document.createElement('img');
	const cardInfoDiv = document.createElement('div');
	const ip = document.createElement('h3');
	const ulke = document.createElement('p');
	const enlemBoylam = document.createElement('p');
	const sehir = document.createElement('p');
	const saatDilimi = document.createElement('p');
	const paraBirimi = document.createElement('p');
	const isp = document.createElement('p');

cardInfoDiv.className = 'card';
img.className = 'bayrak';
cardInfoDiv.classNanem = 'card-info';
ip.className = 'ip';
ulke.className = 'ulke';i

img.src = data.country-flag;
ip.textContent = data.ip;
ulke.textContent = `Ülke: ${data.country_code}`;
enlemBoylam.textContent = `Enlem: ${data.latitude} Boylam: ${data.longitude}`;
sehir.textContent = `Şehir: ${data.city}`;
saatDilimi.textContent = `Saat Dilimi: $[data.timezone]`;
paraBirimi.textContent = `Para Birimi: ${data.currency}`;
isp.textContent = `ISP: ${data.isp}`;

cardDiv.appendChild(img);
cardDiv.appendChild(cardInfoDiv);
cardInfoDiv.appendChild(ip);
cardInfoDiv.appendChild(ulke);
cardInfoDiv.appendChild(enlemBoylam);
cardInfoDiv.appendChild(sehir);
cardInfoDiv.appendChild(saatDilimi);
cardInfoDiv.appendChild(paraBirimi);
cardInfoDiv.appendChild(isp);

return cardDiv;
}

const cardsDiv = document.querySelector('.cards');
axios.get('https://apis.erginer.com/ipgeoapip/176.55.63.6')
.then(response => {
	const data = response.data;
	const card = createCard(data);
	cardsDiv.appendChild(card);
})
.catch(error => {
	console.log(error);
});

async function ipAdresimiAl () {
	try {
		const response = await fetch('https://apis.ergineer.com/ipadresim');
		const data = await response.text();
		return data;
	} catch (error) {
		console.log(error);
	}
}

