import React, {useState, useEffect} from 'react';

const MultipleChoiceQuestion = ({question}) => {
  const [yourAnswer, setYourAnswer] = useState('');
  const [grade, setGrade] = useState(false);

  return (
      <div>
        <h5>
          {!grade &&
          <>
            {question.question}
          </>
          }
          {grade &&
          <>
            {question.question}
            {
              question.correct !== yourAnswer &&
              <i className="fas fa-times float-right" style={{color: '#d9161d'}}></i>
            }
            {
              question.correct === yourAnswer &&
              <i className="fas fa-check float-right" style={{color: '#5ab83b'}}></i>
            }
          </>
          }
        </h5>

        <ul className="list-group">
          {
            grade &&
            question.choices.map((choice) => {
              return (
                  <>
                    {yourAnswer === question.correct && yourAnswer === choice &&
                    <li className='list-group-item list-group-item-success'>
                      <lable>
                        <input type='radio'
                               className=''
                               name={question._id}
                               checked
                        />
                        {choice}
                        <i className="fas fa-check float-right" style={{color: '#5ab83b'}}></i>
                      </lable>
                    </li>
                    }
                    {yourAnswer === question.correct && yourAnswer !== choice &&
                    <li className='list-group-item'>
                      <lable>
                        <input type='radio'
                               className=''
                               name={question._id}
                        />
                        {choice}
                      </lable>
                    </li>
                    }
                    {yourAnswer !== question.correct && yourAnswer === choice
                    && choice !== question.correct &&
                    <li className='list-group-item list-group-item-danger'>
                      <lable>
                        <input type='radio'
                               className=''
                               name={question._id}
                               checked
                        />
                        {choice}
                        <i className="fas fa-times float-right" style={{color: '#d9161d'}}></i>
                      </lable>
                    </li>
                    }
                    {yourAnswer !== question.correct && yourAnswer !== choice
                    && choice === question.correct &&
                    <li className='list-group-item list-group-item-success'>
                      <lable>
                        <input type='radio'
                               className=''
                               name={question._id}
                        />
                        {choice}
                        <i className="fas fa-check float-right" style={{color: '#5ab83b'}}></i>
                      </lable>
                    </li>
                    }
                    {yourAnswer !== question.correct && yourAnswer !== choice
                    && choice !== question.correct &&
                    <li className='list-group-item'>
                      <lable>
                        <input type='radio'
                               className=''
                               name={question._id}
                        />
                        {choice}
                      </lable>
                    </li>
                    }
                  </>
              )
            })
          }
          {
            !grade && question.choices.map((choice) => {

              return (
                  <li className="list-group-item">
                    <lable>
                      <input type='radio'
                             className=''
                             onClick={() => {
                               setYourAnswer(choice)
                             }}
                             name={question._id}/> {choice}
                    </lable>
                  </li>
              )
            })
          }
        </ul>
        <p>
          Your answer: {yourAnswer}
        </p>
        <button type="button"
                class="btn btn-success"
                onClick={() => {
                  if (yourAnswer === '') {
                    alert('Please choose an answer before grading！')
                  } else {
                    if (grade) {
                      setYourAnswer('')
                    }
                    setGrade(!grade)
                  }
                }}
        >
          Grade
        </button>
        <hr/>
      </div>
  )
}

export default MultipleChoiceQuestion;