import useLivroContext from "../../hooks/useLivroContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

/* Style */
import './bookTemplateScroll.css'

/* Component */
import SelectPageBook from "../atoms/SelectPageBook";

const BookTemplateScroll = () => {
    
    const [pages, setPages] = useState([]) 
    const { books } = useLivroContext();
    const title = useParams();
    const bookData = books.filter((item) => item.title === title.name);
    

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

    return (
       <div>
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
       </div>
    )
}

export default BookTemplateScroll;
