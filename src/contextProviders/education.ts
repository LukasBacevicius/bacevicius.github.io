import { createContext } from 'react';
import { ReactComponent as KeaLogo } from '../images/kea.svg';

export const EducationContext = createContext({
  title: 'Education 📚',
  items: [
      {
          period: {
              start: 'August, 2015',
              end: 'December, 2016'
          },
          title: `Bachelor's degree, Web Development`,
          description: '',
          institution: {
            name: 'KEA - Københavns Erhvervsakademi',
            logo: KeaLogo,
            url: 'https://kea.dk/'
        }
      },
      {
        period: {
            start: 'August, 2013',
            end: 'June, 2015'
        },
        title: `AP degree, Multimedia Design and Communication`,
        description: '',
        institution: {
            name: 'KEA - Københavns Erhvervsakademi',
            logo: KeaLogo,
            url: 'https://kea.dk/'
        }
    }
  ]
});