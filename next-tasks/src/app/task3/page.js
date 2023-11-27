"use client"

import { useState } from 'react';

export default function Task3() {
    const [val, setVal] = useState('');

    function doInput(event) {
        setVal(event.target.value);    
    }

    function doShow() {
        console.log(val);
    }

    return (
        <>
            <p>
                Создайте форму для ввода данных. По клику на кнопку получите данные из input
                и отобразите в консоль
            </p>

            <input placeholder='Введите данные' onChange={doInput} />
            <button onClick={doShow}>Click</button>
        </>
    )
}