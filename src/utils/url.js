import { DEFAULT_API_KEY,
  DEFAULT_LANG,
  DEFAULT_UNITS,
  DEFAULT_LOCATION,
  BASE_URL,
} from '../constants';


// export default function getForecastUrl(
//     location=DEFAULT_LOCATION,
//     baseUrl=BASE_URL,
//     units=DEFAULT_UNITS,
//     lang=DEFAULT_LANG,
//     apiKey=DEFAULT_API_KEY) {
//   return `${baseUrl}?q=${location}&appid=${apiKey}&units=${units}&lang=${lang}`;
// }

export default function getForecastUrl() {
  return 'https://reqres.in/api/users?page=2'
}

// 'https://evilinsult.com/generate_insult.php?lang=en&type=json'

// 'http://makeup-api.herokuapp.com/api/v1/products.json'

// 'https://jobs.github.com/positions.json?description=python&location=new+york'