export default function Task6() {
    const [bool, setBool] = useState(true);
    return (
        <>
            <div className={bool ? style.light : style.dark}>
                <p>
                    Создайте кнопку, которая позволяет пользователю переключаться между светлой
                    и темной темой интерфейса. Используйте useState, чтобы отслеживать текущую
                    тему. Применяйте соответствующие стили в зависимости от выбранной темы.
                </p>
            </div>

            <div>
                <button ></button>
            </div>
        </>
    )
}