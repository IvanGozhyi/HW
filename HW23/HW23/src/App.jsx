import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from "./pages/ErrorPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import ListPage from "./pages/ListPage.jsx";
import ToDoPage from "./pages/ToDoPage.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {


  return (
    <>
        <BrowserRouter>
            <div>
                        <Header />
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/todo/list" element={<ListPage />} />
                            <Route path="/todo/create" element={<ToDoPage />} />
                            <Route path="*" element={<ErrorPage />} />
                        </Routes>
                        <Footer />
            </div>
        </BrowserRouter>
    </>
  )
}

export default App
