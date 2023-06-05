import React, { useState } from 'react';
import FormAddClient from '../Components/FormAddClient/FormAddClient';
import { SmallData } from '../App/types';
import './AddClientButton.css';

function AddClientButton({
  addClient,
  maxIdNum,
}: {
  addClient: (client: SmallData) => void;
  maxIdNum: number;
}): JSX.Element {
  const [buttonClicked, setButtonClicked] = useState(false);

  const buttonHandler = (): void => {
    setButtonClicked((prev) => !prev);
  };

  return (
    <div>
      <div className='addClientBtnContainer'>
      <button type="button" className='addClientBtn' onClick={buttonHandler}>
        Добавить нового клиента
      </button>
      </div>
      {buttonClicked && <FormAddClient addClient={addClient} maxIdNum={maxIdNum} />}
    </div>
  );
}

export default AddClientButton;
