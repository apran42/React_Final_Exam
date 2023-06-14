import {Link} from "react-router-dom";
import data_set from "./data_lifestyle";
const Lifestyle = () => {
    return (
        <div className={"lifestyle_list"}>
            <div>
                {data_set.map((item, index) => (
                    <div>
                        <div className={"lifestyle " + index}>
                            <Link to={"./"+index}>
                                <img className={"lifestyle_img"} src={item[0]} alt={item[1]}/>
                                <div className={"lifestyle_name"}>{item[1]}</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Lifestyle;