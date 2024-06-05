import React, { useEffect, useState } from "react";

export const AutoYear = () => {
    const [year, setYear] = useState('')

    useEffect(() => {
        const currentYear = () => {
            let year = new Date()
            setYear(year.getFullYear())
        }

        currentYear();
        
    }, [year]);

    return (
        <div>
            <p className='text-white text-capitalize text-center fs-6'>&copy; {year} P-Detector. All Right Reserved</p>
        </div>
    )
}