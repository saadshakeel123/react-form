import './App.css';
import react,{useState} from 'react'

function App() {
  // State Variable
  const [personArray, setPersonArray] = useState([])
  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Helper Function
  
  function btnfunc () {
    setPersonArray({
      FirstName: FirstName,
      LastName: LastName,
      password: password,
      Email: Email
    })
    console.log(
      {
        FirstName: FirstName,
        LastName: LastName,
        password: password,
        Email: Email
       
      }
    )
  }

  


  return (
    <div className="App-header">
     <h1>
      Simple Form
     </h1>

      <div className='container'>
      <div>
      FirstName : <input type="text" value={FirstName} onChange={(e) => { return (setFirstName(e.target.value)) }} />
      </div>
      <br/>
      <div>
      LastName : <input type="text" value={LastName} onChange={(e) => { return (setLastName(e.target.value)) }} />
      </div>
      <br/>
      <div>
      Email  : <input type="Email" value={Email} onChange={(e) => { return (setEmail(e.target.value)) }} />
      </div>
      <br/>
      <div>
        Password : <input type="password" value={password} onChange={(e) => { return (setPassword(e.target.value)) }} />
      </div>
      <br/>
      <div>
        <button onClick={btnfunc} className="btn">Submit</button>
      </div>
      </div>
    </div>

  )
}

export default App;
