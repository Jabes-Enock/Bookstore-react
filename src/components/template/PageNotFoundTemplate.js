/* Image */
import pageNotFound from '../../assets/img/404.svg'

/* style */
import './pageNotFoundTemplate.css'


const PageNotFoundTemplate = () => {

  return (
    <div className='page-not-found'>
      <div>
        <img src={pageNotFound} alt="imagem mostrando erro 404" />
        <h2 className='page-not-found-h2'>A página que você está procurando não existe ou foi removida.<br/>Por favor selecione umas das páginas exibida no menu acima.</h2>
      </div>
    </div>
  )
}

export default PageNotFoundTemplate