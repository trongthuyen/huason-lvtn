import './style.css';
import { CloseOutlined, MenuOutlined, HomeOutlined, IdcardOutlined, PhoneOutlined, TeamOutlined, LoginOutlined, UserAddOutlined, UploadOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const navListRef = useRef();
  const [navItems, setNavItems] = useState([]);
  const [selectedNavItem, setSelectedNavItem] = useState(0);
  const [showCloseBtn, setShowCloseBtn] = useState(false);
  const [user, setUser] = useState({
    id: '',
    username: '',
  })
  const [shapeStyle, setShapeStyle] = useState({
    width: 0,
    left: 0,
    right: 'unset',
    marginRight: 'unset',
  });
  const [shapeStyleMobile, setShapeStyleMobile] = useState({
    top: 16,
  });
  const [propertyList, setPropertyList] = useState([]);

  const handleOpenMenu = () => {
    setShowCloseBtn(!showCloseBtn);
    navListRef.current.classList.toggle('active')
  }

  const handleClickNavItem = (event, index) => {
    event.preventDefault();
    navItems[selectedNavItem].classList.remove('active');
    navItems[index].classList.add('active');
    if(navItems[index]?.className.includes('sub-nav-list')) {
      document.querySelector('.sub-menu').classList.toggle('active');
    } else {
      document.querySelector('.sub-menu').classList.remove('active');
    }
    if(index < 4) {
      setShapeStyle((prev) => ({
        ...prev,
        width: navItems[index].clientWidth,
        left: navItems.reduce((shapeWidth, item, idx) => {
          if(idx < index) {
            return shapeWidth + item.clientWidth;
          } else return shapeWidth;
        }, 150),
        right: 'auto',
      }));
    } else {
      setShapeStyle((prev) => ({
        ...prev,
        width: navItems[index].clientWidth,
        right: navItems.reduce((shapeWidth, item, idx) => {
          if(idx > index) {
            return shapeWidth + item.clientWidth;
          } else return shapeWidth;
        }, 0),
        left: 'auto',
        marginRight: -30,
      }));
    }
    setShapeStyleMobile((prev) => ({
      ...prev,
      top: navItems.reduce((shapeHeight, item, idx) => {
        if(idx < index) {
          return shapeHeight + item?.clientHeight || 0;
        } else return shapeHeight;
      }, 16)
    }));
    setSelectedNavItem(index);
  }

  useEffect(() => {
    const refs = [...document.querySelectorAll('.nav-item')];
    refs[selectedNavItem].classList.add('active');
    setNavItems(refs);
    setShapeStyle((prev) => ({
      ...prev,
      width: refs[selectedNavItem]?.clientWidth || 0,
      left: refs.reduce((shapeWidth, item, idx) => {
        if(idx < selectedNavItem) {
          return shapeWidth + item?.clientWidth || 0;
        } else return shapeWidth;
      }, 150)
    }));
    setShapeStyleMobile((prev) => ({
      ...prev,
      top: refs.reduce((shapeHeight, item, idx) => {
        if(idx < selectedNavItem) {
          return shapeHeight + item?.clientHeight || 0;
        } else return shapeHeight;
      }, 16)
    }));
  }, [])

  useEffect(() => {
    setPropertyList([
      {
        propertyId: 0,
        name: 'Property A',
      },
      {
        propertyId: 1,
        name: 'Property B',
      },
      {
        propertyId: 2,
        name: 'Property C',
      },
    ]);
  }, [])
  
  useEffect(() => {
    setUser({
      id: 'abc',
      username: 'Do Do',
    })
  }, [])

  return (
    <nav className='nav' id='nav'>
      <div className='logo'>
        <HomeOutlined />
      </div>
      {/* mobile */}
      <div className='menu-mobile'>
        <MenuOutlined className='menu-icon' style={{display: showCloseBtn ? 'none' : 'unset'}} onClick={handleOpenMenu} />
        <CloseOutlined className='menu-icon' style={{display: !showCloseBtn ? 'none' : 'unset'}} onClick={handleOpenMenu} />
      </div>

      <div className='shape-box' style={shapeStyle}>
        <div className='shape'></div>
      </div>
      <div ref={navListRef} className='nav-list'>
        <div className='shape-mobile' style={shapeStyleMobile}></div>
        <div className='nav-group'>
          <div className='nav-item sub-nav-list'>
            <a onClick={e => handleClickNavItem(e, 0)} className='nav-link'>
              <HomeOutlined className='nav-icon' />
              <span className='nav-text'>Nhà cho thuê</span>
            </a>
            <div className='sub-menu'>
              {propertyList.map((property, idx) => (
                <p key={property?.propertyId ?? idx} className='sub-menu-item'>
                  <a onClick={e => e.preventDefault()} className='sub-menu-item-link'>{property?.name}</a>
                </p>
              ))}
            </div>
          </div>
          <div className='nav-item'>
            <a onClick={e => handleClickNavItem(e, 1)} className='nav-link'>
              <IdcardOutlined className='nav-icon' />
              <span className='nav-text'>Giới thiệu</span>
            </a>
          </div>
          <div className='nav-item'>
            <a onClick={e => handleClickNavItem(e, 2)} className='nav-link'>
              <PhoneOutlined className='nav-icon' />
              <span className='nav-text'>Liên hệ</span>
            </a>
          </div>
          <div className='nav-item'>
            <a onClick={e => handleClickNavItem(e, 3)} className='nav-link'>
              <TeamOutlined className='nav-icon' />
              <span className='nav-text'>Thành viên nhóm</span>
            </a>
          </div>
        </div>
        {user.id ?
          <div className='nav-group'>
            <div className='nav-item'>
              <a onClick={e => handleClickNavItem(e, 4)} className='nav-link'>
                <UserAddOutlined className='nav-icon' />
                <span className='nav-text'>{user.username}</span>
              </a>
            </div>
            <div className='nav-item'>
              <a onClick={e => handleClickNavItem(e, 5)} className='nav-link'>
                <LoginOutlined className='nav-icon' />
                <span className='nav-text'>Đăng xuất</span>
              </a>
            </div>
            <div className='nav-item'>
              <a onClick={e => handleClickNavItem(e, 6)} className='nav-link'>
                <UploadOutlined className='nav-icon' />
                <span className='nav-text'>Đăng tin</span>
              </a>
            </div>
          </div> :
          <div className='nav-group'>
            <div className='nav-item'>
              <a onClick={e => handleClickNavItem(e, 4)} className='nav-link'>
                <UserAddOutlined className='nav-icon' />
                <span className='nav-text'>Đăng ký</span>
              </a>
            </div>
            <div className='nav-item'>
              <a onClick={e => handleClickNavItem(e, 5)} className='nav-link'>
                <LoginOutlined className='nav-icon' />
                <span className='nav-text'>Đăng nhập</span>
              </a>
            </div>
            <div className='nav-item'>
              <a onClick={e => handleClickNavItem(e, 6)} className='nav-link'>
                <UploadOutlined className='nav-icon' />
                <span className='nav-text'>Đăng tin</span>
              </a>
            </div>
          </div>
        }
      </div>
    </nav>
  )
};

export default Navbar;