import './App.css'
import BookHome from "./Components/BookHome.jsx";
import NavBar from "../../../InClass9_16/Books4U_9_14/src/Components/NavBar";

function About() {
    ;
}

function Route(props) {
    return null;
}

function Routes(props) {
    return null;
}

function App() {
    return (
        <>
            <h2> Books 4 U </h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h2>Now on Sale</h2>
                    </div>
                </div>
                <div className='col-md-6'>
                    <h2>Right is right</h2>
                    <Routes>
                        <Route path='/' element={<BookHome />}>
                        <Route path='/' element={<About />}>

                        </Route>

                        </Route>
                    </Routes>
                </div>
            </div>

        </>
    )
}

export default App
