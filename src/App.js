import './App.css';
import { useState } from 'react';
import Swal from 'sweetalert2'

function App() {
 
  
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const [toggleClass,setToggleClass] = useState(false)

  let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];

  return (
    <div>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />


          <h2>Yes ... It's {day} 🌝 ☕ </h2>
        </div>
        <div className='input'>
          <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onMouseDown={(e) => {
            if(toDo === ''){
              setToggleClass(true)
            }else{
              setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
              setToDo('')
            }
            }} className={toggleClass ? 'plusAnimate fas fa-plus': 'fas fa-plus'} onMouseUp={()=>setToggleClass(false)}></i>
        </div>
        {/* {
          toDos.map((item) => {
            return <div className="todos" key={item.id}>
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    setToDos(toDos.filter(currentItem => {
                      if (item.id === currentItem.id) {
                        currentItem.status = e.target.checked
                      }
                      return currentItem
                    }))
                  }} value={item.status} type="checkbox" name="" id="" />
                  <p>{item.text}</p>
                </div>
                <div className="right">
                  <i onClick={() => {
                    setToDos(toDos.filter(currentItem => {
                      return (currentItem !== item)
                    }))
                  }} className="fas fa-times"></i>
                </div>
              </div>
            </div>
          })
        } */}

      </div>


      <div className='statusArea' >
        <div className='pending'>
          <div style={{ textAlign: 'center' }}>
            <h1>Pending Tasks</h1>
          </div>
          {/* {
            toDos.map((item) => {
              if (!item.status) {
                return <div key={item.id} className='active'>
                  <h2>{item.text}</h2>
                </div>
              } else {
                return null
              }
            })
          } */}
           {
          toDos.map((item) => {
            return <div className="todos" key={item.id}>
              <div className="todo" style={{}}>
                <div className="left" >
                  <div>
                  <input onChange={(e) => {
                    setToDos(toDos.filter(currentItem => {
                      if (item.id === currentItem.id) {
                        currentItem.status = e.target.checked
                      }
                      return currentItem
                    }))
                   
                  }} value={item.status} type="checkbox" name="" id="" />
                  </div>
                  <p>{item.text}</p>
                </div>
                <div className="right">
                  <i onClick={() => {
                    Swal.fire({
                      title: 'Are you sure?',
                      icon: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                      if (result.isConfirmed) {
                        setToDos(toDos.filter(currentItem => {
                          return (currentItem !== item)
                        }))
                      }
                    })
                    
                  }} className="fas fa-times"></i>
                </div>
              </div>
            </div>
          })
        }
        </div>


        <div className='completed'>
          <div style={{ textAlign: 'center' }}>
            <h1>Completed Tasks</h1>
          </div>
          {
            toDos.map((item) => {
              if (item.status) {
                return <div key={item.id} className='active'>
                  <h2>{item.text}</h2>
                </div>
              } else {
                return null
              }
            })
          }
        </div>
        {/* <div className='deleted'>
          <div style={{ textAlign: 'center' }}>
            <h1>Deleted Tasks</h1>
          </div>
          {
            toDos.map((item) => {
              if (item.status) {
                return <div key={item.id} className='active'>
                  <h2>{item.text}</h2>
                </div>
              } else {
                return null
              }
            })
          }
        </div> */}
      </div>
    </div>
  );
}

export default App;
