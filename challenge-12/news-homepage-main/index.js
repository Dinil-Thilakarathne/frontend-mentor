const mobileNavIcon = document.getElementById("mobileNavIcon");
const closeIcon = document.getElementById("closeIcon");
const headerNavList = document.getElementById("headerNavList");

mobileNavIcon.addEventListener("click",() =>{
    headerNavList.style.display="flex";
    closeIcon.style.display="block";
})
closeIcon.addEventListener("click",() =>{
    headerNavList.style.display="none";
    closeIcon.style.display="none";
})