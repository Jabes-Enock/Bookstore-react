import { Link } from 'react-router-dom'

/* Hooks */
import useLivroContext from '../../hooks/useLivroContext'

/* Atoms */
import CoverBook from '../atoms/CoverBook'
import Title from '../atoms/Title'
import AuthorName from '../atoms/Author'

/* Style */
import './bookList.css'

const BookList = () => {

    const { books } = useLivroContext()

    return (
        <div className='book-list'>
            {
            books.map( book => (
                <Link key={book.id} to={`/detail/${book.id}`}>
                    <CoverBook item={book.cover}/>
                    <Title item={book.title}/>
                    <AuthorName item={book.author} />
                </Link>
            
            )) 
            
            }
        </div>
    )
}

export default BookList