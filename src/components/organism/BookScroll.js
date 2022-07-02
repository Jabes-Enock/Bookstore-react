import useLivroContext from "../../hooks/useLivroContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

/* Style */
import './bookScroll.css'
 
/* atoms */
import SelectPageBook from "../atoms/SelectPageBook";

const BookTemplateScroll = ({handleFunction}) => {
    
    const [pages, setPages] = useState([]) 
    const { books } = useLivroContext();
    const title = useParams();
    const bookData = books.filter((item) => item.title === title.name);
    

    useEffect(() => {
        const getPages = () => setPages(bookData[0].pages)
        getPages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [pages])

   
    return (
       <div>
            <div className='book-scroll' >         
                {   
                    pages.map( (eachpage) => (
                        <button key = { eachpage.id } 
                        onClick={() => handleFunction(eachpage.pageNumber)}
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
