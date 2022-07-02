import './coverBook.css'

const CoverBook = ({item}) => {
    return(
        <img className='cover-book-img' src={item} alt="Capa do livro" />
    )
}

export default CoverBook