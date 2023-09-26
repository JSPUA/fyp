import React, { useState } from 'react';

function CharacterInput() {
  const [textValue, setTextValue] = useState('');

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <div>
      <label>Character Input:</label>
      <input
        type="text"
        value={textValue}
        onChange={handleTextChange}
      />
      <p>You entered: {textValue}</p>
    </div>
  );
}

export default CharacterInput;
