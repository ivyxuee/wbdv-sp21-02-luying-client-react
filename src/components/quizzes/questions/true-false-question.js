import React, {useState} from 'react';

const TrueFalseQuestion = ({question}) => {
  const [yourAnswer, setYourAnswer] = useState('');
  const [grade, setGrade] = useState(false);

  return (
      <div>
        <h5>
          {grade &&
          <>
            {question.question}
            {
              question.correct === yourAnswer &&
              <i className="fas fa-check float-right" style={{color: '#5bb82f'}}></i>
            }
            {
              question.correct !== yourAnswer &&
              <i className="fas fa-times float-right" style={{color: '#d91b1c'}}></i>
            }
          </>
          }
          {!grade &&
          <>
            {question.question}
          </>
          }
        </h5>
        <ul className="list-group">
          {
            !grade &&
            <>
              <li className="list-group-item">
                <lable>
                  <input type='radio'
                         className=''
                         onClick={() => {
                           setYourAnswer('true')
                         }}
                         name={question._id}/> TRUE
                </lable>
              </li>
              <li className="list-group-item">
                <lable>
                  <input type='radio'
                         className=''
                         onClick={() => {
                           setYourAnswer('false')
                         }}
                         name={question._id}/> FALSE
                </lable>
              </li>
            </>
          }
          {
            grade &&
            <>
              {yourAnswer === question.correct && yourAnswer === 'true' &&
              <>
                <li className='list-group-item list-group-item-success'>
                <lable>
                  <input type='radio'
                         className=''
                         name={question._id}
                         checked
                  />
                  TRUE
                  <i className="fas fa-check float-right" style={{color: '#5bb82f'}}></i>
                </lable>
              </li>
                <li className='list-group-item'>
                  <lable>
                    <input type='radio'
                           className=''
                           name={question._id}
                    />
                    False
                    {/*<i className="fas fa-check float-right"></i>*/}
                  </lable>
                </li>
              </>
              }
              {yourAnswer === question.correct && yourAnswer === 'false' &&
              <>
                <li className='list-group-item'>
                  <lable>
                    <input type='radio'
                           className=''
                           name={question._id}
                    />
                    TRUE
                    {/*<i className="fas fa-check float-right"></i>*/}
                  </lable>
                </li>
                <li className='list-group-item list-group-item-success'>
                  <lable>
                    <input type='radio'
                           className=''
                           name={question._id}
                           checked
                    />
                    False
                    <i className="fas fa-check float-right" style={{color: '#5bb82f'}}></i>
                  </lable>
                </li>
              </>
              }
              {yourAnswer !== question.correct && yourAnswer === 'true' &&
              <>
                <li className='list-group-item list-group-item-danger'>
                  <lable>
                    <input type='radio'
                           className=''
                           name={question._id}
                           checked
                    />
                    TRUE
                    <i className="fas fa-times float-right" style={{color: '#d91b1c'}}></i>
                  </lable>
                </li>
                <li className='list-group-item list-group-item-success'>
                  <lable>
                    <input type='radio'
                           className=''
                           name={question._id}
                    />
                    False
                    <i className="fas fa-check float-right" style={{color: '#5bb82f'}}></i>
                  </lable>
                </li>
              </>
              }
              {yourAnswer !== question.correct && yourAnswer === 'false' &&
              <>
                <li className='list-group-item list-group-item-success'>
                  <lable>
                    <input type='radio'
                           className=''
                           name={question._id}
                    />
                    TRUE
                    <i className="fas fa-check float-right" style={{color: '#5bb82f'}}></i>
                  </lable>
                </li>
                <li className='list-group-item list-group-item-danger'>
                  <lable>
                    <input type='radio'
                           className=''
                           name={question._id}
                           checked
                    />
                    False
                    <i className="fas fa-times float-right" style={{color: '#d91b1c'}}></i>
                  </lable>
                </li>
              </>
              }

            </>
          }
        </ul>

        <p>
          Your answer: {yourAnswer}
        </p>

        <button type="button"
                className="btn btn-success"
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
        {question.correct}
        <hr/>

      </div>
  )

}

export default TrueFalseQuestion;