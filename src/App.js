import {Landing,Dashboard,Error,Register} from './Pages'
import { BrowserRouter, Routes,Route} from 'react-router-dom'


// const Button1=styled.button`
// background: red;
// font-size: 1rem;
// `
// const ButtonSecond=styled.button`
// background: blue;
// font-size: 1rem;
// `
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<Dashboard/>} />
    <Route  path="/Landing" element={<Landing/>} />
    <Route  path="/Register" element={<Register/>} />
    <Route  path="*" element={<Error/>} />
    </Routes>
    </BrowserRouter>

    // <div>
    //   <Landing/>
    //  </div>
  );
}

export default App;
