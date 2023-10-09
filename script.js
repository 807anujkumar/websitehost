let clickHere=document.querySelector('.first');
let apply= document.querySelector(".wrapper2");
function OpenNewtab()
{
    apply.classList.add('active');
}
clickHere.addEventListener('click',()=>{
    OpenNewtab();
    

});
let Wrapper1=document.querySelector('.wrapper');
let Wrapper2=document.querySelector('.wrapper2');
let NewCross=document.querySelector('.cross');
 function removeTab()
 {
     
    apply.classList.remove('active');
    
 }
// Wrapper1.addEventListener('click',()=>{
//     removeTab();
// });
Wrapper2.addEventListener('click',()=>{
    
    removeTab();
 });
NewCross.addEventListener('click',()=>{
    
    removeTab();
});


 