
 function emailp (){
    
          const bear= document.getElementById("base");
          const emailbear= document.getElementById("email");
          const passbear= document.getElementById("pass");
          const showbear= document.getElementById("showpass");
          
          bear.style.display = "none";
          passbear.style.display = "none";
          showbear.style.display = "none";
          emailbear.style.display = "block";
 };
 function passp (){
    
    const bear= document.getElementById("base");
    const emailbear= document.getElementById("email");
    const passbear= document.getElementById("pass");
    const showbear= document.getElementById("showpass");
    
    
    bear.style.display = "none";
    passbear.style.display = "block";
    showbear.style.display = "none";
    emailbear.style.display = "none";
};
function showp (){
    var checkbox = document.getElementById("checkbox");
    
    const bear= document.getElementById("base");
    const emailbear= document.getElementById("email");
    const passbear= document.getElementById("pass");
    const showbear= document.getElementById("showpass");
    if(checkbox.checked!=true)
    {
    
    bear.style.display = "none";
    passbear.style.display = "none";
    showbear.style.display = "block";
    emailbear.style.display = "none";
    }
    else if (checkbox.checked ==true)
    {
        bear.style.display = "none";
        passbear.style.display = "block";
        showbear.style.display = "none";
        emailbear.style.display = "none";
    }
    

};

function reset (){
    
    const bear= document.getElementById("base");
    const emailbear= document.getElementById("email");
    const passbear= document.getElementById("pass");
    const showbear= document.getElementById("showpass");
    
    
    bear.style.display = "block";
    passbear.style.display = "none";
    showbear.style.display = "none";
    emailbear.style.display = "none";
};
