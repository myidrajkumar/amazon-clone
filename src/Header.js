import { SearchRounded } from '@mui/icons-material';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img
        className='header__logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt=''
      />

      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchRounded className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Guest!</span>
          <span className='header__optionLineTwo'>SignIn</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
        <div className='header__optionBasket'>
          <ShoppingBasketRoundedIcon />
          <span className='header__optionLineTwo header__basketCount'>0</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
