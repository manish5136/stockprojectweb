import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../App.css';



function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('123');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      login();
      navigate('/marketPulse', { state: { username } });
    } else {
      alert('Please enter your username and password.');
    }
  };

  return (
    <section className="bs vh-100 ant-custom-container">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="data:image/jpeg;base64,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"
              className="img-fluid"
              width='100%'
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-outline mb-4 ant-form-item" >
                <Input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  addonBefore={<UserOutlined className="site-form-item-icon" /> }
                  
                />
              </div>

              <div className="form-outline mb-3 ant-form-item">
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  addonBefore={<LockOutlined className="site-form-item-icon" />}
                />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <Button
                  type="button"
                  id="login-button"
                  className="btn btn-primary btn-lg ant-btn ant-btn-lg"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
