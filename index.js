 const click = document.querySelector("button")


 let mane = document.getElementById("inputname").value
 let number = document.getElementById("inputnumber").value
 let month = document.getElementById("inputmonth").value
 let year = document.getElementById("inputyear").value
 let cvc = document.getElementById("inputcvc").value

 localStorage.setItem("storename", mane);
 localStorage.setItem("storenumber", number);
 localStorage.setItem("storemonth", month);
 localStorage.setItem("storeyear", year);
 localStorage.setItem("storecvc", cvc);


 function changeinput() {
   const input = document.querySelectorAll("input")
   for (i = 0; i < input.length; i++) {
     input[i].style.outline = "2px solid hsl(0, 100%, 66%)"
     input[i].style.marginBottom = "0"
   }
 }

 function Error() {
   const Errormsg = document.querySelectorAll(".errormsg")
   for (i = 0; i < Errormsg.length; i++) {
     Errormsg[i].style.display = "block"
   }
 }




 click.addEventListener("click", runError)


 function runError(event) {
   var help = new Array("name", "number")
   for (var i = 0; i < 2; i++) {
     let submitForm = document.forms["myForm"][help[i]].value;
     if (submitForm === "" || submitForm == null) {
       changeinput();
       Error();


       event.preventDefault();
     }
   }
 }

