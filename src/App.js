import logo from './logo.svg';
import './App.css';
import User from './User';

let firstUser={
  naam: "bhumi",
  age:"18"
}

const secUser={

naam: "bvdfhumi",
  age:"1"

}

function App() {
  return (

    <div>


   <User name={firstUser} desig="gareeb" />


   <User name={secUser} desig="garfdseeb" />




    </div>
   
  );
}

export default App;
