import React, { useState } from 'react';
import './LoginSignup.css';
import email_icon from '../assets/email.png';
import person_icon from '../assets/person.png';
import password_icon from '../assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Login');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    // Validate confirm password
    if (newConfirmPassword !== password) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setConfirmPasswordError('');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Login' ? null : (
          <div className="input">
            <img src={person_icon} alt="" />
            <input type="text" placeholder="성함" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="이메일" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        {action === 'Login' ? null : (
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {confirmPasswordError && <div className="error">{confirmPasswordError}</div>}
          </div>
        )}
      </div>
      {action === 'Sign Up' ? null : (
        <div className="forgot-password">
          비밀번호 잊으셨나요? <span>여기 클릭!</span>
        </div>
      )}

      <div className="submit-container">
        <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => setAction('Sign Up')}>
          회원가입
        </div>
        <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => setAction('Login')}>
          로그인
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
