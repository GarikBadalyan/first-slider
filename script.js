$(document).ready(function(){
$('.slider a').click(function(e){
  if($('.sliderUp img').attr('src') !== $(this).attr('href')){
  $('.sliderUp img').hide().attr('src',$(this).attr('href')).fadeIn(1000)
  }
  e.preventDefault()
})
$('.slider a img').click(function(){
$('.slider a img').fadeTo(500,1).css({'border':'none'})
$(this).fadeTo(500,0.5).css({
  'border':'2px solid blue'
})
})
})






































/*
let images = document.querySelectorAll('.slider img')
let current = 0;
function xax(){
  for(let i = 0; i<images.length;i++){
    images[i].classList.add('opasity')
  }
  images[current].classList.remove('opasity')
}
document.querySelector('.btn-1').onclick= function(){
if(current-1== -1){
  current= images.length-1
}else{
  current--
}
xax()
}
document.querySelector('.btn-2').onclick= function(){
  if(current+1== images.length){
    current= 0
  }else{
    current++
  }
xax()
}
*/























// das 18-@ ushadir nayel
/*
class Samuari {
    constructor(name){
      this.name =name
    }
    hello(){
      console.log(this.name)
    }
  }
  let shogun = new Samuari("Armen")
  console.log(shogun.__proto__.__proto__ === Function.prototype.__proto__)
  //console.log(shogun.__proto__.constructor.__proto__ ===???)
  console.log(shogun.__proto__.__proto__.__proto__===Function.prototype.__proto__.__proto__)
  */
