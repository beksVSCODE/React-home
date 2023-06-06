const Todos = ({ data }) => {
    return (
        <div>
            {data.map(element => (
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    columnGap:"30px"
                }}>
                     <h3>{element.title}</h3>
                    <input type="checkbox" checked={element.isCompleted === true ? "checked" : null}/>
                </div>
            ))} 
        </div>
    );
};

export default Todos;