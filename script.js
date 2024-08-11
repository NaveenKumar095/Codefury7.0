let typed = new Typed(".auto-type",{
    strings : ["Subscribe for Alerts", "Find Resources", "Join Community"],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true
})

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav");
    navBar.classList.toggle("active");
}