import React from 'react';
import './LoginPage.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'; 

const LoginPage = () => {
  return (
    // Here I craeted the login page with simple form 
    // Ref: https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fhot-dogs--633952085042219368%2F&psig=AOvVaw1fMJfPrN5ggET9LDk2BQUx&ust=1716947443537000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjqkP6dr4YDFQAAAAAdAAAAABAE
    <div className="login-page" style={{ backgroundImage: `url(${assets.login})` }}>   
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="role">Role</label>
            <select id="role" name="role">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
