import React, { useState } from 'react';
import './FormAddClient.css';
import { SmallData } from '../../App/types';

function FormAddClient({
  addClient,
  maxIdNum,
}: {
  addClient: (client: SmallData) => void;
  maxIdNum: number;
}): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const addName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFirstName(event.target.value);
  };

  const addLastName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setLastName(event.target.value);
  };

  const addEmail: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const addPhone: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setPhone(event.target.value);
  };

  const addDescription: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setDescription(event.target.value);
  };

  const addStreetAddress: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setStreetAddress(event.target.value);
  };

  const addCity: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setCity(event.target.value);
  };

  const addState: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setState(event.target.value);
  };

  const addZip: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setZip(event.target.value);
  };

  const submitData: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    addClient({
      id: maxIdNum + 1,
      firstName,
      lastName,
      email,
      phone,
      address: { streetAddress, city, state, zip },
      description,
    });
  };

  return (
    <div>
      <h3>Введите данные нового клиента</h3>
      <p>Пожалуйста заполните все поля</p>
      <form method="post" onSubmit={submitData}>
        <fieldset>
          <label htmlFor="nameField">
            Введите имя нового клиента
            <input id="nameField" type="text" onChange={addName} value={firstName} />
          </label>
          <label htmlFor="lastNameField">
            Введите фамилию нового клиента
            <input id="lastNameField" type="text" onChange={addLastName} value={lastName} />
          </label>
          <label htmlFor="email">
            Введите адрес электронной почты нового клиента
            <input id="email" type="email" onChange={addEmail} value={email} />
          </label>
          <label htmlFor="phone">
            Введите телефон нового клиента в формате: (123)456-7890
            <input
              id="tel"
              pattern="^[(]{1}[0-9]{3}[)]{1}[0-9]{3}[-]{1}[0-9]{4}$"
              onChange={addPhone}
              value={phone}
            />
          </label>
          <label htmlFor="description">
            Введите описание нового клиента
            <input id="description" type="text" onChange={addDescription} value={description} />
          </label>
        </fieldset>
        <fieldset>
          <p>Адрес</p>
          <label htmlFor="street">
            Введите улицу нового клиента
            <input id="street" type="text" onChange={addStreetAddress} value={streetAddress} />
          </label>
          <label htmlFor="city">
            Введите город нового клиента
            <input id="city" type="text" onChange={addCity} value={city} />
          </label>
          <label htmlFor="state">
            Введите штат нового клиента
            <input id="state" type="text" onChange={addState} value={state} />
          </label>
          <label htmlFor="zip">
            Введите индекс нового клиента
            <input id="zip" type="text" onChange={addZip} value={zip} />
          </label>
        </fieldset>
        <button type="submit" className='addClientBtn'>Добавить</button>
      </form>
    </div>
  );
}

export default FormAddClient;
