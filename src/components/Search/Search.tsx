import React, { useState } from 'react'
import { HiSearch } from "react-icons/hi";
import './Search.scss';
import { useNavigate } from "react-router-dom";

export default function Search(){
    const [word, setIWord] = useState('')
    let navigate = useNavigate();

    const handleChange = (e:any) =>{
        setIWord(e.target.value)
    }
    const handleKeyUp = (e:any)=>{
        if(word.length > 0){
            if (e.key === 'Enter') {
                navigate(`/search/${word}`);
            }  
        }  
    }

    const handleClick = () => {
        if(word.length > 0){
            navigate(`/search/${word}`);
        } 
    }

    return(
        <div className="search">
            <input
                placeholder='What are you looking for?'
                onChange={handleChange}
                onKeyDown={handleKeyUp}
            />
            <div onClick={handleClick} className="search__icon">
                <HiSearch />
            </div>
        </div>
    )
}