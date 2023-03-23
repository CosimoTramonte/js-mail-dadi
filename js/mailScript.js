const btnrestart = document.getElementById("restart");
const btnstart = document.getElementById("btnstart");
const btnMyDice = document.getElementById("mydice");
const btninvia = document.getElementById("btnInvia");
const outputmessage = document.getElementById("outputEmail");

const validemail = [
    "ugodeughi@gmail.com",
    "mariorossii@gmail.com",
    "luigibianchi@gmail.com",
    "andreaverdi@gmail.com",
    "mariogialli@gmail.com",
]

btninvia.addEventListener("click", function(){

    const email = document.getElementById("email").value;
    
    if (email === ""){
        alert("Attenzione! Campo da compilare")

    } else if (validemail.includes(email)){
        let message = ` 
        Complimenti, sei stato autorizzato.
        Inizia a giocare.
        ` 
        document.getElementById("outputEmail").classList.add("true");
        document.getElementById("outputEmail").innerHTML = message;
        document.getElementById("diceTable").classList.remove("hide");

        let diceComputerNumber = Math.floor(Math.random() * 7)
        let diceUserNumber = Math.floor(Math.random() * 7)

        btnstart.addEventListener("click", function(){
            
            if(this.click){
                document.getElementById("diceComputer").innerHTML = diceComputerNumber;
            }           
        })

        btnMyDice.addEventListener("click", function(){
            document.getElementById("diceUser").innerHTML = diceUserNumber;

            if(diceUserNumber > diceComputerNumber){
                let message = ` 
                Complimenti, hai vinto!
                ` 
                document.getElementById("result").innerHTML = message
                document.getElementById("result").classList.add("true")
            } else if(diceUserNumber < diceComputerNumber){
                let message = ` 
                Mi dispiace, hai perso!
                ` 
                document.getElementById("result").innerHTML = message
                document.getElementById("result").classList.add("wrong")
            } else if (diceUserNumber = diceComputerNumber){
                let message = ` 
                Pareggio, riprova!
                ` 
                document.getElementById("result").innerHTML = message
            }
        })

        btnrestart.addEventListener("click", function(){
            
        })

    
    } else {
        let message = ` 
        Mi dispiace, non sei autorizzato.
        Riprova o abbandona.
        ` 
        document.getElementById("outputEmail").classList.add("wrong")
        document.getElementById("outputEmail").innerHTML = message
    }
    


})