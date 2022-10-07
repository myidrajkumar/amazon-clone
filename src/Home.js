import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://m.media-amazon.com/images/I/715yEZfy6PL._SX3000_.jpg'
          alt='No '
        />

        <div className='home__row'>
          <Product
            id={1}
            title='The Lean Startup'
            price={29.9}
            image='https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_QL65_.jpg'
            rating={5}
          />
          <Product
            id={2}
            title='The Psychology of Money'
            price={219}
            image='https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_QL65_.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id={3}
            title='You Can'
            price={9}
            image='https://m.media-amazon.com/images/I/813uPMOnskL._AC_UY327_QL65_.jpg'
            rating={4}
          />
          <Product
            id={4}
            title='The Intelligent Investor'
            price={14}
            image='https://m.media-amazon.com/images/I/91+t0Di07FL._AC_UY327_QL65_.jpg'
            rating={3}
          />
          <Product
            id={5}
            title='Who Will Cry When You Die?'
            price={18.9}
            image='https://m.media-amazon.com/images/I/41wKll7ITyL._AC_UY327_QL65_.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id={6}
            title='The Richest Man in Babylon'
            price={20}
            image='https://m.media-amazon.com/images/I/81NYuWzsJcS._AC_UY327_QL65_.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
