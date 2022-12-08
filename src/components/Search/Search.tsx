import { HiSearch } from "react-icons/hi";
import './Search.scss';
export default function Search(){
    return(
        <div className="search">
            <div className="search_icon">
                <HiSearch></HiSearch>
            </div>
            <input
                placeholder='What are you looking for?'
            />
        </div>
    )
}