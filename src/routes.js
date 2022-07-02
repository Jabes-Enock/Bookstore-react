import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* pages */
import Home from './pages/Home'
import About from './pages/About'
import InfoBook from './pages/InfoBook'
import Book from './pages/Book'
import PageNotFound from './pages/PageNotFound'

/* molecules */
import Navigation from './components/molecules/Navigation'

const routes = () => {
    return(
        <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path='/' element = { <Home /> }/>
            <Route path='/about' element = { <About /> }/>
            <Route path='/detail/:params' element = { <InfoBook /> }/>
            <Route path='/book/:name' element = { <Book /> }/>
            
            <Route path='*' element = { <PageNotFound /> }/>
        </Routes>
        </BrowserRouter>
    )
}

export default routes