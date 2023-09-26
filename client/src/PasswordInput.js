import React, { useState } from 'react';

function PasswordInput() {
  const [passwordValue, setPasswordValue] = useState('');

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  return (
    <div>
      <label>Password Input:</label>
      <input
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
      />
      <p>You entered: {passwordValue}</p>
    </div>
  );
}

export default PasswordInput;
