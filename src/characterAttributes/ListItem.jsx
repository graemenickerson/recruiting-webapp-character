

const ListItem = ({ item, stat, updateStat }) => {
    const changeStat = (action) => {
        const newStat = stat + action
        updateStat(item, newStat)
    };

    return (
        <div className="List-Item">
            <p style={{ marginRight: '5px' }}>{item} {stat}</p>
            <button onClick={() => changeStat(1)}>+</button>
            <button onClick={() => changeStat(-1)}>-</button>
        </div>
    );
}

export default ListItem;