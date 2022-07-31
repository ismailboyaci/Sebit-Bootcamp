const correctAnswers = ['8', '10', '3', '25']

const button = document.querySelector('.btn')
button.addEventListener('click', onClick = (e) => {
    e.preventDefault();
    const userAnswer = []
    const answer = document.querySelector(".question-form")
    userAnswer.push(answer.q1.value)
    userAnswer.push(answer.q2.value)
    userAnswer.push(answer.q3.value)
    userAnswer.push(answer.q4.value)
    console.log(userAnswer)
    const results = document.querySelector(".result")
    results.classList.remove("d-none")

    let score = 0
    for (var i = 0; i < correctAnswers.length; i++) {
        if (correctAnswers[i] === userAnswer[i]) {
            score +=  25
        }
    }
    const span = document.getElementById('percentage')
    span.innerHTML= `%${score}`
    if (score===100){
        button.classList.add('disabled')
        const newText= document.createElement('p')
        newText.classList.add('text-danger' ,'p-3')
        newText.innerHTML = 'Bravo! Bir sonraki egzersiz grubuna gecebilirsin'
        document.querySelector('.lead').appendChild(newText)
    }


})