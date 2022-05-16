import { Button, Input, message, Select } from 'antd';
import React, {
  ChangeEvent,
  useState,
  KeyboardEvent,
  MouseEvent,
  FormEventHandler,
} from 'react';
import style from './style.module.css';

const { Option } = Select;

const BasicEventHandling = () => {
  const [inline, setInline] = useState('');
  const [named, setNamed] = useState('');
  const [keyEvents, setKeyEvents] = useState('');

  const handleInputChange = (e: ChangeEvent) => {
    setNamed(e.target.value);
    message.info(`You entered ${e.target.value}`);
  };
  const handleKeyEvent = (e: KeyboardEvent) => {
    message.info(`You pressed ${e.key}`);
  };
  const handleButtonClick = (e: MouseEvent) => {
    message.info(`You clicked a button`);
  };
  return (
    <div className={style.card}>
      <h2>Basic Event Handling</h2>
      <Input
        value={inline}
        onChange={(e) => {
          setInline(e.target.value);
          message.info(`You entered ${e.target.value}`);
        }}
      />
      <Input value={named} onChange={handleInputChange} />
      <input
        value={keyEvents}
        onKeyDown={handleKeyEvent}
        onKeyUp={handleKeyEvent}
        onChange={(e) => setKeyEvents(e.target.value)}
      />
      <Button type="primary" onClick={handleButtonClick}>
        Click
      </Button>
    </div>
  );
};

const RestrictiveEventHandling = () => {
  const [named, setNamed] = useState('');
  const [selected, setSelected] = useState('audi');

  // This event listens to 'change' event from input element only
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNamed(e.target.value);
    message.info(`You entered ${e.target.value}`);
  };
  // This event listens to 'change' event from input element only
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    message.info(`You have chosen ${e.target.value}`);
  };
  const handleTextClick = (e: MouseEvent<HTMLParagraphElement>) => {
    message.info(`You clicked on a paragraph text}`);
  };
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    message.info(`You clicked a button`);
  };
  return (
    <div className={style.card}>
      <h2>Restrictive Event Handling</h2>
      <p onClick={handleTextClick}>Click Me!!!</p>
      <button
        className={style.button}
        type="button"
        onClick={handleButtonClick}
      >
        Click
      </button>
      <Input value={named} onChange={handleInputChange} />

      <label htmlFor="cars">Choose a car:</label>
      <select
        name="cars"
        id="cars"
        onChange={handleSelectChange}
        value={selected}
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

function FormHandler() {
  const handleFormSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    message.info('Form submitted');
  };
  return (
    <div className={style.card}>
      <h2>Typing handler funtion</h2>
      <form className={style.verticalFlex} onSubmit={handleFormSubmit}>
        <input type="text" className={style.input} />
        <button type="submit" className={style.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default function FormsAndEvents() {
  return (
    <div className={style.grid}>
      <BasicEventHandling />
      <RestrictiveEventHandling />
      <FormHandler />
    </div>
  );
}
