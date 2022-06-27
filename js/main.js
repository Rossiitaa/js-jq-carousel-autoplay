// array con all'interno le immagini 
// creo un ciclo per selezionare le immagini partendo da 0
// creo l'elemento img
// aggiungo la classe d-none per non farle vedere 
// cambio l'attributo dell'immagine
// rimuovo il d-none alla prima immagine per farla vedere
const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];

let activeImg = 0;
const imgsClass = document.querySelector('.carousel-image');
const imgList = imgsClass.children;

for(let i =0; i < images.length; i++) {

const newImg = document.createElement('img');
newImg.classList.add('d-none');
newImg.setAttribute('src', images[i]);
imgsClass.append(newImg);

}
imgList[activeImg].classList.remove('d-none');
imgList[activeImg].classList.add('active');

// prendiamo i bottoni
// quando il bottone viene cliccato parte la funzione assegnata
    // bottone next: immagine scorre avanti
    // bottone prev: immagine scorre indietro
// al click rimuoviamo l'active all'immagine attuale, gli assegniamo il d-none
// all'immagine nuova il contrario, si rimuove il d-none e si assegna l'active
//* bonus1: aggiunger ciclo infinito

const buttonNext = document.querySelector('#next-btn');
buttonNext.addEventListener('click', function() {

imgList[activeImg].classList.remove('active');
imgList[activeImg].classList.add('d-none');

activeImg++;
if (activeImg === imgList.length){
    activeImg = 0;
} 
imgList[activeImg].classList.remove('d-none');
imgList[activeImg].classList.add('active');


});

const buttonPrevious = document.querySelector('#previous-btn');
buttonPrevious.addEventListener('click', function() {

imgList[activeImg].classList.remove('active');
imgList[activeImg].classList.add('d-none');
    
activeImg--;
if (activeImg === -1){
    activeImg = imgList.length - 1;
} 
imgList[activeImg].classList.remove('d-none');
imgList[activeImg].classList.add('active');
});


