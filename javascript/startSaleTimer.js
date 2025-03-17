function startSaleTimer(duration) {
  let timer = duration;
  const intervalId = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    // Форматирование с ведущим нулём
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    console.log(display);

    if (--timer < 0) {
      clearInterval(intervalId);
      console.log("Акция завершена!");
    }
  }, 1000);
}

// Запуск таймера на 10 минут (600 секунд)
startSaleTimer(10 * 60);

// Пример вывода:
// 10:00
// 09:59
// 09:58
// ...
// 00:01
// 00:00
// Акция завершена!