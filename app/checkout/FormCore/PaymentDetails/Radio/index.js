export default ({ name, group, changeHandler, checked }) => {

    const id = name.toLowerCase().replaceAll(" ", "-")

    return (
        <label htmlFor={id}>
            <input 
                type="radio" 
                id={id} 
                name={group} 
                value={name} 
                checked={checked} 
                onChange={ev => changeHandler(ev.target.value)} 
            />
            <span>{name}</span>
        </label>
    )
}