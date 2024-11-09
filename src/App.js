import { useState } from 'react';

function App() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [bikingIsChecked, setBikingIsChecked ] = useState(false)
  const [hikingIsChecked, setHikingIsChecked ] = useState(false)
  const [runningIsChecked, setRunningIsChecked ] = useState(false)
  const [infoIsSubmitted, setInfoIsSubmitted ] = useState(false)

  const submitInfo = (e) => {
    e.preventDefault()
    setInfoIsSubmitted(true)
  }

  const updateName = (e) => setName(e.target.value)

  const updateEmail = (e) => setEmail(e.target.value)

  const toggleBiking = (e) => setBikingIsChecked(!bikingIsChecked)
  const toggleHiking = (e) => setHikingIsChecked(!hikingIsChecked)
  const toggleRunning = (e) => setRunningIsChecked(!runningIsChecked)

  console.log(name)


  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <div>
        <form onSubmit={submitInfo}>
          <label htmlFor='name'>Enter name: </label>
          <input type='text' id='name' value={name} placeholder='name' onChange={updateName} />
          <label htmlFor='email'>Enter email address: </label>
          <input type='text' id='email' value={email} placeholder='email address' onChange={updateEmail}></input>
          <input type='checkbox' id='biking' checked={bikingIsChecked} aria-checked={bikingIsChecked} onChange={toggleBiking} />
          <label htmlFor='biking'>Biking</label>
          <input type='checkbox' id='hiking' checked={hikingIsChecked} aria-checked={hikingIsChecked} onChange={toggleHiking}/>
          <label htmlFor='hiking'>Hiking</label>
          <input type='checkbox' id='running' checked={runningIsChecked} aria-checked={runningIsChecked} onChange={toggleRunning} />
          <label htmlFor='running'>Running</label>
          <button type='submit'>Submit Info</button>
        </form>
        {
          infoIsSubmitted ? <h2>Your Info has been Submitted!</h2> : null
        }
      </div>
    </main>
  );
}

export default App;
