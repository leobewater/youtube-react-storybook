import './Input.css';

interface InputProps {
  size: 'small' | 'medium' | 'large';
  placeholder?: string;
}

const Input = (props: InputProps) => {
  const { size = 'medium', placeholder, ...rest } = props;
  return (
    <input className={`input ${size}`} {...rest} placeholder={placeholder} />
  );
};

export default Input;
