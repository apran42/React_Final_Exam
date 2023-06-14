import {useLocation} from "react-router";
import Counter from "./Counter";
import data_set from "./data_fresh";
const Fresh_Detail = () => {

    const location_info = useLocation().pathname.split('/');
    const id = location_info[2];
    return(
        <div className={"detail"}>
            <img className={"detail_img"} src={data_set[id][0]} alt={"상세 이미지"}/>
            <div className={"desc"}>
                <div className={"item_name"}>
                    {data_set[id][1]}
                </div>
                <hr className={"detail_hr"}/>
                <div className={"item_price"}>
                    {`가격 : ${data_set[id][2]}원`}
                </div>
                <Counter id={"fresh"+id} name={data_set[id][1]} price={data_set[id][2]}/>
            </div>

        </div>
    );
}

export default Fresh_Detail;