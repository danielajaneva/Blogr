const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const cta = document.querySelector("#cta");

burger.addEventListener("click", ()=>{
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
        cta.classList.add("bg-secondary-100", "rounded-lg" ,"shadow-md", "text-center", "p-5","absolute")
    }else{
        menu.classList.add("hidden");
        cta.classList.remove("bg-secondary-100", "rounded-lg" ,"shadow-md", "text-center", "p-5","absolute");
    }
});