'use client';

export default function Task5() {
    const array = ["New York", "London", "Tokyo", "Paris", "Berlin"];

    function doShow(event) {
        console.log(event.target.textContent);
    }
    return (
        <>
            <p>
                Создайте массив данных, представляющий элементы, которые вы хотите
                отобразить в списке используя map. ["New York", "London", "Tokyo", "Paris", "Berlin"].
                Добавить событие клика с распознаванием на какой именно li был совершен клик
            </p>

            <ul >
                {array.map((el, index) => <li key={index} onClick={doShow}>{el}</li>)}
            </ul>
        </>
    )
}