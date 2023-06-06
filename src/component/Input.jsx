
const Input = ( {width,height,type} ) => {
    return (
      <input type={type} style={{
        width:width,
        height:height
      }}/>
    );
};

export default Input;