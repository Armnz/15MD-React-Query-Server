import style from'./Button.module.css'

type ButtonProps = {
  text: string;
  form?: string;
  outline?: boolean;
  size?: 'large' | 'small';
  onClick?: () => void;
  type?: HTMLButtonElement['type'];
}

const Button = ({ text, onClick, type = 'button', size = 'large', outline = false, form } : ButtonProps) => {
  return (
      <button
        className={`
        ${style.button}
        ${size === 'small' ? style.small : ''}
        ${outline ? style.outline : ''}
        `}
        type={type}
        form={form}
        onClick={onClick}
      >
          {text}
      </button>
  );
};

export default Button; 