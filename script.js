let qr = document.getElementsByClassName("qr")[0]
let generateBtn = document.getElementsByClassName("generateQRcode")[0]

let getQR = async ()=>{
    let input = document.getElementsByTagName("input")[0]
    // let api = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`)
    // let qrcode = await api.json()
    console.log(input.value)
    let p = new Promise((resolve, reject)=>{
        qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
        
        resolve(1)
    })
    p.then(()=>{
        qr.classList.remove("display-none")
        
    })
}

generateBtn.addEventListener("click", ()=>{
    getQR()
})



