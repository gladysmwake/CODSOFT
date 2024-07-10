import React from 'react';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-box">
        <h2 style={{ color: 'white' }}>LOG-IN</h2>
        {/* Add your login form here */}
        <button className="button" onClick={() => window.location.href = 'home.html'}>
          <span className="X"></span>
          <span className="Y"></span>
          <div className="close">Close</div>
        </button>
      </div>
    );
  }
}

export default LoginPage;
