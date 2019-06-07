function Main () {
	this.execute = function (){ 
		//this is one comment
        //your code
        const nav = document.getElementById("navId");
        const button = document.getElementById("toggleMenu");
        button.addEventListener("click", function(){
            console.log("the code");
            nav.classList.toggle("open");
        });
	}
}
new Main().execute();