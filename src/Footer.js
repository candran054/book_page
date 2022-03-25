import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="main-container">
        <div className="content-wrap">
            <div className='main-footer'>
                <div className="container">
                    <div className="row">
                        {/* column 1  */}
                        <div className="col">
                            <h4>Candra Hisardo Nababan</h4>
                            <ul className='list-unstyled'>
                                <li>085156602453</li>
                                <li>Indonesia, Medan</li>
                                <li>Kamboja Raya, Helvetia Tengah</li>
                            </ul>
                        </div>
                        {/* column 2 */}
                        <div className="col">
                            <h4>Stuff</h4>
                            <ul className='list-unstyled'>
                                <li> Personal Project </li>
                                <li> React Website </li>
                            </ul>
                        </div>
                        {/* column 2 */}
                        <div className="col">
                            <h4>Website</h4>
                            <ul className='list-unstyled'>
                                <li> React </li>
                                <li> Flutter </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row-sm">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} | Front End Dev | All right reserved | 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer