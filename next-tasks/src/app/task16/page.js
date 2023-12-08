'use client'

import Link from "next/link";
import style from './style.module.css'
import { useState } from 'react';
import Calculator from './Calculator';

export default function Task16() {
    const [value, setValue] = useState('');

    return (
        <>
            <p>
                16.Создайте калькулятор, который позволяет выполнять основные математические
                операции (сложение, вычитание, умножение, деление). Реализуйте два
                компонента. page.js: Содержит калькулятор. Calculator.js: Принимает введенные
                данные и выполняет математические операции для расчета итогового результата.
            </p>

            <div className={style.contVal}>
                <input type='text' value={value} />
                <div className={style.numbersCalcul}>             
                    <input type='button' value={0} onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value={1} onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value={2} onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value={3} onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value={4} onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value={5} onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value={6} onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value={7} onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value={8} onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value={9} onClick={e => setValue(value + e.target.value)} />
                </div>
                <div className={style.operatCalcul}>
                    <input type='button' value={'+'} onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value={'-'} onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value={'*'} onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value={'/'} onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value={'.'} onClick={e => setValue(value + e.target.value)} />
                    <input type='button' value={'='} onClick={e => setValue(Calculator(value))} />
                    <input type='button' value={'DE'} onClick={e => setValue(Calculator(value.slice(0, -1)))} />
                    <input type='button' value={"AC"} onClick={e => setValue('')} />
                </div>
            </div>

            <p>
                <Link href='/'>back</Link>
            </p>
        </>
    )
}