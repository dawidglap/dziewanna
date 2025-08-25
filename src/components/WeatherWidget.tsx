'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

type WeatherData = {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_sum: number[];
  windspeed_10m_max: number[];
};

export default function WidgetWeather() {
  const [daily, setDaily] = useState<WeatherData | null>(null);
  const [hourlyCodes, setHourlyCodes] = useState<number[]>([]);
  const [hourlyTimes, setHourlyTimes] = useState<string[]>([]);
  const [hourlyWind, setHourlyWind] = useState<number[]>([]);



  const t = useTranslations('Weather');
  const locale = useLocale();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=54.4641&longitude=17.0287&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&hourly=weather_code,windspeed_10m&timezone=auto&forecast_days=3'
        );
        setDaily(res.data.daily);
        setHourlyCodes(res.data.hourly.weather_code);
        setHourlyTimes(res.data.hourly.time);
        setHourlyWind(res.data.hourly.windspeed_10m);
      } catch (err) {
        console.error('Weather fetch error:', err);
        setDaily(null);
      }
    };
    fetchWeather();
  }, []);

  const getIconFromCode = (code: number) => {
  if ([0, 1].includes(code)) return '☀️'; // Sole, sereno
  if (code === 2) return '🌤️'; // Poco nuvoloso
  if (code === 3) return '☁️'; // Nuvoloso
  if ([45, 48].includes(code)) return '🌫️'; // Nebbia
  if ([51, 53, 55].includes(code)) return '🌦️'; // Pioggerella leggera-moderata
  if ([56, 57].includes(code)) return '🌧️'; // Pioggerella congelante
  if ([61, 63, 65].includes(code)) return '🌧️'; // Pioggia leggera-moderata
  if ([66, 67].includes(code)) return '🌨️'; // Pioggia congelante
  if ([71, 73, 75, 77].includes(code)) return '❄️'; // Neve
  if ([80, 81, 82].includes(code)) return '🌧️'; // Rovesci
  if ([85, 86].includes(code)) return '🌨️'; // Rovesci di neve
  if ([95, 96, 99].includes(code)) return '⛈️'; // Temporali
  if (code >= 4 && code < 20) return '☁️';

  // codici intermedi tipo 22, 35, ecc → fallback visivo coerente
  if (code >= 20 && code < 30) return '☁️'; // Nebbia/atmosfera incerta
  if (code >= 30 && code < 40) return '☁️'; // Vari tipi di nuvolosità
  if (code >= 40 && code < 50) return '☁️';
  if (code >= 50 && code < 60) return '🌦️';
  if (code >= 60 && code < 70) return '🌧️';
  if (code >= 70 && code < 80) return '❄️';
  if (code >= 80 && code < 90) return '🌧️';
  if (code >= 90) return '⛈️';

  return '❔'; // fallback finale per codici ignoti
};


const getHourlyDataForDay = (date: string) => {
  const avgMorning = getAverageCodeForRange(date, 0, 12);
  const avgEvening = getAverageCodeForRange(date, 12, 24);
  const iconMorning = getIconFromCode(avgMorning);
  const iconEvening = getIconFromCode(avgEvening);
  const windMorning = getAverageWindForRange(date, 0, 12);
  const windEvening = getAverageWindForRange(date, 12, 24);

  console.log(`\n=== ${date} ===`);
  console.log('→ avgMorning:', avgMorning, '→ iconMorning:', iconMorning);
  console.log('→ avgEvening:', avgEvening, '→ iconEvening:', iconEvening);

  return { iconMorning, iconEvening, windMorning, windEvening };
};




const getAverageCodeForRange = (day: string, hourStart: number, hourEnd: number) => {
  const codes: number[] = [];
  for (let h = hourStart; h < hourEnd; h++) {
    const timeStr = `${day}T${h.toString().padStart(2, '0')}:00`;
    const index = hourlyTimes.findIndex((t) => t.startsWith(timeStr));
    if (index !== -1) {
      const code = hourlyCodes[index];
      codes.push(code);
      console.log(`✔️ ${timeStr} → code: ${code}`);
    } else {
      console.log(`❌ ${timeStr} not found`);
    }
  }

  if (codes.length > 0) {
    const avg = Math.round(codes.reduce((a, b) => a + b, 0) / codes.length);
    console.log(`Average code: ${avg}`);
    return avg;
  } else {
    console.log('⚠️ No data, fallback code 3');
    return 3; // fallback neutro
  }
};



const getAverageWindForRange = (day: string, hourStart: number, hourEnd: number) => {
  const winds: number[] = [];
  for (let h = hourStart; h < hourEnd; h++) {
    const timeStr = `${day}T${h.toString().padStart(2, '0')}:00`;
    const index = hourlyTimes.findIndex((t) => t.startsWith(timeStr));
    if (index !== -1) winds.push(hourlyWind[index]);
  }

  if (winds.length > 0) {
    return (winds.reduce((a, b) => a + b, 0) / winds.length).toFixed(1);
  } else {
    return '-';
  }
};



  if (!daily) {
    return (
      <div className="bg-white shadow-lg rounded-sm overflow-hidden h-full min-h-[380px] xl:h-full flex flex-col justify-between">

        {t('fallback')}{' '}
        <Link
          href="https://www.yr.no/en/forecast/daily-table/2-3085450/Poland/Pomeranian%20Voivodeship/S%C5%82upsk/S%C5%82upsk"
          className="text-blue-600 underline"
          target="_blank"
        >
          YR.no
        </Link>
      </div>
    );
  }
return (
  <div className="bg-white shadow-lg rounded-sm overflow-hidden h-full min-h-[380px] xl:h-full flex flex-col justify-between">

    {/* Header */}
    <div className="p-4 border-b">
      <p className="text-xl font-semibold text-[#1F1F1F]">{t('title')}</p>
    </div>

    {/* Tabella */}
    <div className="overflow-auto">
      <table className="min-w-full text-sm text-left text-gray-800 table-fixed ">

        <thead className="bg-gray-100 text-xs sm:text-sm text-[#1F1F1F] font-semibold ">
  <tr>
    <th className="ps-4 p-2">{t('day')}</th>
    <th className="p-2  min-w-[56px] text-left whitespace-nowrap">00–12</th>
    <th className="p-2 min-w-[56px] text-left whitespace-nowrap">12–00</th>
    <th className="p-2 text-left whitespace-nowrap">{t('temperature')}</th>
    <th className="p-2 text-left whitespace-nowrap">{t('precipitation')}</th>
    <th className="p-2 whitespace-nowrap">{t('wind')}</th>
  </tr>
</thead>

<tbody>
  {daily.time.map((date, i) => {
    const {
      iconMorning,
      iconEvening,
      windMorning,
      windEvening,
    } = getHourlyDataForDay(date);

    return (
      <tr
        key={i}
        className="border-t border-gray-200 text-sm sm:text-base"
      >
        <td className="ps-4 p-2 font-bold text-[#1F1F1F] whitespace-nowrap">
          {new Date(date).toLocaleDateString(locale, {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
          })}
        </td>
        <td className="p-2 text-xl text-center">{iconMorning}</td>
        <td className="p-2 text-xl text-center">{iconEvening}</td>
        <td className="p-2 text-red-600 font-medium">
          {daily.temperature_2m_max[i]}° / {daily.temperature_2m_min[i]}°
        </td>
        <td className="p-2 text-blue-600 whitespace-nowrap">
          {daily.precipitation_sum[i]} mm
        </td>
        <td className="p-2 text-gray-600 whitespace-nowrap">
          {windMorning} / {windEvening} km/h
        </td>
      </tr>
    );
  })}
</tbody>

      </table>
    </div>

    {/* Footer link */}
    
      <Link
        href="https://www.yr.no/en/forecast/daily-table/2-3085450/Poland/Pomeranian%20Voivodeship/S%C5%82upsk/S%C5%82upsk"
        target="_blank"
        className="bg-[#1F1F1F] text-white text-center font-semibold block py-3  shadow hover:bg-yellow-400 hover:text-black transition
               text-sm sm:text-base md:text-lg m-4 rounded-sm"
      >
        {t('button')}
      </Link>
    
  </div>
);

}
