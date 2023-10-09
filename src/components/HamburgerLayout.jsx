import logo from "../assets/img/logo.png";
import PropTypes from 'prop-types';
const HamburgerLayout = ({isOpen, onClose}) => {
  return (
    <div className={`slide-in-menu ${isOpen ? 'open' : ''}`}>
      <div className='flex layout-content-menu'>
        <img src={logo} alt="logo" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
HamburgerLayout.propTypes = {
  isOpen: PropTypes.any,
  onClose: PropTypes.any
}
export default HamburgerLayout
