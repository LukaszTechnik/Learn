const slideList=[
    {
        img: "img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "img3.jpg",
        text: 'Trzeci tekst'
    }
];
const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots=[...document.querySelectorAll('.dots span')];
let active=0;
let time = 3000;
const changeDot = () => {
    const activeDot=dots.findIndex(dot=>dot.classList.contains('active'));
    //console.log(activeDot);
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}
const changeSlider = function(){
    active++;
    if (active == sliderList.length){
        active=0;
    }
    image.src = sliderList[active].img;
    h1.textContent=slideList[active].text;
    changeDot();
}
setInterval(changeSlider, time);
