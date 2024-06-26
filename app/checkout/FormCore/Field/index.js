import "./styles.sass"

export default ({ className, children }) => (
    <li className={`field${className ? " " + className : ""}`}>
        {children}
    </li>
)