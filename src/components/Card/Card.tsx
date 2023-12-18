import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { Cat } from '../FormCat/FormCat';
import style from './Card.module.css';

type CardProps = {
  id: number;
  name: string;
  age: string;
  color: string;
  breed: string;
  onEdit: (payload: Cat) => void;
  onDelete: () => void;
};

const Card = ({ id, name, age, breed, color, onDelete, onEdit }: CardProps) => {
  const [editModeEnabled, setEditModeEnabled] = useState(false);
  const [editFormData, setEditFormData] = useState({ id, name, age, breed, color });

  return (
    <div className={style.card}>
      <div>
        {!editModeEnabled ? (
          <>
            <h3 className={style.heading}>{name}</h3>
            <div className={style.info}>
              <span className={style.breed}>
                <b>Breed: </b>
                {breed}
              </span>
              <span className={style.color}>
                <b>Color: </b>
                <span title={color} className={style.colorDot} style={{ backgroundColor: color }}></span>
              </span>
              <span className={style.age}>
                <b>Age: </b>
                {age}
              </span>
            </div>
          </>
        ) : (
          <form className={style.form} id={String(id)} onSubmit={(e) => {
            e.preventDefault();

            onEdit(editFormData)

            setEditFormData({ id, name, age, breed, color });
            setEditModeEnabled(false)
          }}>
            <Input
              label="Name"
              size="small"
              placeholder="New name..."
              value={editFormData.name}
              onChange={(e) => {
                setEditFormData({ ...editFormData, name: e.target.value });
              }}
            />
            <Input
              label="Breed"
              size="small"
              placeholder="New name..."
              value={editFormData.breed}
              onChange={(e) => {
                setEditFormData({ ...editFormData, breed: e.target.value });
              }}
            />
            <Input
              label="Color"
              type="color"
              value={editFormData.color}
              onChange={(e) => {
                setEditFormData({ ...editFormData, color: e.target.value });
              }}
            />
            <Input
              label="Age"
              size="small"
              placeholder="New age..."
              type="number"
              value={editFormData.age}
              onChange={(e) => {
                setEditFormData({ ...editFormData, age: e.target.value });
              }}
            />
          </form>
        )}
      </div>
      <div className={style.actions}>
        <Button
          size="small"
          text={editModeEnabled ? 'Cancel' : 'Edit'}
          outline={editModeEnabled}
          onClick={() => {
            setEditModeEnabled(!editModeEnabled);
            setEditFormData({ id, name, age, breed, color });
          }}
        />
        {!editModeEnabled ? (
          <Button size="small" text="Delete" onClick={onDelete} />
        ) : (
          <Button size="small" text="Save" type="submit" form={String(id)} />
        )}
      </div>
    </div>
  );
};

export default Card;
