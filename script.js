const inputBox = document.querySelector(".input-box");
const addBtn = document.querySelector(".add-btn");
const list = document.querySelector(".list");


let arr = [];

if(localStorage.getItem("AllNotes")){
arr = JSON.parse(localStorage.getItem("AllNotes"));
}
else{
      localStorage.setItem("AllNotes",JSON.stringify([]));
}
//printEmpty status
function printEmptyMsg(){
      clearList();

      let emptyNote = document.createElement("p");
      emptyNote.innerHTML = "<i>Empty list</i>";
      
      list.classList.add("emptyList");
      emptyNote.classList.add("emptyNote");

      list.appendChild(emptyNote);
}

//printlist 
function printList(){
      clearList();
       
      // not apply this class 
     list.classList.remove("emptyList"); 

     arr.forEach((note)=>{
      let li = document.createElement("li");
      let notediv = document.createElement("div");
      let btndiv = document.createElement("div");
      let optiondiv = document.createElement("div");
      let p = document.createElement("p");
      let dltbtn = document.createElement("button");
      let editBtn = document.createElement("button");
      let optionIcon = document.createElement("i");

      p.innerText =note;
      dltbtn.innerText = "Delete";
      editBtn.innerText = "Edit";
      
      dltbtn.classList.add("dltBtn");
      editBtn.classList.add("editBtn");
      notediv.classList.add("note");
      btndiv.classList.add("buttons");
      optiondiv.classList.add("optionContainer");
      optionIcon.classList.add("ri-more-2-fill");
      
      notediv.appendChild(p);
      btndiv.appendChild(editBtn);
      btndiv.appendChild(dltbtn);
      optiondiv.appendChild(optionIcon);
      li.appendChild(notediv);
      li.appendChild(btndiv);
      li.appendChild(optiondiv);
      list.appendChild(li);

     //dlt btn cliked
      dltbtn.addEventListener("click",()=>{
            dltNote(p.textContent);
      });
       
      //edit btn clicked 
      editBtn.addEventListener("click",()=>{
           let editBox = document.createElement("textarea");
           let okBtn = document.createElement("button");
           
           editBtn.style.display = "none";
           p.style.display = "none";

           
           editBox.classList.add("editBox");
           okBtn.classList.add("okBtn");

           okBtn.innerText = "Ok";
           editBox.value = p.textContent;
           let beforeContent = p.textContent;
      
           notediv.appendChild(editBox);
           btndiv.prepend(okBtn);
           
          //ok button clicked
          okBtn.addEventListener("click",()=>{
                if(editBox.value != ""){
                  editNote(beforeContent,editBox.value);
                }
          })
      });
      // option button
     
      optionIcon.addEventListener("click",()=>{
           btndiv.classList.toggle("buttons_dispaly");
      })

     })
}
//clear list at the time or printlist and printempty msg
function clearList(){
      list.innerHTML = "";
}


//dlt note from arr
function dltNote(text){
      arr  = arr.filter((note)=>{
    return note !== text;
   })
   localStorageupdate();
}

//edit note 
function editNote(textbefore,textafter){
    arr = arr.map((note)=>{
         if(note === textbefore){
            note = textafter;
         }
         return note;
    })
     localStorageupdate();
}

//add note from arr
function addNote(text){
      arr.push(text);
      localStorageupdate();
}


//update local storage
function localStorageupdate(){
    let newarr = JSON.stringify(arr);
    localStorage.setItem("AllNotes",newarr);
    isEmptyorNot();
    showTotalNotes();
}

//addbtn cliked
addBtn.addEventListener("click",()=>{
      if(inputBox.value !== ""){
         
        addNote(inputBox.value);
        inputBox.value = "";
      }
})

// arr is empty or not for empty msg
function isEmptyorNot(){
     if(arr.length > 0){
        printList();
     }
     if(arr.length <= 0){
        printEmptyMsg(); 
     }
}
isEmptyorNot();

// Menu-container 
// close menu when we click any where in the document except click on button or menu
const menuBtn = document.getElementById("menu-icon");
const menuContainer = document.querySelector(".menu-container");
let val = 0;

menuBtn.addEventListener("click",(e)=>{
        e.stopPropagation();
        menuContainer.classList.toggle("display");
})

menuContainer.addEventListener("click",(e)=>{
      e.stopPropagation();
})

document.addEventListener("click",(e)=>{
      menuContainer.classList.remove("display");
     if(val === 1){
             header_menuBtn.classList.remove("ri-close-large-fill");
            header_menuBtn.classList.add("ri-menu-line");
            val = 0;
      }
})


//header menu icon
//Menu-btn
const header_menuBtn = document.querySelector(".m-btn");

menuBtn.addEventListener("click",()=>{
          if(val === 0){
           header_menuBtn.classList.add("ri-close-large-fill");
            header_menuBtn.classList.remove("ri-menu-line");
            val = 1;
      }
      else if(val === 1){
             header_menuBtn.classList.remove("ri-close-large-fill");
            header_menuBtn.classList.add("ri-menu-line");
            val = 0;
      }
})



//in menu container
//first div and first icon
const firsticon = document.querySelector(".firsticon");
const firstdiv = document.querySelector(".firstdiv");
let firstnum = 0;

firsticon.addEventListener("click",()=>{
      firstdiv.classList.toggle("bottom__note__view");

      if(firstnum === 0){
            firsticon.classList.remove("ri-arrow-down-s-line");
            firsticon.classList.add("ri-arrow-up-s-line");
            firstnum = 1;
      }
      else if(firstnum === 1){
           firsticon.classList.add("ri-arrow-down-s-line");
            firsticon.classList.remove("ri-arrow-up-s-line");
            firstnum = 0;
      }
})

//second div and second icon
const secondicon = document.querySelector(".secondicon");
const seconddiv = document.querySelector(".seconddiv");
let secondnum = 0;

secondicon.addEventListener("click",()=>{
      seconddiv.classList.toggle("bottom__note__view");

      if(secondnum === 0){
            secondicon.classList.remove("ri-arrow-down-s-line");
            secondicon.classList.add("ri-arrow-up-s-line");
            secondnum = 1;
      }
      else if(secondnum === 1){
           secondicon.classList.add("ri-arrow-down-s-line");
            secondicon.classList.remove("ri-arrow-up-s-line");
            secondnum = 0;
      }
})

//third div and third icon
const thirdicon = document.querySelector(".thirdicon");
const thirddiv = document.querySelector(".thirddiv");
let thirdnum = 0;

thirdicon.addEventListener("click",()=>{
      thirddiv.classList.toggle("bottom__note__view");

      if(thirdnum === 0){
            thirdicon.classList.remove("ri-arrow-down-s-line");
            thirdicon.classList.add("ri-arrow-up-s-line");
            thirdnum = 1;
      }
      else if(thirdnum === 1){
           thirdicon.classList.add("ri-arrow-down-s-line");
            thirdicon.classList.remove("ri-arrow-up-s-line");
            thirdnum = 0;
      }
})

//forth div and forth icon
const forthicon = document.querySelector(".forthicon");
const forthdiv = document.querySelector(".forthdiv");
let forthnum = 0;

forthicon.addEventListener("click",()=>{
      forthdiv.classList.toggle("bottom__note__view");

      if(forthnum === 0){
            forthicon.classList.remove("ri-arrow-down-s-line");
            forthicon.classList.add("ri-arrow-up-s-line");
            forthnum = 1;
      }
      else if(forthnum === 1){
           forthicon.classList.add("ri-arrow-down-s-line");
            forthicon.classList.remove("ri-arrow-up-s-line");
            forthnum = 0;
      }
})


//plus icon click
//for close input box when we click any where in document except click on plusbutton or inputContainer

const plusIconCon = document.querySelector(".pluscontainer");
const inputContainer = document.querySelector(".input-container");
const plusicon = document.querySelector(".plus-icon");
const inBox = document.querySelector(".input-box");

let iconNum = 0;

plusIconCon.addEventListener("click",(e)=>{
      inputContainer.classList.toggle("input-container-display");
      e.stopPropagation();
      if(iconNum === 0){
      plusicon.style.transform = "rotate(45deg)";
      iconNum = 1;      
}
   else if(iconNum === 1){
       plusicon.style.transform = "rotate(0deg)";
       iconNum = 0;
   }

});


inBox.addEventListener("click",(e)=>{
      e.stopPropagation();
})

addBtn.addEventListener("click",(e)=>{
      e.stopPropagation();
})


document.addEventListener("click",()=>{
      inputContainer.classList.remove("input-container-display");
      if(iconNum === 1){
       plusicon.style.transform = "rotate(0deg)";
       iconNum = 0;
   }
})


// theme change
const lightTheme = document.querySelector("#theme1");
const darkTheme = document.querySelector("#theme2");


function showTheme(){
         let currtTheme;
          if(localStorage.getItem("curTheme")){
              currtTheme = localStorage.getItem("curTheme");
          }
          else{
               localStorage.setItem("curTheme","light");
               currtTheme = localStorage.getItem("curTheme");
          }
          
        if(currtTheme === "dark"){
            darkTheme.checked = true;
            document.documentElement.setAttribute("data-theme","dark");
        }
        if(currtTheme === "light"){
            lightTheme.checked = true;
            document.documentElement.setAttribute("data-theme","light");
        }
 
}
lightTheme.addEventListener("click",()=>{
      localStorage.setItem("curTheme","light");
       showTheme();    
})

darkTheme.addEventListener("click",()=>{
      localStorage.setItem("curTheme","dark");
      showTheme();
})

showTheme();



// font change
const roboto = document.querySelector("#Roboto");
const robotoCon = document.querySelector("#RobotoCon");
const Lobster = document.querySelector("#Lobster");
const body = document.querySelector("body");

function applyFont(){
        let curFont;
      if(localStorage.getItem("curFont")){
           curFont = localStorage.getItem("curFont");
      }
      else{
            localStorage.setItem("curFont","Roboto");
            curFont = localStorage.getItem("curFont");
      }
      
      if(curFont === "Roboto"){
        body.style.cssText = "font-family : 'Roboto', sans-serif";
        roboto.checked = true;
      }
      if(curFont === "Roboto Condensed"){
            body.style.cssText = "font-family : 'Roboto Condensed', sans-serif"
            robotoCon.checked = true;
      }
      if(curFont === "Lobster Two"){
            body.style.cssText = "font-family : 'Lobster Two', sans-serif"
            Lobster.checked = true;
      }
}

applyFont();

roboto.addEventListener("click",()=>{
      localStorage.setItem("curFont","Roboto");
      applyFont();
})

robotoCon.addEventListener("click",()=>{
      localStorage.setItem("curFont","Roboto Condensed");
      applyFont();
})

Lobster.addEventListener("click",()=>{
      localStorage.setItem("curFont","Lobster Two");
      applyFont();
})



// show total notes 
const totalNotes = document.querySelector(".totalNotes");

function showTotalNotes(){
      let tNotes = arr.length;
      totalNotes.innerText = `Total Notes = ${tNotes}`;
}

showTotalNotes();

