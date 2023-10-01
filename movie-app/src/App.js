import { useEffect } from "react";
// API KEY :78c6758d
import SearchIcon from "./search.svg";
import "./App.css";



// const App = () => {

//     const API_URL = "http://www.omdbapi.com";

//     const searchMovies = async(title) => {
//         // const response = await fetch('$(API_URL)&s=$(title)');
//         const response = await fetch('${API_URL}&s=${title}');
//         const data = await response.json();

//         console.log(data); 
//       }

//     useEffect(() => {
//         searchMovies('Spiderman');
//     },[]);

//     return (
//         <h1> App </h1>

//     );
// }

// export default App;

// . In JavaScript, when you want to use template literals for string interpolation, you should use backticks (`) instead of single or double quotes
const App = () => {
    const API_URL = 'http://www.omdbapi.com?apikey=78c6758d'; // Replace with your actual API URL
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`); // Use backticks (`) here
      const data = await response.json();
  
      console.log(data.Search);
    };
  
    useEffect(() => {
      searchMovies('Spiderman');
    }, []);
  
    return <h1>App</h1>;
  };
  
  export default App;
  