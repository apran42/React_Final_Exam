import {Link} from "react-router-dom";
import data_set from "./data_fresh";
const Fresh = () => {
  return (
      <div className={"fresh_list"}>
          <div>
              {data_set.map((item, index) => (
                  <div>
                      <div className={"fresh " + index}>
                          <Link to={"./"+index}>
                              <img className={"fresh_img"} src={item[0]} alt={item[1]}/>
                              <div className={"fresh_name"}>{item[1]}</div>
                          </Link>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Fresh;