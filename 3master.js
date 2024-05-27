function linksSetColor(color){
    var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
      }
  }
  
  function bodySetColor(color){
    document.querySelector('body').style.color=color;  
  }
  
  function bodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor=color;  
  }
  
  function nightDayHandler(self){
    if(self.value == 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');   
      Links.setColor('powderblue')   
      self.value = 'day';
    } else {
      Body.setBackgroundColor('white')
      Body.setColor('black');   
      Links.setColor('blue');
      self.value = 'night';  
    } 
  }
  
  
  Body 객체와 Links 객체를 만들고, 각 객체의 메소드를 추가해 봅시다. Body 객체에는 setBackgroundColor(), setColor() 메소드가 추가되어야 하고, Links 객체에는 setColor() 메소드 추가되어야 합니다. 
  
  master.js
  var Body = {
    setColor: function(color){
      document.querySelector('body').style.color=color;  
    },
    setBackgroundColor: function(color){
      document.querySelector('body').style.backgroundColor=color;  
    }
  }
  
  var Links = {
    setColor: function(color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  }
  
  function nightDayHandler(self){
    if(self.value == 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');   
      Links.setColor('powderblue')   
      self.value = 'day';
    } else {
      Body.setBackgroundColor('white')
      Body.setColor('black');   
      Links.setColor('blue');
      self.value = 'night';  
    } 
  }
  
  