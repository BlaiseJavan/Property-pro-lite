
//box  dialog 
const modal = document.getElementById("myModal");                       
const btn = document.querySelectorAll(".myBtn");

const span = document.getElementsByClassName("close")[0];
const closeYes = document.querySelector(".close-yes");
const closeCancel = document.querySelector(".close-cancel");

btn.forEach(function(item){

    item.onclick = function() {
        modal.style.display = "block";
    }
})

span.onclick = function() {
	modal.style.display = "none";
}

closeYes.onclick = function() {
	modal.style.display = "none";
}

closeCancel.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
