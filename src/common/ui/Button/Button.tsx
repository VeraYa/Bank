import './Button.scss'

type ButtonProps = {
	children: string;
	onClick?: () => void;
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {children}
  </button>
);