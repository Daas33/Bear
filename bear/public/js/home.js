function like (like,unlike)
{
    
// heart = document.getElementById("likepost1");
 
      like.style.display = "none";
      unlike.style.display = "block";  
    

};
function unlike (unlike,like)
{
    
// heart = document.getElementById("likepost1");
      unlike.style.display = "none"; 
      like.style.display = "block";
       
    

};

 async function story(){
    news = document.getElementById("newsfeed");
    stor = document.getElementById("story");
    news.style.display = "none";
    stor.style.display = "block";
    await new Promise (resolve => setTimeout(resolve, 2000));
    news.style.display = "block";
    stor.style.display = "none";
    
};
function noty(){
    notify = document.getElementById("notification");
    chat =   document.getElementById("ch");
    chat.style.display = "none";
    notify.style.display = "block";
};
// function chats(){
//     notify = document.getElementById("notification");
//     chat =  document.getElementById("ch");
//     chat.style.display = "block";
//     notify.style.display = "none";
// };
// function search(){
//     leftmenu = document.getElementById("leftmenu");
//     searchmenu =  document.getElementById("searchmenu");
//     searchmenu.style.display = "block";
//     leftmenu.style.display = "none";
// };



