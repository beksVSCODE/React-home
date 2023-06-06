
const button = ( {width,height,type,bacground,color} ) => {
    return (
        <button type={type} style={{
            width:width,
            height:height,
            background:bacground,
            color:color
        }}>
            push something
        </button>
    );
};

export default button;