import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css' 
import Card from './Components/Card'
import './Hero.css'
import book_banner from './image/book_banner.svg'
import user_interface from './image/user_interface.svg'
import book_lover from './image/book_lover.svg'
import book from './image/book.jpg'

const Hero = () => {
  useEffect(() => {
    Aos.init({duration: 2000 });
  }, [])
  return (
    <div className='hero'>
        <div data-aos="fade-right" className='banner grid-2'>
          <div className="column-1">
            <h1 className='title-banner'>Book-us</h1>
            <p className='text'>
              All the Book you need with from a single website
            <br />
              Easier to find, from all kind of genres of book
            </p>
          </div>

          <div className="column-2 image">
            <div className="banner-img">
              <img 
                src={book_banner} 
                alt="" />
            </div>
          </div>
        </div>

      <div data-aos="fade-up" className="content">
        <h3 className="title">Varities of Books</h3>
        <div className="wrapper">
            <Card 
            img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348641512l/511403.jpg"
            title="The Lord"
            />   

            <Card 
            img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1409595968l/929.jpg"
            title="Memoirs of Geisha"
            />  

            <Card 
            img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1622355533l/4667024._SY475_.jpg"
            title="The Help"
            />  

            <Card 
            img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457810586l/12232938.jpg"
            title="The Lovely Bones"
            /> 

            <Card 
            img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554086139l/19288043.jpg"
            title="Gone Girl"
            />

            <Card 
            img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1632632557l/11870085.jpg"
            title="The Fault In Our Stars"
            />  

            <Card 
            img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1341952742l/15745753.jpg"
            title="Eleanor and Park"
            /> 

            <Card 
            img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1357177533l/13623848._SY475_.jpg"
            title="The Song of Achilles"
            />    
        </div>   
      </div>

    <div data-aos="fade-left" className="provide_container">
      <div className="provide">
        <h3 className='h3__provide'> What We Provide </h3>
        <p className='provide__text'> Simplistic and easy to navigate website with interesting books <br /> 
        that you may want to read. We'll keep updating more books <br /> 
        from all kind of genres. </p> 
        <img 
        className='book'
        src={book} alt="" />  
      </div>
    </div>

    <div data-aos="fade-down" className="why_container">
      <div className="why">
        <h3 className='h3_why'> Why here </h3>
        <p className="why_text"> Simple Navigation site that is easily to navigate around, no bloat menu, minimalistic and sleek design making you comfortable while browsing here. </p>
      </div>
      <img src={user_interface} 
      alt=""
      className='user_interface_img' 
      />
      <img src={book_lover} 
      alt=""
      className='book_lover_img' />
    </div>

    
    </div>
  )
}

export default Hero