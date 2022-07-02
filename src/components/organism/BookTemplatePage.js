import useLivroContext from "../../hooks/useLivroContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

/* Style */
import './bookTemplatePage.css'

/* Component */
import PageSelelectActive from "../atoms/PageSelelectActive";

const BookTemplatePage = () => {

    const [pages, setPages] = useState([]) 
    const { books } = useLivroContext();
    const title = useParams();
    const bookData = books.filter((item) => item.title === title.name);
    

    useEffect(() => {
        const getPages = () => setPages(bookData[0].pages)
        getPages()
    } , [pages])

    return (
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
    )
}

export default BookTemplatePage