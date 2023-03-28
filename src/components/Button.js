const Button = ({label, color, callback}) => {
    return (
        <Button
        onClick={callback}
        style={{ backgroundColor:`${color}` }}>
            {label}
        </Button>
    );
};
export default Button