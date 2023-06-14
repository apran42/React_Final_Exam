import {Link} from "react-router-dom";
import data_set from "./data_books";
const Books = () => {
  return (
      <div className={"book_list"}>
          <div>
              {data_set.map((item, index) => (
                  <div>
                      <div className={"book " + index}>
                          <Link to={"./"+index}>
                              <img className={"book_img"} src={item[0]} alt={item[1]}/>
                              <div className={"book_name"}>{item[1]}</div>
                          </Link>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Books;