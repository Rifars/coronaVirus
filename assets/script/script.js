let textHeader = "corona";
let headertText = document.querySelector('.header-text h1');
let number = 0 - 1;
let hasil = "" ;

// let header = 
function animation(items){
    let item = document.querySelector(items);
    item.classList.add('top');  
}
function animationLeft(items){
    let item = document.querySelector(items);
    item.classList.add('left');  
}
let set = setInterval(function(){
    number++
    if(number >= textHeader.length-1){
        clearInterval(set);
        animationLeft('.header-content .section')
        setTimeout(function(){
            animationLeft('.header-content .buttons .button1');
            setTimeout(function(){
                animationLeft('.header-content .buttons .button2');
            },200)
            animation('.header-img');
            setTimeout(function(){
                animation('.header-mini-img');
            },400);
        }, 80);
    }
    hasil += `<span>${textHeader[number]}</span>`;
    headertText.innerHTML = hasil;

    // headertText.classList.add('top');
    // console.log(header);
    headertText.childNodes[number].classList.add('top');
    console.log(headertText.childNodes[number]);

},350);


// function texts(text,items){
//     this.textHeader = document.querySelector(items);
//     this.tulisan = text;

// }text