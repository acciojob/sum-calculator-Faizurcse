import React, { useState, useEffect } from 'react';

export default function SumCalculator() {
    const [numbers, setNumbers] = useState([]);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        // Recalculate sum whenever the numbers array changes
        const calculateSum = () => {
            let total = 0;
            for (let num of numbers) {
                total += num;
            }
            setSum(total);
        };

        calculateSum();
    }, [numbers]);

    const handleInputChange = (e) => {
        const inputValue = parseInt(e.target.value);
        if (!isNaN(inputValue)) {
            setNumbers([...numbers, inputValue]);
        }
    };

    return (
        <div>
            <h2>Sum Calculator</h2>
            <input
                type='number'
                placeholder='Enter a number'
                onChange={handleInputChange}
            />
            <div>
                <p>Numbers entered: {numbers.join(', ')}</p>
                <p>Total sum: {sum}</p>
            </div>
        </div>
    );
}

