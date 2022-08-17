import { Typography, Button } from 'antd';
import React, { useState } from 'react';

const { Title } = Typography;

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    cfPassword: '',
  })

  const handleChangeInput = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='section section-auth'>
      <form onSubmit={onSubmit} className='form-auth'>
        <Title className='form-title' level={1}>Đăng ký</Title>
        <Title className='form-sub-title' level={5}>Tạo một tài khoản để tận hưởng tất cả các dịch vụ mà không có bất kỳ quảng cáo miễn phí!</Title>
        <div className='form-group'>
          <input type='text' name='username' placeholder='Họ và tên' value={formData.username} onChange={handleChangeInput} />
        </div>
        <div className='form-group'>
          <input type='email' name='email' placeholder='Địa chỉ email' value={formData.email} onChange={handleChangeInput} />
        </div>
        <div className='form-group'>
          <input type='tel' name='phone' placeholder='Số điện thoại' value={formData.phone} onChange={handleChangeInput} />
        </div>
        <div className='form-group'>
          <input type='password' name='password' placeholder='Mật khẩu' value={formData.password} onChange={handleChangeInput} />
        </div>
        <div className='form-group'>
          <input type='password' name='cfPassword' placeholder='Nhập lại mật khẩu' value={formData.cfPassword} onChange={handleChangeInput} />
        </div>
        <div className='form-group'>
          <Button type='primary' className='btn-submit'>Đăng ký</Button>
        </div>
        <a onClick={e => e.preventDefault()} className='form-link'>Về trang đăng nhập</a>
      </form>
    </div>
  )
}

export default SignupForm;