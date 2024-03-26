import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories, fetchCategoriesSuccess } from './Categories';

function App() {

  const dispatch = useDispatch()
  const Categories = useSelector(state => state.categories.items)
  console.log(Categories);
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <div>
      {Categories && Categories.map(item => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}  

export default App;
