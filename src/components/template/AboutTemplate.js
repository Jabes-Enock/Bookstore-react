/* Image */
import  presentation from '../../assets/img/presentation.svg'

/* style */
import './aboutTemplate.css'

const AboutTemplate = () => {
  return (
    <div className='about-template'>
        <p className='about-template-h2'>O que é <b>iBook?</b> </p>
        <div className='about-template-grid'>
            <p className='about-template-description'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa autem repudiandae error voluptate quia ullam, similique distinctio corrupti! Minus adipisci fugiat saepe repudiandae omnis, quia labore ad temporibus dignissimos dolore, ratione quas. Placeat sunt eligendi autem repellat et at sint, deleniti doloremque temporibus animi qui voluptatum atque ab repellendus tenetur eum excepturi doloribus nobis dignissimos, nemo beatae! Aspernatur, accusantium laborum.
            </p>
            <div className='about-template-img'>
                <img src={presentation} alt="Imagem ilustrativa"/>
            </div>  
        </div>
        
    </div>
  )
}

export default AboutTemplate