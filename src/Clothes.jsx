import {Link} from "react-router-dom";
import data_set from "./data_clothes";
const Clothes = () => {
    return (
        <div className={"clothes_list"}>
            <div>
                {data_set.map((item, index) => (
                    <div>
                        <div className={"clothes " + index}>
                            <Link to={"./"+index}>
                                <img className={"clothes_img"} src={item[0]} alt={item[1]}/>
                                <div className={"clothes_name"}>{item[1]}</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clothes;