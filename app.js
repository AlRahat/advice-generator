const apiUrl= "https://api.adviceslip.com/advice"


function advicegenerator() {
    fetch(apiUrl).then(function(response){
        return response.json();
     }). then (function(data){
        document.querySelector(".advice-count").textContent = "ADVICE  # "+ data.slip.id;;
        document.querySelector(".advice").textContent = data.slip.advice;
        
    })    
}
advicegenerator()
document.querySelector('#generate-advice-btn').addEventListener('click', function(){
    advicegenerator();
})