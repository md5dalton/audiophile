export default ({ children, className = "primary", ...rest }) => (
    <button
        className={`
            ${className}
            grid place-items-center
        `}
        {...rest}
    >{children}</button>
)