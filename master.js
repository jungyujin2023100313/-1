var target = document.querySelector('body');

function linkSetColor(color){
  var alist = document.querySelectorAll('a');
  var i = 0;
  while (i < alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
}

function bodySetColor(color){
  target.style.color = color;
}

function bodyBgSetColor(color){
  target.style.backgroundColor = color;
}

function nightDayHandler(self){        
  if(self.value == 'day'){
    bodyBgSetColor('white');
    bodySetColor('black');            
    linkSetColor('red');
    self.value = 'night';
  } else {
    bodyBgSetColor('black');
    bodySetColor('white');        
    linkSetColor('blue');
    self.value = 'day';
  }  
}
