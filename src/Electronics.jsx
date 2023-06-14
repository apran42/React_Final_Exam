import {Link} from "react-router-dom";
import data_set from "./data_electronics";
const Electronics = () => {
    return (
        <div className={"electronics_list"}>
            <div>
                {data_set.map((item, index) => (
                    <div>
                        <div className={"electronics " + index}>
                            <Link to={"./"+index}>
                                <img className={"electronics_img"} src={item[0]} alt={item[1]}/>
                                <div className={"electronics_name"}>{item[1]}</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Electronics;