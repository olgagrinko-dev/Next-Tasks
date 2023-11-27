import style from './style.module.css';

export default function Task1() {

    return (
        <>
            <p>Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля.</p>
            <div className={style.form}>
                <div>
                    <input placeholder='введите имя' />
                </div>

                <div>
                    <input placeholder='введите фамилию' />
                </div>

                <div>
                    <input placeholder='введите email' />
                </div>

                <div>
                    <input placeholder='введите пароль' />
                </div>

                <div>
                    <button>Регистрация</button>
                </div>
            </div>
        </>
    )
}