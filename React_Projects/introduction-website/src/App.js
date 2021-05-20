import adampicture from './images/adam1.JPG'
import madison from './images/madison.jpg'
import student from './images/studying.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={adampicture} className = "App-logo" alt="adam" />
        <p>Hello World!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        {/*Begin Section 1: Who Am I?*/}
        <div className="Who-am-i">
          <h1 className="Section-Head">Who Am I?</h1>
          <ul>
            <li>I’m a senior at the University of Minnesota studying computer science</li>
            <li>My club “Small Satellite Research Lab” is building a satellite and launching it in 2023</li>
            <li>I’m reading “Sarum” by Edward Rutherfurd. It’s a novel about English history</li>
            <li>I love the show Impractical Jokers - their clips always crack me up!</li>
          </ul>
        </div>
        {/*End Section 1: Who Am I?*/}

        {/*Begin Section 2: Where Am I From?*/}
        <div className="Where-im-from">
          <h1 className="Section-Head">Where Am I From?</h1>
          <p>I'm from 
            <a className="App-link"
               href="https://en.wikipedia.org/wiki/Madison,_Wisconsin"
               target="_blank"
               rel="noopener noreferrer"
              >Madison, Wisconsin!</a>
              <img src={madison} className = "center-picture" alt="madison" />
          </p>
          <p>Fun fact - the cheese used to make the moon was imported from Wisconsin.</p>
        </div>
        {/*End Section 2: Where Am I From? */}
        {/*Begin Section 3: How do I learn?*/}
        <div className="How-i-learn">
          <h1 className="Section-Head">How do I learn?</h1>
          <ol>
            <li>Research topic to get a better understanding</li>
            <li>Practice a few problems, get feedback from peers/mentor</li>
            <li>Repeat</li>
            <li>Try to explain it to someone else - if I can do it, nice! If not, go back to step one</li>
          </ol>
          <img src={student} className='center-picture' id='student-studying' alt='student' />
        </div>
        {/*End Section 3: How do I learn?*/}
        {/*Begin Section 4: Miscellanious*/}
        <div className="Miscellaneous">
          <h1 className="Section-Head">Miscellaneous</h1>
          
        </div>
      </body>
    </div>
  );
}

export default App;
