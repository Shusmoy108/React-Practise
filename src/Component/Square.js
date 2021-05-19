import {useSelector} from 'react-redux';
import { selectRestoMenu } from "../Redux/restoSlice";
function Square(props) {
  //const name= useSelector(selectRestoMenu)
  //console.log(name);
  const counter= useSelector(state=>state);
    return (
      <button className="square" onClick={props.onClick}>
        {counter}
      </button>
    );
  }
export default(Square)