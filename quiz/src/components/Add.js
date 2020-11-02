import React, { useState } from 'react'
import './quiz.css';
const Add = () => {
    const questions = [
        {
            questionText: 'Koliko je Luka Brekalo znao o programiranju 2019. godine?',
            answerOptions: [
                {answerText: 'Malo', isCorrect: false },
                {answerText: 'Jako malo', isCorrect: false},
                {answerText: 'Nimalo', isCorrect: false},
                {answerText: 'Skoro nimalo', isCorrect: true}
            ],
        },
        {
            questionText: 'Zašto je završio fakultet na Logosu, a ne na sveučilištu?',
            answerOptions: [
                {answerText: 'Zato što je glup', isCorrect: false},
                {answerText: 'Ima pare', isCorrect: false},
                {answerText: 'Zato što je bio sportaš', isCorrect: true},
                {answerText: 'Zato što nije upao na FSR', isCorrect: false }
            ],
        },
        {
            questionText: 'Je li spreman na timski rad?',
            answerOptions: [
                {answerText: 'Da', isCorrect: true},
                {answerText: 'Ne', isCorrect: false},
                {answerText: 'Možda', isCorrect: false}
            ],
        },
        {
            questionText: 'Koliko ima volje učiti/naučiti programirati od 1-10?',
            answerOptions: [
                {answerText: '7', isCorrect: false},
                {answerText: '2', isCorrect: false},
                {answerText: '10', isCorrect: true},
                {answerText: '6', isCorrect: false},
                {answerText: '8', isCorrect: false},
            ],
        },
        {
            questionText: 'Zašto ga moram imati u svom timu?',
            answerOptions: [
                {answerText: 'Zašto ne?', isCorrect: true},
                
            ],
        },
        {
            questionText: 'Koliko sati dnevno je spreman učiti?',
            answerOptions: [
                {answerText: '6h', isCorrect: false},
                {answerText: '8h', isCorrect: false},
                {answerText: '4h', isCorrect: false},
                {answerText: 'Koliko je potrebno', isCorrect: true}
            ],
        },
        {
            questionText: 'Gdje se vidi u IT-u?',
            answerOptions: [
                {answerText: 'Na backendu', isCorrect: false},
                {answerText: 'Na frontedu', isCorrect: true},
                {answerText: 'Na krevetu', isCorrect: false}
            ],
        },
        {
            questionText: 'U čemu bi se volio usavršiti?',
            answerOptions: [
                {answerText: 'Vue', isCorrect: false},
                {answerText: 'React', isCorrect: true},
                {answerText: 'PHP', isCorrect: false}
            ],
        }, 
        {
            questionText: 'Najčešće otvarana stranica na googlu-?',
            answerOptions: [
                {answerText: 'Am I to stuppid for programming', isCorrect: true},
                {answerText: '24 sata', isCorrect: false},
                {answerText: 'w3', isCorrect: false},
                {answerText: 'Spark school', isCorrect: false},
            ],
        },
       {
           questionText: 'Zašto zaposliti nekoga tko nema iskustva?',
           answerOptions: [
               {answerText: 'Ne treba ga zaposlit', isCorrect: false},
               {answerText: 'Zato što ga možemo oblikovat kako želimo', isCorrect: true},
               {answerText: 'Mi nemamo vremena za ljude bez iskustva', isCorrect: false}
           ]
       }
    ];
    
    
	const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

	const handleAnswer = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
        }
        console.log(nextQuestion);
    };
    const correct = () => {
        alert('Ne možete resetirati, ako želite ponovno igrati zaposlite me! :) ') 
    }
    return (
        <div className="quiz-app">
        <div className='quiz'>
			{showScore ? (
				<div className='score-section'>
				<span>You scored <span className="span">{score}</span> of <span className="span">{questions.length}</span> </span>
                <button onClick={() => correct()}>Reset</button>
				</div>
                
			) : (
                <>
					<div className='question-section'>
						<div className='question-count'>
                        <h2>Meet me quiz</h2>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
                        
						{questions[currentQuestion].answerOptions.map(answerOption => ( 
                        <button onClick={() => handleAnswer(answerOption.isCorrect)}>{answerOption.answerText}</button> 
                        
						))}
                        
                        
					</div>
                    
				</>
			)}
		</div>
        </div>
	);
}

export default Add;
