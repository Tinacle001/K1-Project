import './App.css'
import Nav from './components/Nav/Nav'
import Body from './components/Body/Body'
function App() {
  return (
    <>
      <div className='app'>
        <Nav />
        <Body title='' />
        <Body title='Nigerian Music' isLarge />
        <Body title='Evergreen Music' isLarge />
      </div>
    </>
  )
}

export default App
