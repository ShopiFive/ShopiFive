import { useState } from "react";
import SearchBar from "../Search/SearchBar";
import Header from "../Header/Header";
import MobileNav from '../MobileNav/MobileNav'
import Q2HowTo from "./Q2HowTo/Q2HowTo";
import Q2Question from './Q2Question/Q2Question'

export default function Q2() {
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
            showHowTo ? <Q2HowTo handleClick={handleClick} /> : <Q2Question />
        }
        <MobileNav />
        </>
    )
}