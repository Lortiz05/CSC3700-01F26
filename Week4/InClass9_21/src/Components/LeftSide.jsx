// src/components/LeftSide.jsx
import Items from "./Items.jsx";
function LeftSide() {
    return (
        <>
                <h1 className='text-warning mt-3 p-5'>Our Books</h1>
                <Items />
            <div style={{color:'red', padding:'10px'}}>
                this has style
            </div>
        </>
    );
}

export default LeftSide;
