//import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
//import Country from './components/Country/Country';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Countries></Countries>
   

    </div>
  );
}
/*
function LoadCountries(){
  const[countries , setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  //console.log(countries)
  return(
    <div>
      <h2>Travelling arount the world</h2>
      <h4>Number of Countries: {countries.length}</h4>
       {
         countries.map(country=><ShowCountry name={country.name} capital={country.capital} ></ShowCountry>)
       }
    
    </div>
  );
}

function ShowCountry(props){
  return(
  <div>
    <h1>name: {props.name}</h1>
    <h1>Capital: {props.capital}</h1>
  </div>
  )
}
*/
export default App;
