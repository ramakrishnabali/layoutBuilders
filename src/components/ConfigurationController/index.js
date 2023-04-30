// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeContent = () => {
        onToggleShowContent()
      }

      const changeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const changeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="controller-container">
          <h1 className="controller-heading">Layout</h1>
          <div className="input-container">
            <input
              onChange={changeContent}
              className="input"
              type="checkbox"
              id="content"
            />
            <label className="label" htmlFor="content">
              Content
            </label>
          </div>

          <div>
            <input
              onChange={changeLeftNavbar}
              className="input"
              type="checkbox"
              id="leftBar"
            />
            <label className="label" htmlFor="leftBar">
              Left Navbar
            </label>
          </div>

          <div>
            <input
              onChange={changeRightNavbar}
              className="input"
              type="checkbox"
              id="rightBar"
            />
            <label className="label" htmlFor="rightBar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
