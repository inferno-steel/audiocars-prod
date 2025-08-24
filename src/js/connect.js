fetch('http://localhost:4000/api/goods')
  .then(response => response.json())
  .then(data => {
    console.log('Полученные данные:', data);
    // Обработка полученных данных
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });