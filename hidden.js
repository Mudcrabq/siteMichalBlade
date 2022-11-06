
window.onscroll = function() {scrollFunction1()};

function scrollFunction1() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {



    document.getElementById("myBtn").style.display = "block";
    document.getElementById("header").style.top = "-30px";
	document.getElementById("navi").style.top = "0px";
    } else {
    document.getElementById("header").style.top = "0px";
	document.getElementById("navi").style.top = "30px";
	document.getElementById("myBtn").style.display = "none";
  }

}