interface Location {
  name: string,
  region: string,
  localtime: string | Date,
  lat: number,
  long: number
}

interface Current {
  temp_c: number,
  temp_f: number,
  is_day: 0 | 1,
  precip_in: number,
  condition: {
    text: string,
  },
  wind_mph: number,
  wind_kph: number,
  wind_dir: string,
  humidity: number,
  cloud: number,
  feelslike_c: number,
  feelslike_f: number

}

interface Day {
  maxtemp_c: number
  maxtemp_f: number,
  mintemp_c: number,
  mintemp_f: number,
  maxwind_mph: 6.3,
  maxwind_kph: 10.1,
  condition: {
    text: string
  }
  uv: number
}

interface Astro {
  sunrise: string,
  sunset: string,
  moonrise: string,
  moonset: string,
  moon_phase: string,
  moon_illumination: string
}

interface Hour {
  time: string,
  temp_c: string,
  temp_f: string,
  condition: {
    text: string
  },

}
interface ForeCastDay {
  date: string,
  day: Day
  astro: Astro,

}
export interface ResponseData {
  location: Location,
  current: Current,
  forecast: {
    forecastday: ForeCastDay[]
  }
}