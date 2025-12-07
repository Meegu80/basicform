import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import Detail from "./pages/Detail.tsx";
import Search from "./pages/Search.tsx";
import GlobalStyle from "./styles.ts";

function App() {
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/detail/:id" element={<Detail/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;