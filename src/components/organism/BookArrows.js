import './bookArrows.css'

const BookArrows = ({ handleFunction } ) => {
  return (
    <div className='book-arrows'>
      <button onClick={(e) => handleFunction(e.target.id) } id='previousPage' >&#8701;</button>
      <button onClick={(e) => handleFunction(e.target.id) } id='nextPage'>&#8702;</button>
    </div>
  )
}

export default BookArrows