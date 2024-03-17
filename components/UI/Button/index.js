import "./styles.sass"

export default ({ children, className = "primary", ...rest }) => (
    <button className={className} {...rest}>{children}</button>
)