import React from "react";
import './index.scss'

function Navbar(){
    const navigation = {
        categories: [
          {
            id: 'weapons',
            name: 'Weapons',
            featured: [
              {
                name: 'New Arrivals',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              },
              {
                name: 'Top Rated',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
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

    return (
        <div className="navbar-container">
            <div className='top-navbar'>
              <span>
                Logo
              </span>

              <input className='navbar-search' type='text' />
              <button className='navbar-submit' type="submit">
                🔍
              </button>

                
                

              <span>
                Cart
              </span>
            </div>
            <div className='bottom-navbar'>
            {navigation.categories.map((category)=> {
                return <span>{category.name}</span>
            })}
            </div>
        </div>
    )
}

export default Navbar
