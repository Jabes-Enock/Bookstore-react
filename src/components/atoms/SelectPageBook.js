import Page from '../../assets/img/page.svg'

import './selectPageBook.css'

const SelectPageBook = ({page}) => {
  return (
    <div className='select-page-book'> 
      <div className='select-page-book-page'>
        <img className='select-page-book-page-img' src={Page} alt="" />
        <div>{ page }</div>
      </div>
    </div>
  )
}

export default SelectPageBook