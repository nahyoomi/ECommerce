import { HiSearch } from "react-icons/hi";
import './Search.scss';
export default function Search(){
    return(
        <div className="search">
            <input
                placeholder='What are you looking for?'
            />
            <div className="search_icon">
                <HiSearch></HiSearch>
            </div>
        </div>
    )
}