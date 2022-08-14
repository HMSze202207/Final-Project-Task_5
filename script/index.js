function changeColor( selectedColor){
    var text =  document.getElementById("text");
     
    if (selectedColor == 'Red'){
       text.style.color = 'red';
    }else if (selectedColor == 'Blue'){
        text.style.color = 'darkblue';
     }else if (selectedColor == 'Green'){
        text.style.color = 'green';
     }
}

var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

var curFontColor=1;
var curBgColor=1;

function changeFontColor(){
   
}

function changeBgColor(){
}

function changeBg(){

    var targetElement =document.getElementById("td_text"); 
    var selector =  document.getElementById("colorsel");

    var text = selector.options[selector.selectedIndex].text;

    if ( text == 'Red'){
        targetElement.style.backgroundColor ='pink';
    }
    else if(text == 'Blue'){
        targetElement.style.backgroundColor ='powderblue';
    }
    else if(text == 'Green'){
        targetElement.style.backgroundColor = 'lightgreen';
    }

}
