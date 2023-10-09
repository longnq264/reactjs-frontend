  import { useState } from "react";
  import { Link } from "react-router-dom";
  import PropTypes from 'prop-types';

  const FooterListItem = ({title, items}) => {
      const [clicked, setClicked] = useState(false)

      const handleClick = () => {
          setClicked(!clicked)
      }
    return (
      <div>
        <div className="list-title">
                  <div className="list-title-mobile">
                    <h2>{title}</h2>
                      <button className="icon" 
                        onClick={handleClick}
                      >
                        <span className="material-symbols-outlined">expand_more</span>
                      </button>
                  </div>
                  {/* btn */}
                  <ul
                    className={`btn-menu list-col-first`}
                    style={{display: clicked ? 'block' : 'none'}}  
                  >
                      {items.map((item, index) => (
                              <li key={index}>
                                  <Link to={"#"}>
                                      {item}
                                  </Link>
                              </li>
                          ))}
                  </ul>
                </div>
      </div>
    )
  }
  FooterListItem.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
  }
  export default FooterListItem
