import { useId } from "react";
import style from './Input.module.css';

type InputProps = {
  value: string;
  label: string;
  size?: 'large' | 'small'
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputElement['type'];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  value,
  placeholder,
  required = true,
  label,
  size='large',
  type = 'text',
  onChange
  }: InputProps) => {
  const id = useId()


  return (
    <div className={style.wrapper}>
                    <label htmlFor="id" className={style.label}>{label}:</label>
                    <input
                        id={id}
                        type={type}
                        className={`${style.button} ${size === 'small' ? style.small : ''}`}
                        placeholder={placeholder}
                        required ={required}
                        value={value}  // input is stateless and it pings its value to its parent
                        onChange={onChange}
                        />
                  </div>
  );
};

export default Input;