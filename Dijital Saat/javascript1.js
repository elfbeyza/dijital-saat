const hourE1 = document.getElementById("hour");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");

function updateClock(){
	let h = new Date().getHours()
	let m = new Date().getMinutes()
	let s = new Date().getSeconds()
	
	if(h > 23){
		h=h-23
		h = "00"
	}
	

	hourE1.innerHTML = h;
	minutesE1.innerHTML = m;
	secondsE1.innerHTML = s;
	setTimeout(()=>{
		updateClock()
	}, 1000)
}

updateClock();



