let Form = document.getElementById("Form");
let Pertens = {
  Email: "",
  Pass: ""
};

let InpText = document.getElementById("InpText");
let span = document.getElementById("spandate");

let InpTextP = document.getElementById("InpTextP");

let submitlogra = document.getElementById("BtnLogar");

// Form.addEventListener("submit", function(e) {
//   e.preventDefault()

//   localStorage.setItem("Email", InpTextP.value);

//   localStorage.setItem("Pass", InpTextP.value);
// })
Form.addEventListener("submit", function(e) {
  e.preventDefault()

  Pertens.Email = InpText.value

  Pertens.Pass = InpTextP.value

  console.log(Pertens)
})
// opencadastro
function opendate() {
  if(span.innerHTML == ""){   
  document.getElementById("spandate").style = " position: relative; padding: 5px;  background-color: #FFE4E4; width: 135px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; bottom: 265px; left: 230px;"
  span.innerHTML = "<button class='btnnumber' onclick='dateum()'>1</button><button class='btnnumber' onclick='date2()'>2</button><button class='btnnumber' onclick='date3()'>3</button><button class='btnnumber' onclick='date4()'>4</button><button class='btnnumber' onclick='date5()'>5</button><br><button class='btnnumber' onclick='date6()'>6</button><button class='btnnumber' onclick='date7()'>7</button><button class='btnnumber' onclick='date8()'>8</button><button class='btnnumber' onclick='date9()'>9</button><button class='btnnumber' onclick='date10()'>10</button><br><button class='btnnumber' onclick='date11()'>11</button><button class='btnnumber' onclick='date12()'>12</button><button class='btnnumber' onclick='date13()'>13</button><button class='btnnumber' onclick='date14()'>14</button><button class='btnnumber' onclick='date15()'>15</button><button class='btnnumber' onclick='date16()'>16</button><button class='btnnumber' onclick='date17()'>17</button><button class='btnnumber' onclick='date18()'>18</button><button class='btnnumber' onclick='date19()'>19</button><button class='btnnumber' onclick='date20()'>20</button><button class='btnnumber' onclick='date21()'>21</button><button class='btnnumber' onclick='date22()'>22</button><button class='btnnumber' onclick='date23()'>23</button><button class='btnnumber' onclick='date24()'>24</button><button class='btnnumber' onclick='date25()'>25</button><button class='btnnumber' onclick='date26()'>26</button><button class='btnnumber' onclick='date27()'>27</button><button class='btnnumber' onclick='date28()'>28</button><button class='btnnumber' onclick='date29()'>29</button><button class='btnnumber' onclick='date30()'>30</button><button class='btnnumber' onclick='date31()'>31</button>"
    }else {
    span.innerHTML =""
    span.style="display: none;"
    }
}
function dateum(params) {
  document.getElementById("selectin").innerHTML = "1"
}
function date2(params) {
  document.getElementById("selectin").innerHTML = "2"
}
function date3(params) {
  document.getElementById("selectin").innerHTML = "3"
}
function date4(params) {
  document.getElementById("selectin").innerHTML = "4"
}
function date5(params) {
  document.getElementById("selectin").innerHTML = "5"
}
function date6(params) {
  document.getElementById("selectin").innerHTML = "6"
}
function date7(params) {
  document.getElementById("selectin").innerHTML = "7"
}
function date8(params) {
  document.getElementById("selectin").innerHTML = "8"
}
function date9(params) {
  document.getElementById("selectin").innerHTML = "9"
}
function date10(params) {
  document.getElementById("selectin").innerHTML = "10"
}



function date11(params) {
  document.getElementById("selectin").innerHTML = "11"
}
function date12(params) {
  document.getElementById("selectin").innerHTML = "12"
}
function date13(params) {
  document.getElementById("selectin").innerHTML = "13"
}
function date14(params) {
  document.getElementById("selectin").innerHTML = "14"
}
function date15(params) {
  document.getElementById("selectin").innerHTML = "15"
}
function date16(params) {
  document.getElementById("selectin").innerHTML = "16"
}
function date17(params) {
  document.getElementById("selectin").innerHTML = "17"
}
function date18(params) {
  document.getElementById("selectin").innerHTML = "18"
}
function date19(params) {
  document.getElementById("selectin").innerHTML = "19"
}
function date20(params) {
  document.getElementById("selectin").innerHTML = "20"
}




function date21(params) {
  document.getElementById("selectin").innerHTML = "21"
}
function date22(params) {
  document.getElementById("selectin").innerHTML = "22"
}
function date23(params) {
  document.getElementById("selectin").innerHTML = "23"
}
function date24(params) {
  document.getElementById("selectin").innerHTML = "24"
}
function date25(params) {
  document.getElementById("selectin").innerHTML = "25"
}
function date26(params) {
  document.getElementById("selectin").innerHTML = "26"
}
function date27(params) {
  document.getElementById("selectin").innerHTML = "27"
}
function date28(params) {
  document.getElementById("selectin").innerHTML = "28"
}
function date29(params) {
  document.getElementById("selectin").innerHTML = "29"
}
function date30(params) {
  document.getElementById("selectin").innerHTML = "30"
}

function date31(params) {
  document.getElementById("selectin").innerHTML = "31"
}
