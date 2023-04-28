let sec = window.document.getElementById("slider");
let h1 = window.document.getElementById("h1");
let img = window.document.getElementById("img");
let h2 = window.document.getElementById("id");
let p = window.document.getElementById("p");
let btn1 = window.document.getElementById("btn1");
let btn2 = window.document.getElementById("btn2");
const data_person = [
    {
    id: 1,
    type: "html",
    img:"images/1.png",
    description: "it is hayper text mark up language . it is not programming language"
    },
    {
        id: 2,
        type: "css",
        img:"images/2.png",
        description: "it ia cascading style sheet . it used to style data of html",
    },
    {
        id: 3,
        type: "javascript",
        img: "images/3.png",
        description:"it is a programming language . it handel data of web pages."
    },
    {
        id: 4,
        type: "bootstrap",
        img: "images/4.png",
        description:"it ia a big library used to help programmer and developer."
    },
    {
        id: 5,
        type: "ecmascript",
        img: "images/5.png",
        description:"it is an updating of javascript . it has more versions."
    }
];
let index = 0;
// this function to shoe data in the first at slider.
let functio = () => {
    h2.textContent = data_person[index].id;
    h1.textContent = data_person[index].type;
    img.src = data_person[index].img;
    p.textContent = data_person[index].description;
}
functio();
// this function to handel btn2 to go to next step.
let func = () => {
    index++;
    if (index == data_person.length) {
        index = 0;
     }
    functio();
 }
btn2.addEventListener("click", func);
// this function to handel btn1 to go back to previous step.
let funct = () => {
    index--;
    if (index < 0) {
        index = data_person.length - 1;
    }
    functio();
 }
btn1.addEventListener("click", funct);
let new_element = window.document.getElementById("new");
let form_section = window.document.getElementById("form");
let real_form = window.document.getElementById("form1");
let save = window.document.getElementById("save");
let close = window.document.getElementById("close");
let id_input = window.document.getElementById("ida");
let type_input = window.document.getElementById("typea");
let image_input = window.document.getElementById("imgs");
let description_input = window.document.getElementById("descriptions");
// this function to open overlay and form.
let fffff = () => {
    form_section.classList.add("show");
    real_form.style.display = "block";
 }
new_element.addEventListener("click", fffff);
//this function to close overlay and form.
close.addEventListener("click", () => {
    form_section.classList.remove("show");
    real_form.style.display = "none";
});
// this listener to remove reloadding.
save.addEventListener("click", (e) => {
    e.preventDefault();
})
// this function to empty form after send new data to slider.
let remove_function = () => {
    id_input.value = "";
    type_input.value = "";
    image_input.value = "";
    description_input.value = "";
}
 // this function to add new data to array.
let ddddd = () => {
    data_person.push({
        id:id_input.value,
        type: type_input.value,
        img: "images/" + image_input.value,
        description:description_input.value,
    })
    form_section.classList.remove("show");
    real_form.style.display = "none";
    remove_function();
 }
save.addEventListener("click",ddddd)



 
