import {useSelector} from 'react-redux';
import { selectRestoMenu } from "../Redux/restoSlice";
function Square(props) {
  const name= useSelector(selectRestoMenu)
  console.log(name);
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
export default(Square)