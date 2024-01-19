const descBtn = document.querySelector('[data-description-button]');
const detailBtn = document.querySelector('[data-detail-button]');

const descText = document.querySelector('[data-desc-text]');
const detailText = document.querySelector('[data-detail-text]');

const boxes = document.querySelectorAll('.box');

const currentImage = document.querySelector('[data-current-img]');
const button = document.querySelector('[data-button]');


function init(){
    descBtn.classList.add('active');
    descText.classList.add('active');

    document.querySelector('.wrapper').style.backgroundImage = 'linear-gradient(196deg, #f1a9a9, #e66767)';
    button.style.backgroundColor = '#944852';
    boxes[0].classList.add('active');
}

// Init Function Call
init();

descBtn.addEventListener('click', ()=>{
    // document.querySelector('.wrapper').style.backgroundImage = linear-gradient(196deg, #f1a9a9, #e66767);
    descBtn.classList.add('active');
    detailBtn.classList.remove('active');
    descText.classList.add('active');
    detailText.classList.remove('active');
    // document.body.background = 'red';
})

detailBtn.addEventListener('click', ()=>{
    detailBtn.classList.add('active');
    descBtn.classList.remove('active');
    detailText.classList.add('active');
    descText.classList.remove('active');
})

// function animate(){
//  currentImage.style.treanslate = '20px';   
// }

boxes.forEach((box) =>{
    box.addEventListener('click',async ()=>{
        boxes.forEach((prevBox)=>{
            prevBox.classList.remove('active');
            // currentImage.classList.remove('shakeActive');
        })
        box.classList.add('active');
        
        
        let src = box.getAttribute('data-src');
         (currentImage.src = src);

        currentImage.classList.add('shakeActive');
        setTimeout(() => {
            currentImage.classList.remove('shakeActive');
        }, 1000);

        let bgcolor = box.getAttribute('data-bg');
        console.log(bgcolor);
        document.querySelector('.wrapper').style.backgroundImage = bgcolor;

        let btncolor = box.getAttribute('data-btn');
        button.style.backgroundColor = btncolor;
    })
})