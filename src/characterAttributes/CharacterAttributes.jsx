
import { ATTRIBUTE_LIST } from '../consts.ts';
import ListItem from './ListItem.jsx';


function CharacterAttributes({ character, updateCharacter }) {
    const updateStat = (item, newStat) => {
        updateCharacter({ ...character, [item]: newStat });
    }

    return (
        <div className='Character-attributes' >
            {ATTRIBUTE_LIST.map((item) => {
                return (
                    <ListItem
                        key={item}
                        item={item}
                        stat={character[item]}
                        updateStat={updateStat}
                    />
                );

            })}
        </div>
    );
};

export default CharacterAttributes;