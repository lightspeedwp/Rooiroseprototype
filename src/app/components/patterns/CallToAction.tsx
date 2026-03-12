import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  theme?: 'dark' | 'light' | 'brand';
}

export const CallToAction = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink, 
  backgroundImage,
  theme = 'brand' 
}: CallToActionProps) => {
  const navigate = useNavigate();

  const themeStyles = {
    dark: 'bg-brand-navy dark:bg-background text-white',
    light: 'bg-gray-100 dark:bg-card text-brand-navy dark:text-foreground',
    brand: 'bg-brand-red text-white',
  };

  const buttonStyles = {
    dark: 'bg-white text-brand-navy hover:bg-gray-200',
    light: 'bg-brand-red text-white hover:bg-brand-red-hover',
    brand: 'bg-brand-navy text-white hover:bg-brand-navy-dark',
  };

  return (
    <div className={`relative overflow-hidden rounded-xl ${themeStyles[theme]} py-16 px-6 md:px-12 text-center md:text-left`}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        </div>
      )}
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1440px] mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-normal mb-4 has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>{title}</h2>
          <p className="text-lg opacity-90">{description}</p>
        </div>
        <div className="shrink-0">
          <Button 
            onClick={() => navigate(buttonLink)}
            className={`${buttonStyles[theme]} font-bold px-8 py-6 h-auto text-lg`}
          >
            {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};