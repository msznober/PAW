class App {
  apiKey = 'c97dcd580006c69dc934a4b0bccbd31f';
  btn: HTMLButtonElement;
  cityname: string;
  cardsContainer: HTMLDivElement;

  constructor() {
    this.getInfo();
    this.createCard();
  }

  getInfo = (): void => {
    this.btn = document.querySelector('.button');
    this.cardsContainer = document.querySelector('.cards-list');
    this.btn.addEventListener('click', () => this.getCity());
  };

  getCity = async () => {
    this.cityname = document.querySelector('input').value;
    document.querySelector('input').value = '';
    const weather = await this.getWeather();
    this.saveData(weather);
    this.createCard();
  };

  getWeather = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.cityname}&units=metric&APPID=${this.apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  saveData = (data: any): void => {
    const existedData = this.getData();
    const indexInArr = existedData.findIndex((item) => item.id === data.id);
    if (indexInArr !== -1) {
      existedData[indexInArr] = data;
      localStorage.setItem('weatherInfo', JSON.stringify(existedData));
      return;
    }
    localStorage.setItem('weatherInfo', JSON.stringify([data, ...existedData]));
  };

  getData = () => {
    const data = localStorage.getItem('weatherInfo');
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  createCard = () => {
    const data = this.getData();

    if (data.length > 0) {
      this.cardsContainer.innerHTML = '';

      data.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cityName = document.createElement('h2');
        cityName.classList.add('city');
        cityName.textContent = item.name;

        const temperature = document.createElement('span');
        temperature.classList.add('weather-temperature');
        temperature.textContent = Math.round(item.main.temp) + '°C';

        const weatherDescription = document.createElement('span');
        weatherDescription.classList.add('weather-description');
        weatherDescription.textContent = item.weather[0].description;

        const weatherPressure = document.createElement('span');
        weatherPressure.classList.add('weather-pressure');
        weatherPressure.textContent = 'Pressure: ' + item.main.pressure + ' hPa';

        const weatherHumidity = document.createElement('span');
        weatherHumidity.classList.add('weather-humidity');
        weatherHumidity.textContent = 'Humidity: ' + item.main.humidity + '%';

        card.appendChild(cityName);
        card.appendChild(temperature);
        card.appendChild(weatherDescription);
        card.appendChild(weatherPressure);
        card.appendChild(weatherHumidity);

        this.cardsContainer.appendChild(card);
      });
    }
  };
}

const app = new App();