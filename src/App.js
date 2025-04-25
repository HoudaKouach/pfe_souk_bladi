// import Login from './pages/PageLogin';
// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }

// export default App;
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/PageLogin';
import Signup from './pages/PageSign';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
