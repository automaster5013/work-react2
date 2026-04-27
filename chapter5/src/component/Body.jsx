import "./Body.css"; 

function Body({children}) {
    console.log(children);
    return (
    <div className="body">
        {children}
    </div>
    );
}

export default Body;

