/* Organism */
import BookList from '../organism/BookList'

/* style */
import './homeTemplate.css'

const HomeTemplate = () => {
  return (
    <div >
      <p className='home-template-h1'>Bem-vindo ao <b>iBook</b></p>
      <div className='home-template-title'>Lançamentos</div>
      <BookList />
    </div>
  )
}

export default HomeTemplate