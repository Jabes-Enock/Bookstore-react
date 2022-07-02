import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

/* Hook */
import useLivroContext from "../../hooks/useLivroContext";

/* Organism */
import BookPage from '../organism/BookPage'
import BookScroll from '../organism/BookScroll'
import BookArrows from '../organism/BookArrows'

/* Style */
import './bookTemplate.css'


const BookTemplate = () => {

    const [book, setBook] = useState([])
    const [pages, setPages] = useState([])
    const { books } = useLivroContext();
    const title = useParams()

    const bookData = books.filter( item => item.title === title.name) 
    
    useEffect(() => {
        const getBook = () => setBook(bookData)
        getBook()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])

    useEffect(() => {
        const getPages = () => setPages(bookData[0].pages)
        getPages()
    } , [pages, bookData])


    const changeSlide = (pageNumber) => {
        const page = document.getElementById(`${pageNumber}`) 
        const button = document.getElementById(`button-select-page-${pageNumber}`) 
        const allButton = document.querySelectorAll('.button-select-page') 
        const bookTemplateScroll = document.querySelector('.book-scroll') 
        const bookTemplatePage = document.querySelector('.book-page') 
        
        allButton.forEach( item => item.classList.remove('active'))
        button.classList.add('active') 

        const leftDistancePage = page.offsetLeft 
        const topDistanceButton = button.offsetTop
        /* valor do primeiro topDistanceButton que aparece condole.log(topDistanceButton). serve para ajustar o botão selecionado na altura correta em relação ao topo da div que armazena esses botões (bookTemplateScroll)*/
        const correctionvValueForHeight = 217 
        
        bookTemplatePage.scrollLeft = leftDistancePage
        bookTemplateScroll.scrollTop = (topDistanceButton - correctionvValueForHeight )
    }

    const handleActivePageToRead = (number) => {
        changeSlide(number)
    } 
 
    const handleChangePage = (id) => {
        const active = document.querySelector('.button-select-page.active').getAttribute('id') 
        const regEx = /\D/gi
        let idNumber = active.replace(regEx, '')

        if( id === 'previousPage') {
            idNumber =  Number(idNumber) === 1 
                ? Number(idNumber) 
                :(Number(idNumber) - 1) 
        }
        else{
            idNumber =  Number(idNumber) === pages.length
                ? Number(idNumber) 
                :(Number(idNumber) + 1)
        }

        handleActivePageToRead((idNumber))
        
    }

    const Template = () => {

        if( book.length > 0 ) {
            return (
                <div className='book-template'>
                    <h1 className='book-template-title'>{title.name}</h1>
                    <BookScroll handleFunction = { handleActivePageToRead } />
                    <BookPage />
                    <BookArrows handleFunction = { handleChangePage } />
                </div>
            )
        }
    }

    return(
        <div>
            { <Template /> }
        </div>
    )
}

export default BookTemplate