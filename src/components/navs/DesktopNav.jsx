import logoImg from '../../assets/img/distinct-logo-1.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navStructure = [
  {
    label: 'About',
    subItems: [
      { to: '/why', label: 'Why Distinct?' },
      { to: '/who-we-are', label: 'Who we are?' },
    ],
  },
  {
    label: 'Services',
    subItems: [
      { to: '/marketing', label: 'Marketing' },
      { to: '/branding', label: 'Branding' },
      { to: '/design', label: 'Design' },
      { to: '/business', label: 'Business' },
    ],
  },
  {
    label: 'Our Work',
    subItems: [
      { to: '/portfolio', label: 'Portfolio' },
      { to: '/case-study', label: 'Case Study' },
      { to: '/clients', label: 'Our Clients' },
    ],
  },
  {
    label: 'Contact',
    subItems: [],
    to: '/kontakt',
  },
];

const DesktopNav = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [shouldShowOverlay, setShouldShowOverlay] = useState(false);

  useEffect(() => {
  if (activeIndex !== null) {
    setShouldShowOverlay(true);
  } else {
    const timeout = setTimeout(() => {
      setShouldShowOverlay(false);
    }, 400); // isto kao trajanje fadeOut animacije
    return () => clearTimeout(timeout);
  }
}, [activeIndex]);

  return (
    <nav className="desktop-nav" onMouseLeave={() => setActiveIndex(null)}>
      <div className="logo-box">
        <img src={logoImg} alt="distinct logo" />
      </div>

      <ul className="menu-items">
        {navStructure.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            {item.to ? (
              <Link to={item.to} className="menu-label">{item.label}</Link>
            ) : (
              <span className="menu-label">{item.label}</span>
            )}

            {item.subItems.length > 0 && (
              <ul className={`submenu-list ${activeIndex === index ? 'visible' : ''}`}>
                {item.subItems.map((sub, i) => (
                      <li
                        key={i}
                        style={{
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: '0.5s',
                            animationName: 'slideInLeft',
                            animationFillMode: 'forwards',
                            animationTimingFunction: 'ease',
                            opacity: 0,
                        }}
                        >
                    <Link to={sub.to} className="submenu-link">{sub.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

        {shouldShowOverlay && (
        <div
            className={`submenu-overlay ${
            activeIndex !== null ? 'fade-in' : 'fade-out'
            }`}
        ></div>
        )}
    </nav>
  );
};

export default DesktopNav;
