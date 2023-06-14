import {Link} from "react-router-dom";
import data_set from "./data_food";
const Food = () => {
    return (
        <div className={"food_list"}>
            <div>
                {data_set.map((item, index) => (
                    <div>
                        <div className={"food " + index}>
                            <Link to={"./"+index}>
                                <img className={"food_img"} src={item[0]} alt={item[1]}/>
                                <div className={"food_name"}>{item[1]}</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Food;