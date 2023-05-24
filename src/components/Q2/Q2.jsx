import { useState } from "react";
import SearchBar from "../Search/SearchBar";
import Header from "../Header/Header";
import MobileNav from '../MobileNav/MobileNav'
import Q2HowTo from "../HowTo/Q2HowTo";
import Question2 from '../Question2/Question2'

export default function Q2({ onNext }) {
    const [showHowTo, setShowHowTo] = useState(true)

    const handleClick = () => {
        setShowHowTo(!showHowTo)
    }

    return (
        <>
        <SearchBar />
        <Header
            titleName="My Business Plan"
            text="Module 1 - Introduction"
            color="subdued"
        />
        {
            showHowTo ? <Q2HowTo handleClick={handleClick} /> : <Question2 onNext={onNext} />
        }
        <MobileNav />
        </>
    )
}