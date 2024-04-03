function eventclick1() {
  document.querySelectorAll(".unique-1")[0].style.backgroundColor = 'red';
  document.querySelectorAll(".unique-1")[1].style.backgroundColor = 'white';
  document.querySelectorAll(".unique-1")[2].style.backgroundColor = 'white';
}

function eventclick2() {
  document.querySelectorAll(".unique-1")[1].style.backgroundColor = 'red';
  document.querySelectorAll(".unique-1")[0].style.backgroundColor = 'white';
  document.querySelectorAll(".unique-1")[2].style.backgroundColor = 'white';
}

function eventclick3() {
  document.querySelectorAll(".unique-1")[2].style.backgroundColor = 'red';
  document.querySelectorAll(".unique-1")[1].style.backgroundColor = 'white';
  document.querySelectorAll(".unique-1")[0].style.backgroundColor = 'white';
}

function eventclick4() {
  alert("よろしいですか？")
}

// document.getElementById("check-btn").disabled = true;

function change() {
  if  ((document.getElementById("check1").checked)
    && (document.getElementById("check2").checked) 
    && (document.getElementById("check3").checked)) 
  {
    document.getElementById("check-btn").disabled = false;

  } else {
    document.getElementById("check-btn").disabled = true;
  }
}

function eventclick5() {
  confirm("送信しますか？")
}

function gotogoogle(){
  window.open ('https://www.google.com/');
}

setTimeout(gotogoogle, 5000);
addEventListener("scroll",gotogoogle)

// pagetop_btn.addEventListener("click", scroll_top);

  // console.log(document.querySelectorAll(".unique-1"))