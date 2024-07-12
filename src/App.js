import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Filters from './components/filters/filters.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Filters />} />
      </Route>


    </Routes>

  )
}

export default App;
