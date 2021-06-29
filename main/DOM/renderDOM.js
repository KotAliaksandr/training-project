import { createUserAnsver } from "../api/api-handlers";

export const renderResultTestUser = () => {
    const answerOneQuestionOne = document.getElementById('answerOneQuestionOne');
    const answerOneQuestionTwo = document.getElementById('answerOneQuestionTwo');
    const answerBtn = document.getElementById('answerBtn');
    const buttonToBegin = document.getElementById('buttonToBegin');
    const tryAgain = document.getElementById('tryAgain');
    const questionsNone = document.querySelector('.questions');
    const forAnswerUser = document.querySelector('.forAnswerUser');
    const outputAnswer = document.createElement('h2');

    let counter = 0;

    buttonToBegin.onclick = () => {
        questionsNone.classList.toggle('showQuestions');
        forAnswerUser.classList.toggle('forAnswerUserShow');
        outputAnswer.innerHTML = null;
    
    };
    
    tryAgain.onclick = () => {
        questionsNone.classList.toggle('showQuestions');
        forAnswerUser.classList.toggle('forAnswerUserShow');
        outputAnswer.innerHTML = null;
        answerBtn.disabled = false;
    }
    
    const sendResultUser = () => {
        const answerUser = {
            resultUser: `${counter} scores`,
            nameUser: 'Sasha'
        };
        createUserAnsver(answerUser);
    };
    
    answerBtn.addEventListener('click', event => {
        event.preventDefault();
        answerOneQuestionOne.checked ? counter++ : null;
        answerOneQuestionTwo.checked ? counter++ : null;
        outputAnswer.innerHTML = `Your result: ${counter} scores`;
        forAnswerUser.append(outputAnswer);
        sendResultUser();
        counter = 0;
        answerBtn.disabled = true;
    });    
};
