var id = null;
var leftPost = 0;
let width = screen.availWidth;


function runPuppy() {

   
                           
    var puppy = document.getElementById("puppy");
   

    leftPost++;
    puppy.style.marginLeft  = leftPost +"px";

    if(leftPost >= width ){
        leftPost=0;
        document.getElementById("puppy").style.overflow = "initial";
    }

    }
  

   
    



     
    
    
// add if it reaches the screen end (you can check with screen.availwidth)					

