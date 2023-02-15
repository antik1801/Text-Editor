// console.log('successfully connnected!');
const formatText = document.querySelectorAll('.format');


formatText.forEach((element)=>{
    element.addEventListener('click',function(e){
        console.log(e.target);
    })
})
