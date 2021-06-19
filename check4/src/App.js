import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './Profile/image.jpg';
import Profile from './Profile/Profile';
function App() {
const data = { 
  fullName:'Mariem',
  bio:'my job ',
  profession:'dev web',
}
const handleName = (name) => alert(`my name is ${name}`);
return (
  <div className="App">
    <Profile
     name={data.fullName}
     Bio={data.bio}
     profession={data.profession}
     handleName={handleName}
    >
      <img  src={img} alt=""  />
      </Profile>
  </div>
  );
}

export default App;
