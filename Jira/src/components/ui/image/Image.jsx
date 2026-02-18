export const Image = (props) => {

    const {className, source, alternate} = props;

    return(
        <img className={className} src={source} alt={alternate} />
    )

}