const btn = document.querySelector(".btn-run")

const htmlCode = () =>{
    let code = document.getElementById("code").value;
    let outputFrame = document.getElementById("output");
    outputFrame.innerHTML=code
}

  btn.addEventListener("click",htmlCode)
  htmlCode()


