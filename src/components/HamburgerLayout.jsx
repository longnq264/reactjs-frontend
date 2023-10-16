import logo from "../assets/img/logo.png";
import PropTypes from 'prop-types';
const HamburgerLayout = ({isOpen, onClose}) => {
  const menuStyle = {
    width: isOpen ? '100%' : '0',
    transition: '0.5s'
  };
  return (
    <div className={`slide-in-menu ${isOpen ? 'open' : ''}`}>
      <div className='flex layout-content-menu' style={menuStyle}>
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
