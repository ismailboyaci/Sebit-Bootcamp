
const answers = []
const correct = ['E','E','E','E']




const button = document.querySelector(".btn")
button.addEventListener("click",onClick = (e) => {
    e.preventDefault();
    const answer = document.querySelector(".question-form")
    answers.push(answer.q1.value)
    answers.push(answer.q2.value)
    answers.push(answer.q3.value)
    answers.push(answer.q4.value)
    
    const results = document.querySelector(".result")
    results.classList.remove("d-none")
    let score = 0
    for (var i = 0; i<correct.length;i++){
        if (correct[i]===answers[i]){

            score += 25
        }
    }
    const span = document.getElementById('percentage')
    console.log(span)
    span.innerHTML= `%${score}`

})

