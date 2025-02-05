import { CLASS_LIST } from "../consts";

const ClassList = ({character}) => {
  const listOfClasses = Object.keys(CLASS_LIST);

  const getClassColour = (item) => {
    // check ability scores of character and change colour when all attributes meets or beats the CLASS_LIST score
    
    return "#ffffff"
  }

  return (
    <div className="Class-List">
      <h3>Classes</h3>
      {listOfClasses.map((item) => {
        const textColour = getClassColour(item)
        return(
          <p style={{color: textColour}} key={item}>{item}</p>
        );
      })}
    </div>
  );
};

export default ClassList;