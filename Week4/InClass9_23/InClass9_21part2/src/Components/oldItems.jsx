// src/components/oldItems.jsx
function OldItems() {
    const morning   = ['coffee', 'eggs', 'toast']
    const afternoon = ['sandwich', 'apple', 'water']
    const teams = ['hawks', 'bears', 'white sox', 'cubs']
    const chiTeams = [...teams]
    const person = {
        name: 'Jack',
        age:  22,
        showInfo() {
            console.log(`Name:${name} Age:${age}`)
        }
    }

    const listStyle = {
        backgroundColor: 'yellow',
        padding: '10px',
        borderRadius: '8px',
        textAlign: 'left',
        listStyle: 'none'
    }

    const itemStyle = {
        marginBottom: '8px',
        padding: '6px',
        borderBottom: '1px solid green'
    }
    const featured = {color: 'red', fontWeight: 'bold'}
    return (
        <ul className='list-group' style={listStyle}>
            <li className='list-group-item' style={listStyle}>American Prometheus — $12.99</li>
            <li className='list-group-item'>Educated — $10.99</li>
            <li className='list-group-item'>The Fellowship of the Ring — $11.99</li>
            <li className='list-group-item'></li>
            <li style={{...itemStyle, ...featured}}>Sapiens — $9.99</li>
            <li className='list-group-item' style={listStyle}>The Martian — $14.99</li>

            <div className='alert alert-success'>Book added to cart!</div>
            <div className='alert alert-danger'>Error: book not found.</div>

        </ul>
    );
}

export default OldItems;
