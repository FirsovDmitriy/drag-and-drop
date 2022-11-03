import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'To Do',
      tasks: [{id: 1, text: 'React'}, {id: 2, text: 'Vue'}]
    },
    {
      id: 2,
      title: 'Doing',
      tasks: [{id: 1, text: 'React-Client'}, {id: 2, text: 'Vuex'}, {id: 3, text: 'Redux Saga'}]
    },
    {
      id: 3,
      title: 'Done',
      tasks: [{id: 1, text: 'test'}]
    },
  ])

  const [currentCard, setCurrentCard] = useState(null)

  function dragStartHandler (event, card) {
    console.log(card)
    setCurrentCard(card)
  }

  function dragLeaveHandler () {}

  function dragEndHandler (event) {
    event.target.style.background = 'white'
  }

  function dragOverHandler (event) {
    event.preventDefault()
    event.target.style.background = 'tomato'
  }

  function dropHandler (event, card) {
    event.preventDefault()
    console.log(card)
  }

  return (
    <div className="App">
      <div className='App__content'>
        <div className='App__row'>
          {
            columns.map(
              col => (
                <div
                  className='App__col'
                  key={ col.id }
                  onDragOver={ event => dragOverHandler(event) }
                >
                  {
                    col.tasks.map(
                      card => (
                        <div
                          className='Card'
                          key={ card.id }
                          draggable='true'
                          onDragStart={event => dragStartHandler(event, col)}
                          onDragLeave={ event => dragLeaveHandler(event) }
                          onDragEnd={ event => dragEndHandler(event) }
                          onDrop={ event => dropHandler(event, card) }
                        >
                          { card.text }
                        </div>
                      )
                    )
                  }
                </div>
              )
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
