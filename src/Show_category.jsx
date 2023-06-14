import React from "react";
import {Link} from "react-router-dom";

const categories = ['신선식품', '식품', '의류', '가전', '도서', '생활용품'];
const categoriesEng = ['fresh', 'food', 'clothes', 'electronics', 'books', 'lifestyle'];

const Show_category = () => {
    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => (
                    <li key={index}><Link to={categoriesEng[index]}>{category}</Link></li>
                ))}
            </ul>
        </div>
    );
}

export default Show_category;