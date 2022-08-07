import React, {useState} from "react";
import Dropdown from "../Dropdown/Dropdown";
import './index.scss'
import search from '../../images/search.png'
import cart from '../../images/cart.png'
import 'animate.css'

function Navbar(){
  const [navbarIsSelected, setNavbarIsSelected] = useState(null)

  const navigation = {
    categories: [
      {
        id: 'weapons',
        name: 'Weapons',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: '',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Top Rated',
            href: '#',
            imageSrc: '',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'one handed',
            name: 'One Handed',
            items: [
              { name: 'Swords', href: '#' },
              { name: 'Clubs', href: '#' },
              { name: 'Boomerangs', href: '#' },
              { name: 'Other', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'two handed',
            name: 'Two Handed',
            items: [
              { name: 'Swords', href: '#' },
              { name: 'Clubs', href: '#' },
              { name: 'Boomerangs', href: '#' },
              { name: 'Spears', href: '#' },
              { name: 'Other', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'bows',
            name: 'Bows',
            items: [
              { name: 'Bows', href: '#' },
              { name: 'Arrows', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
        ],
      },
      {
        id: 'armor',
        name: 'Armor',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: '',
            imageAlt: '',
          },
          {
            name: 'Top Rated',
            href: '#',
            imageSrc: '',
            imageAlt: '',
          },
        ],
        sections: [
          {
            id: 'top wear',
            name: 'Top Wear',
            items: [
              { name: 'Armor', href: '#' },
              { name: 'Tunics', href: '#' },
              { name: 'Shirts', href: '#' },
              { name: 'Other', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'bottom wear',
            name: 'Bottom Wear',
            items: [
              { name: 'Greaves', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Other', href: '#' },
            ],
          },
          {
            id: 'head wear',
            name: 'Head Wear',
            items: [
              { name: 'Helms', href: '#' },
              { name: 'Caps', href: '#' },
              { name: 'Earrings', href: '#' },
              { name: 'Other', href: '#' },
            ],
          },
        ],
      },
      {
        id: 'shields',
        name: 'Shields',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: '',
            imageAlt: '',
          },
          {
            name: 'Top Rated',
            href: '#',
            imageSrc: '',
            imageAlt: '',
          },
        ],
        sections: [
          {
            id: 'material',
            name: 'Material',
            items: [
              { name: 'Metal', href: '#' },
              { name: 'Wooden', href: '#' },
              { name: 'Ancient', href: '#' },
              { name: 'Other', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', href: '#' },
      { name: 'Stores', href: '#' },
    ],
  }

  function handleNavbarClick(e){
      if (navbarIsSelected === e.target.id){
        let target = document.getElementById('drop-down-container')
        target.className = "animate__animated animate__fadeOutUp animate__fast"
        setTimeout(()=>{
          setNavbarIsSelected(null)
        }, 500)
      } else {
        if (e.target.id === 'weapons' || e.target.id === 'armor' || e.target.id === 'shields'){
          setNavbarIsSelected(e.target.id)
          setTimeout(()=>{
            let target = document.getElementById('drop-down-container')
            target.className = "animate__animated animate__fadeInDown"
          }, 0)
        } else {
          let target = document.getElementById('drop-down-container')
          target.className = "animate__animated animate__fadeOutUp animate__fast"
          setTimeout(()=>{
            setNavbarIsSelected(null)
          }, 500)
        } 
      }
    }

  return (
    <div className="navbar-container">
      <div className='top-navbar'>
        <span id='navbar-logo' onClick={handleNavbarClick}>
          Logo
        </span>
        <div className='navbar-search-container'>
        <input className='navbar-search' type='text' />
          <img className='navbar-submit' src={search} type="submit"/> 
        </div>
        <span id='navbar-cart' onClick={handleNavbarClick}>
          Cart
        </span>
      </div>
      <div className='bottom-navbar'>
        {navigation.categories.map((category)=> {
          return <span key={category.id} id={category.id} onClick={handleNavbarClick}>{category.name}</span>
        })}
      </div>
      <div>
        {navbarIsSelected ? 
        <Dropdown navigation={navigation} navbarIsSelected={navbarIsSelected}/> : null}
      </div>
    </div>
  )
}

export default Navbar
