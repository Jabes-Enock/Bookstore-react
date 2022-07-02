import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

/* Hook */
import useLivroContext from '../../hooks/useLivroContext'

/* Atoms */
import CoverBook from '../atoms/CoverBook'

/* Style */
import './infoBookTemplate.css'

const InfoBookTemplate = () => {
  const [book, setBook] = useState([])
  const { books } = useLivroContext()
  const { params } = useParams()

  useEffect(() => {
     const getBook = () => {
        const bookData = books.filter( item => item.id === Number(params)) 
        setBook(bookData)
      }
    getBook()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [])


  const BookInfoTemplate = () => {

    if( book.length > 0) {
      return(
        <div className='bookInfo'>
          <div className='bookInfo-1'>
             <div className='bookInfo-cover'>
              <CoverBook item={book[0].cover}/>
            </div>
          </div>

          <div className='bookInfo-2'>
            <div className='bookInfo-title'>{book[0].title}</div>
            <div className='bookInfo-description' dangerouslySetInnerHTML={{ __html: book[0].description }}></div>
            <div className='bookInfo-categories'>
              {
                (book[0].categories).map( category => (
                  <div key={ category.id} className='category' > { category.name } </div>
                ))
              } 
            </div>
          </div>
          <Link className='bookInfo-3 bookInfo-read-book' to={`/book/${book[0].title}`}> Ler Livro </Link>
         
          <div className='bookInfo-4'>
            <div className='bookInfo-movie-release'>
              <div>Lançamento:</div>
              <div>{book[0].releaseDate}</div>
              
            </div>
          </div>
          <div className='bookInfo-4'>
            <div className='bookInfo-author'>
            <div>Autor:</div>
              <div>{book[0].author}</div>
              
            </div>
          </div>
           
        </div>
      )
    }
    
  }

  return (
    <div>
      { <BookInfoTemplate /> }
    </div>
  )
}

export default InfoBookTemplate