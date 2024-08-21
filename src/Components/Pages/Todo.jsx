import React from 'react';


function Todo() {
  return (
    <>
        <h1>TO-DO-LIST MANAGER</h1>
        <div className='container'>
          <h2 className="heading">To-Do-List📋</h2>
            <section className="input-field">
                <input type="text" placeholder="Enter New Task" className="add-new" />
                <button onclick="add()" id="addButton" className="add-task">Add</button>
            </section>

            {/* task lists */}
            <hr className="horizontal-line" />
            <div className="task-list">

                <div className="task-description">
                    <input type="radio" id="task-name" />
                    <label for="task-name">Study</label>
                    <p>Submit project report</p>
                    <p>Reminder - 10/06/2024</p>
                </div>

                <div className="make-changes">
                    <button className="edit">Edit</button>
                    <button className="delete">delete</button>
                </div>
                <hr />
                
                {/* task list */}
                <section>
                    <div className="task-list">
                        {/* <!-- displayed tasks on a column --> */}
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default Todo