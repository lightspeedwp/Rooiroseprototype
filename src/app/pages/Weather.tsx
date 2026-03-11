import React, { useState } from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { WEATHER_FAQS } from '../data/pageFaqs';
import { CITIES } from '../data/weather';
import type { WeatherIcon } from '../data/weather';
import {
  CloudSun,
  Thermometer,
  Wind,
  Droplets,
  Sun,
  CloudRain,
  Cloud,
  Cloudy,
  Eye,
  Sunrise,
  Sunset,
  MapPin,
} from 'lucide-react';

/** Maps a WeatherIcon string identifier to a Lucide React element. */
const weatherIconMap: Record<WeatherIcon, (className: string) => React.ReactNode> = {
  sun: (cls) => <Sun className={cls} />,
  'cloud-sun': (cls) => <CloudSun className={cls} />,
  'cloud-rain': (cls) => <CloudRain className={cls} />,
  cloud: (cls) => <Cloud className={cls} />,
  cloudy: (cls) => <Cloudy className={cls} />,
};

function renderIcon(icon: WeatherIcon, className: string): React.ReactNode {
  return weatherIconMap[icon](className);
}

export const WeatherPage = () => {
  const [selectedCity, setSelectedCity] = useState(0);
  const city = CITIES[selectedCity];

  return (
    <div className="bg-secondary dark:bg-background min-h-screen">
      <SEO
        title="Weer | Die Papier"
        description="Die jongste weervoorspellings vir stede regoor Suid-Afrika."
        keywords="weer, weervoorspelling, temperatuur, suid-afrika, kaapstad, bloemfontein"
      />

      <PageContainer breadcrumbs={[{ label: 'Weer' }]}>
        <div className="mb-8">
          <h1 className="text-4xl font-normal text-brand-navy dark:text-foreground font-heading mb-2" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>Weer</h1>
          <p className="text-muted-foreground">
            Weervoorspellings vir stede regoor Suid-Afrika &mdash; opgedateer Vrydag 13 Februarie 2026.
          </p>
        </div>

        {/* City Selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CITIES.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setSelectedCity(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5 ${
                selectedCity === i
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'bg-white dark:bg-card text-muted-foreground border border-border hover:border-brand-red hover:text-brand-red'
              }`}
            >
              <MapPin size={12} />
              {c.name}
            </button>
          ))}
        </div>

        {/* Current Weather Card */}
        <div className="bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl p-8 md:p-10 text-white mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              {renderIcon(city.icon, 'w-16 h-16 text-amber-400')}
              <div>
                <h2 className="text-3xl md:text-5xl font-normal font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
                  {city.temp}°C
                </h2>
                <p className="text-gray-300 text-lg mt-1">{city.condition}</p>
                <p className="text-gray-400 text-sm mt-0.5">
                  Voel soos {city.feelsLike}°C
                </p>
              </div>
            </div>

            <div className="text-right">
              <h3 className="text-2xl font-normal font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{city.name}</h3>
              <p className="text-gray-400 text-sm">{city.province}</p>
            </div>
          </div>

          {/* Weather Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <Wind size={20} className="text-gray-400 shrink-0" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Wind</p>
                <p className="font-bold">{city.wind} km/h {city.windDir}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Droplets size={20} className="text-gray-400 shrink-0" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Humiditeit</p>
                <p className="font-bold">{city.humidity}%</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Eye size={20} className="text-gray-400 shrink-0" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Sigbaarheid</p>
                <p className="font-bold">{city.visibility} km</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Sunrise size={14} className="text-amber-400" />
                  <span className="text-sm">{city.sunrise}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sunset size={14} className="text-orange-400" />
                  <span className="text-sm">{city.sunset}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Day Forecast */}
        <div className="bg-card rounded-xl border border-border overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-border bg-muted">
            <h3 className="text-lg font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
              7-dag vooruitsig &mdash; {city.name}
            </h3>
          </div>
          <div className="divide-y divide-border">
            {city.forecast.map((day) => (
              <div
                key={day.day}
                className="flex items-center justify-between px-6 py-4 hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-4 min-w-[100px]">
                  <span className="font-bold text-brand-navy dark:text-foreground w-8">{day.day}</span>
                  {renderIcon(day.icon, 'w-6 h-6 ' + (day.icon === 'sun' ? 'text-amber-400' : day.icon === 'cloud-rain' ? 'text-blue-500' : day.icon === 'cloud' ? 'text-muted-foreground' : 'text-gray-500'))}
                  <span className="text-sm text-muted-foreground hidden sm:inline">{day.condition}</span>
                </div>
                <div className="flex items-center gap-6">
                  {day.rain > 0 && (
                    <div className="flex items-center gap-1 text-sm text-blue-500">
                      <Droplets size={14} />
                      <span>{day.rain}%</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-bold text-brand-navy dark:text-foreground">{day.high}°</span>
                    <span className="text-muted-foreground">/</span>
                    <span className="text-muted-foreground">{day.low}°</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Cities Overview */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted">
            <h3 className="text-lg font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
              Alle stede oorsig
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {CITIES.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setSelectedCity(i)}
                className={`p-6 text-left hover:bg-muted transition-colors ${
                  selectedCity === i ? 'bg-brand-red/5 ring-1 ring-brand-red/20' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{c.name}</h4>
                  <span className="text-2xl font-bold text-brand-navy dark:text-foreground">{c.temp}°</span>
                </div>
                <p className="text-sm text-muted-foreground">{c.condition}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Wind size={12} /> {c.wind} km/h
                  </span>
                  <span className="flex items-center gap-1">
                    <Droplets size={12} /> {c.humidity}%
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

      </PageContainer>

      {/* FAQ Section */}
      <PageFAQSection
        items={WEATHER_FAQS}
        description="Vrae oor ons weerdiens en voorspellings."
      />
    </div>
  );
};