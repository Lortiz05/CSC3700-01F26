import {useState} from "react";
function LeftSide(props) {
    const [isHere, setIsHere] = useState(true)
    const menu = [
        {id: 1, name: 'Pizza', cost: 12.99},
        {id: 2, name: 'Burger', cost: 9.99},
        {id: 3, name: 'Salad', cost: 7.49},
        {id: 4, name: 'Tacos', cost: 8.99},
    ]
    const [selectedId, setSelectedId] = useState(menu[0].id);
    const selectedItem = menu.find(item => item.id === selectedId)
    return (
        <div>
            Size: {menu.length}
            <h2>
                <select className='form-select mt-3'
                        value={selectedId}
                        onChange={(e) => setSelectedId(Number(e.target.value))}
                >
                    {menu.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </h2>
            <p className='mt-3'>{selectedItem.name} at cost ${selectedItem.cost} </p>
        </div>
    );
}

export default LeftSide;