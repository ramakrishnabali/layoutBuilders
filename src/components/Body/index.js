// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-container">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul>
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="middle-container">
              <h1 className="left-navbar-heading">Content</h1>
              <p className="item">
                Lorem ipsum dolor sit amet, consectetur adiplscing slit. Send do
                eiusmod tempor incidldunt ut labore et dolore magna alipua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="left-navbar-container">
              <h1 className="left-navbar-heading">Right Navbar</h1>
              <div className="right-container">
                <p className="item">Ad 1</p>
              </div>

              <div className="right-container">
                <p className="item">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext>
)

export default Body
