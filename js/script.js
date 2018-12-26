let icons = document.getElementsByClassName("show-info");
console.log(icons.length)
for (let i = 0; i < icons.length; i++){
	console.log(i)
	let icon = icons[i];

	icon.addEventListener("click", function(event){
		console.log("clicked")
		if(this.parentNode.nextElementSibling.classList.contains("active")){
			this.parentNode.nextElementSibling.classList.remove("active")

		}else{
			this.parentNode.nextElementSibling.classList.add("active")

		}
	})



}

