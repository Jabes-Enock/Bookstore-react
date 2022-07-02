import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LivroContext } from '../../contexts/livroContext'

/* Comonents */
import SelectPageBook from '../organism/SelectPageBook'
import PageSelelectActive from '../organism/PageSelelectActive'

import './bookTemplate.css'

const BookTemplate = () => {

    const [book, setBook] = useState([])
    const [pages, setPages] = useState([])



    const { books } = useContext(LivroContext)
    const title = useParams()

    const bookData = books.filter( item => item.title === title.name) 
    
    useEffect(() => {
        const getBook = () => setBook(bookData)
        getBook()
    } , [])

    useEffect(() => {
        const getPages = () => setPages(bookData[0].pages)
        getPages()
    } , [pages])


    const changeSlide = (pageNumber) => {
        const page = document.getElementById(`${pageNumber}`) 
        const button = document.getElementById(`button-select-page-${pageNumber}`) 
        const allButton = document.querySelectorAll('.button-select-page') 
        const bookTemplateScroll = document.querySelector('.BookTemplate-scroll') 
        const bookTemplatePage = document.querySelector('.BookTemplate-page') 
        
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
                <div className='BookTemplate'>
                    <h1 className='BookTemplate-title'>{title.name}</h1>
                    <div className='BookTemplate-scroll' >
                        
                        {   
                            pages.map( (eachpage) => (
                                <button key = { eachpage.id } 
                                onClick={() => handleActivePageToRead(eachpage.pageNumber)}
                                id = {`button-select-page-${eachpage.pageNumber}`}
                                className={eachpage.pageNumber === 1 ? 'button-select-page active' : 'button-select-page'}   
                                >
                                  <SelectPageBook page ={eachpage.pageNumber} />  
                                </button>
                            ))
                        }
                    </div>
                    <div className='BookTemplate-page'>
                    <div className="prevent-scroll"></div> 
                        {   
                            pages.map( (eachpage, index) => (
                                <div key = { eachpage.id } 
                                className="BookTemplate-page-content" 
                                id ={ eachpage.pageNumber }>
                                    <PageSelelectActive text={eachpage.text}   />
                                    <div className="BookTemplate-page-number"> { eachpage.pageNumber }  </div>  
                                </div> 
                            ))
                        }
                    </div>
                    <div className='BookTemplate-arrows'>
                        <button onClick={(e) => handleChangePage(e.target.id) } id='previousPage' >&#8701;</button>
                        
                        <button onClick={(e) => handleChangePage(e.target.id) } id='nextPage'>&#8702;</button>
                    </div>
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