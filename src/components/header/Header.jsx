import img from '../../img/Clarusway.png'
import './Header.css'


const Header = () => {
  return (
    <header>
      <nav className="">
        <img className='w-25 p-2' src={img} alt="" />
      </nav>
      <h1 className='header-h1 text-center '>Lesson Reminder</h1>
    </header>
  );
};

export default Header;
