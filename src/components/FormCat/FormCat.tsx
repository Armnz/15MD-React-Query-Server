import style from './FormCat.module.css';
import {useState} from "react";

import Button from '../Button/Button.tsx';
import Input from '../Input/Input.tsx';

const initFormValues = {
  id: -1,
  name: '',
  breed: '',
  color: '#000000',
  age: '',
}

export type Cat = typeof initFormValues

type FormCatprops = {
  onSubmit: (payload: Cat) => void
}

const FormCat = ({ onSubmit }: FormCatprops) => {
  const [formValues, setFormValues] = useState(initFormValues);

  return (
    <form className={style.form} onSubmit={(e) => {
      e.preventDefault();

      onSubmit(formValues)

      setFormValues(initFormValues)
    }}>
      <h1 className={style.heading}>Add a cat</h1>
      <Input
        placeholder='Bārdiņš...'
        label='Cat name'
        value={formValues.name}
        type=''
        onChange={(e) => {
          setFormValues( {
            ...formValues,
            name: e.target.value
          })
        }}
      />
      <Input
        placeholder='Bezšķirnes...'
        label='Cat breed'
        value={formValues.breed}
        type=''
        onChange={(e) => {
          setFormValues( {
            ...formValues,
            breed: e.target.value
          })
        }}
      />
      <Input
        placeholder='Krāsa...'
        label='Cat color'
        value={formValues.color}
        type='color'
        onChange={(e) => {
          setFormValues( {
            ...formValues,
            color: e.target.value
          })
        }}
      />
      <Input
        placeholder='Vecums...'
        label='Cat age'
        type='number'
        value={formValues.age}
        onChange={(e) => {
          setFormValues( {
            ...formValues,
            age: e.target.value
          })
        }}
      />

      <div className={style.buttonWrapper}>
        <Button
          text="Add cat"
          type='submit'
          />
      </div>
    </form>
  );
};

export default FormCat;