import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Component/routes/routes';

function App() {
  return (
    <div >
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
