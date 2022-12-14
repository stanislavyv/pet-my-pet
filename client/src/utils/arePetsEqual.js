const arePetsEqual = (prevProps, props) => {
    return (
        prevProps._id === props._id &&
        prevProps.likes === props.likes &&
        prevProps.description === props.description
    );
};

export default arePetsEqual;
