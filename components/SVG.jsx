export default ({ path }) => (
    <svg
        width="24"
        height="24"
            className="hover:text-red-600"
        xmlns="http://www.w3.org/2000/svg">
            <path 
                d={path}
                fill="#FFF"
                fill-rule="nonzero"
            />
    </svg>
)