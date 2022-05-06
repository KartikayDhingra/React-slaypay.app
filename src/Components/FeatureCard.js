
const FeatureCard = (props) => {
    return <div className="basis-1/4 flex flex-col gap-x-6 bg-lightBlue px-12 py-6 text-center rounded-2xl">
        <img src={props.img} className="w-32 h-232 mx-auto" alt="img"></img>
        <h2 className="text-lg font-bold">{props.heading}</h2>
        <p className="text-sm">{props.content}</p>
    </div>
}

export default FeatureCard;