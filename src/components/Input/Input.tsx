import './Input.css';

interface InputProps {
  size: 'small' | 'medium' | 'large';
}

const Input = (props: InputProps) => {
  const { size = 'medium', ...rest } = props;
  return <input className={`input ${size}`} {...rest} />;
};

export default Input;
