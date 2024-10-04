export default ({ children, className, ...rest }) => (
    <button
        className={`
            ${className}
            grid place-items-center
        `.trim()}
        {...rest}
    >{children}</button>
)