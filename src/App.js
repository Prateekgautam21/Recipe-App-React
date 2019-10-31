import React, {useEffect, useState}  from 'react';
import './App.css';
import RecipeInfo from './Components/RecipeInfo';


function App() {

  // useState is a method of creating a state in functional components to know more about them just
  // check stackOverflow for once, there's a very good answer.
  // const [counter, setCounter] = useState(0);

  const [recipes, setrecipes] = useState([]);
  const [search, setsearch] = useState('');
  const [query, setquery] = useState('chicken');

  const APP_ID = '486b8b58';
  const APP_KEY = '60a5b3ac06c95acd3e78d46738f735ec';

  const Request_API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // Similar to componentDidMount and componentDidUpdate:
  // if you leave the second parameter of useEffect function which is an array empty then it will run only one time. If you don't pass the second parameter at all it will run each time the page rerender itself. You can pass a state in array as well depending on which the useEffect will run, for e.g-- counter.
  useEffect(() => {
    console.log('Effect has been run');
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(Request_API);
    const data = await response.json();
    console.log(data);
    setrecipes(data.hits);
    console.log(data.hits);
  }

  function updateSearch(e){
    setsearch(e.target.value)
  }

  function getSearch(e){
    e.preventDefault();
    setquery(search);
    setsearch('');
  }
  
  return(
    <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input onChange={updateSearch} className="search-bar" type="text" value={search} name=""/>
          <button className="search-button" type="submit">Search</button>
        </form>

      <div className="recipes">
      {recipes.map((recipe) => <RecipeInfo 
        // you can have anything as key, but for right now we're just keeping it simple by using label as a key
        key={recipe.recipe.label}
        title={recipe.recipe.label}  
        calories={recipe.recipe.calories}
        ingredients = {recipe.recipe.ingredients}
        image={recipe.recipe.image}/>)}
      </div>

    </div>
  )
}

export default App;