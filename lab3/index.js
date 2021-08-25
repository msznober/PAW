var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.apiKey = '10505a88d228ea38245039b72e084e86';
        this.getInfo = function () {
            _this.btn = document.querySelector('.button');
            _this.cardsContainer = document.querySelector('.cards-list');
            _this.btn.addEventListener('click', function () { return _this.getCity(); });
        };
        this.getCity = function () { return __awaiter(_this, void 0, void 0, function () {
            var weather;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.cityname = document.querySelector('input').value;
                        document.querySelector('input').value = '';
                        return [4 /*yield*/, this.getWeather()];
                    case 1:
                        weather = _a.sent();
                        this.saveData(weather);
                        this.createCard();
                        return [2 /*return*/];
                }
            });
        }); };
        this.getWeather = function () { return __awaiter(_this, void 0, void 0, function () {
            var url, res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.cityname + "&units=metric&APPID=" + this.apiKey;
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        }); };
        this.saveData = function (data) {
            var existedData = _this.getData();
            var indexInArr = existedData.findIndex(function (item) { return item.id === data.id; });
            if (indexInArr !== -1) {
                existedData[indexInArr] = data;
                localStorage.setItem('weatherInfo', JSON.stringify(existedData));
                return;
            }
            localStorage.setItem('weatherInfo', JSON.stringify(__spreadArray([data], existedData)));
        };
        this.getData = function () {
            var data = localStorage.getItem('weatherInfo');
            if (data) {
                return JSON.parse(data);
            }
            else {
                return [];
            }
        };
        this.createCard = function () {
            var data = _this.getData();
            if (data.length > 0) {
                _this.cardsContainer.innerHTML = '';
                data.forEach(function (item) {
                    var card = document.createElement('div');
                    card.classList.add('card');
                    var cityName = document.createElement('h2');
                    cityName.classList.add('city');
                    cityName.textContent = item.name;
                    var temperature = document.createElement('span');
                    temperature.classList.add('weather-temperature');
                    temperature.textContent = Math.round(item.main.temp) + '°C';
                    var weatherDescription = document.createElement('span');
                    weatherDescription.classList.add('weather-description');
                    weatherDescription.textContent = item.weather[0].description;
                    var weatherPressure = document.createElement('span');
                    weatherPressure.classList.add('weather-pressure');
                    weatherPressure.textContent = 'Pressure: ' + item.main.pressure + ' hPa';
                    var weatherHumidity = document.createElement('span');
                    weatherHumidity.classList.add('weather-humidity');
                    weatherHumidity.textContent = 'Humidity: ' + item.main.humidity + '%';
                    card.appendChild(cityName);
                    card.appendChild(temperature);
                    card.appendChild(weatherDescription);
                    card.appendChild(weatherPressure);
                    card.appendChild(weatherHumidity);
                    _this.cardsContainer.appendChild(card);
                });
            }
        };
        this.getInfo();
        this.createCard();
    }
    return App;
}());
var app = new App();
