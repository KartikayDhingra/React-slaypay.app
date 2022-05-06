const Heading = (props) => {
    return <h1 className={`font-extrabold text-4xl ${props.color}`}>{props.content}</h1>
}

export default Heading;