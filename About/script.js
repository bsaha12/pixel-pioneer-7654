function showAns(id) {
    const answer = document.getElementById(`answer${id}`);
    const question = document.querySelector(`.faq-container .question:nth-child(${id * 2 - 1})`);

    // console.log(id, question);
    // console.log(answer);

    const answerDisplayStyle = window.getComputedStyle(answer).getPropertyValue('display');

    if (answerDisplayStyle === 'block') {
        answer.style.display = 'none';
        question.classList.remove('active');
    } else {
        document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
        document.querySelectorAll('.answer').forEach(q=>q.style.display = 'none');
        answer.style.display = 'block';
        question.classList.add('active');
    }
}
