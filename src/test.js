
export function CatchALetter(){
    let random = "12358347965321"
    document.getElementById("paragraph1").innerText =""
    document.getElementById("paragraph2").innerText =""
    document.getElementById("paragraph3").innerText =""
    document.getElementById("paragraph4").innerText =""
    for(let i = 0; i<3;i++){
        for (let j = 0; j<1500;j++){
            let randomchar = random.charAt(Math.floor(Math.random()*random.length))
            switch (i){
                case 0:
                    document.getElementById("paragraph1").innerText+=randomchar
                    break;
                case 1:
                    document.getElementById("paragraph2").innerText+=randomchar
                    break;
                case 2:
                    document.getElementById("paragraph3").innerText+=randomchar
                    break;
                case 3:
                    document.getElementById("paragraph4").innerText+=randomchar
                    break;
                default:
                    break;
            }
        }
        
    }

    
}