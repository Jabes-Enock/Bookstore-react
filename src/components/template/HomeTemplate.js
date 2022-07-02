import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LivroContext } from '../../contexts/livroContext'

/* componentes */
import CoverBook from '../atoms/CoverBook'

import AuthorName from '../atoms/Author'
import Title from '../atoms/Title'
/* css */
import './home.css'

const HomeTemplate = () => {

  const { books } = useContext(LivroContext)

  return (
    <div >
      <p className='home-h1'>Bem-vindo ao <b>iBook</b></p>
      <div className='home-title'>Lançamentos</div>
      <div className='home-list'>
        {
          books.map( book => (
            <Link className='home-list-item' key={book.id} to={`/detail/${book.id}`}>
              <CoverBook item={book.cover}/>
              <Title item={book.title}/>
              <AuthorName item={book.author} />
            </Link>
          
          )) 
        
        }
      </div>
      
      
    </div>
  )
}

export default HomeTemplate