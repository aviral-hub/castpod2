'use client'

import { useState } from 'react'
import { X, MapPin, Mail, Phone } from 'lucide-react'

export function SideMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      title: 'Home',
      submenu: ['Digital Agency', 'Creative Agency', 'Marketing Agency', 'Design Agency']
    },
    { title: 'About Us', submenu: [] },
    {
      title: 'Service',
      submenu: ['Core Services', 'Services ST. Pulse', 'Services ST. Morph', 'Service Details']
    },
    {
      title: 'Blog',
      submenu: ['Blog', 'Blog Details']
    },
    {
      title: 'Pages',
      submenu: ['Portfolio', 'Team', 'FAQ Page', '404 Page']
    },
    { title: 'Contact', submenu: [] }
  ]

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Menu */}
      <aside className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <span className="bg-black text-lime-400 px-1 mr-1 font-bold">R</span>
              <span className="font-bold">redox</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="mb-8">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-black hover:text-green-700 transition-colors font-medium">
                    {item.title}
                  </a>
                  {item.submenu.length > 0 && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a href="#" className="text-gray-600 hover:text-green-700 transition-colors text-sm">
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="mb-8">
            <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition-colors">
              Let's Talk
            </button>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-black font-semibold mb-4">Contact US</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-green-700 mt-1" />
                <span className="text-gray-600 text-sm">3891 Ranchview Dr. Richardson</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-green-700 mt-1" />
                <a href="mailto:hello@redoxagency.com" className="text-gray-600 text-sm hover:text-green-700 transition-colors">
                  hello@redoxagency.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-green-700 mt-1" />
                <a href="tel:(505)555-0125" className="text-gray-600 text-sm hover:text-green-700 transition-colors">
                  (505) 555-0125
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Menu Trigger (you can place this in your header component) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-30 text-black hover:text-green-700 transition-colors"
      >
        (Browse — Menu)
      </button>
    </>
  )
}
