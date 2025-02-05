import { CLASS_LIST } from "../consts";

const ClassList = ({character}) => {
  const listOfClasses = Object.keys(CLASS_LIST);

  

  return (
    <div className="Class-List">
      <h3>Classes</h3>
      {listOfClasses.map((item) => {
        return(
          <p>{item}</p>
        );
      })}
    </div>
  );
};

export default ClassList;