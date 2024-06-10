import { useState } from 'react';
import './style.css';

export default function Home() {
  const [randomUrl, setRandomUrl] = useState('');

  const generateRandomUrl = () => {
    const randomNumber = Math.floor(Math.random() * 12345) + 1;
    const newUrl = `${window.location.origin}/${randomNumber}.html`;
    setRandomUrl(newUrl); 

    // Обновляем адресную строку без перезагрузки страницы
    window.history.pushState({}, '', newUrl);
  };

  return (
    <div className="container">
      <h1>Генератор случайных URL</h1>
      <button onClick={generateRandomUrl}>Создать URL</button>
      {randomUrl && (
        <div>
          <p>Ваш случайный URL:</p>
          <span>{randomUrl}</span> {/* Отображаем URL без ссылки */}
        </div>
      )}
    </div>
  );
