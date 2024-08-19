export default function Image (props) {
    return (
        <img className={props.className} src={props.src} alt="description" height={props.height} width={props.width}/>
    )
}