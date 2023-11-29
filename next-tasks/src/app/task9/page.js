import axios from 'axios';
import Link from 'next/link';

export default async function Task9() {
    const getIp = async() => {
        const res = await axios.get('https://api.ipify.org/?format=json');
        return res.data.ip;
    }

    return (
        <>
            <p>
                9.Создайте компонент, который выполняет запрос к API
                https://api.ipify.org/?format=json и отображает полученные данные в заголовок.
                (решить задачу через серверный компонент)
            </p>

            <h1>{await getIp()}</h1>

            <p>
                <Link href='/'>back</Link>
            </p>
        </>
    )
}