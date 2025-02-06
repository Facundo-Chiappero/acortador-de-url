const URL="https://tinyurl.com/api-create.php?url="

const sendBtn=document.getElementById("send")
sendBtn.addEventListener("click",shortUrl)
const copyBtn=document.getElementById("copy")
copyBtn.addEventListener("click",copyUrl)

function shortUrl(){
    var urlToShort=document.getElementById("url").value
    
    fetch(URL+urlToShort).then(response=>response.text()).then(data=>{
        if (data=="Error") {
            alert("Por favor ingrese una URL valida")
            document.getElementById("url").classList.add("invalid")
            document.getElementById("shorturl").value="Error"
            return
        }
        document.getElementById("url").classList.remove("invalid")
        document.getElementById("shorturl").value=data
    })
}

function copyUrl(){
    var copyText = document.getElementById("shorturl");
    copyText.select();
    copyText.setSelectionRange(0, copyText.value.length);
    document.execCommand("copy");
    alert("Copiado: " + copyText.value);
}