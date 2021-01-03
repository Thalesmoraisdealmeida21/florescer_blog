import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

import './global.css';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
        style={{
          background: '#18a0fb'
        }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '100px', width: '300px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start" style={{
              marginLeft: 'auto',

            }}>
              <Link className="navbar-item-custom" style={{ color: 'white' }} to="/about">
                Sobre-nós
              </Link>
              <a className="navbar-item-custom" style={{ color: 'white' }} href="https://app.florescereducacao.com.br/buy-speeches">
                Palestras
              </a>
              <Link className="navbar-item-custom" style={{ color: 'white' }} to="/blog">
                Blog
              </Link>
              <Link className="navbar-item-custom" style={{ color: 'white' }} to="/contact">
                Contato
              </Link>
              <Link className="navbar-item-custom" style={{ color: 'white' }} to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <span className="icon">
                  <img src={github} alt="Github" />
                </span> */}
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
