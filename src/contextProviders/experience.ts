import { createContext } from 'react';
import { ReactComponent as CabanaLogo } from '../images/cabana.svg';
import { ReactComponent as  MonoLogo } from '../images/mono.svg';
import { ReactComponent as ValtechLogo } from '../images/valtech.svg';
import { ReactComponent as SuperbLogo } from '../images/superb.svg';


export const ExperienceContext = createContext({
  title: {
      value: 'Experience',
      icon: '🛠️',
  },
  items: [
      {
          period: {
              start: 'June, 2019',
              end: 'Present'
          },
          title: 'Frontend Developer',
          description: '',
          institution: {
            name: 'Valtech',
            logo: ValtechLogo,
            url: 'https://www.valtech.com/'
        }
      },
      {
        period: {
            start: 'September, 2018',
            end: 'June, 2019'
        },
        title: 'Frontend Engineer',
        description: '',
        institution: {
            name: 'Superb',
            logo: SuperbLogo,
            url: 'https://www.superbexperience.com/'
        }
    },
    {
        period: {
            start: 'June, 2017',
            end: 'September, 2018'
        },
        title: 'Frontend Developer',
        description: '',
        institution: {
            name: 'Valtech',
            logo: ValtechLogo,
            url: 'https://www.valtech.com/'
        }
    },
    {
        period: {
            start: 'January, 2017',
            end: 'May, 2017'
        },
        title: 'Frontend Developer',
        description: '',
        institution: {
            name: 'Mono Solutions',
            logo: MonoLogo,
            url: 'https://www.monosolutions.com/'
        }
    },
    {
        period: {
            start: 'June, 2014',
            end: 'December, 2016'
        },
        title: 'Frontend Developer',
        description: '',
        institution: {
            name: 'Cabana',
            logo: CabanaLogo,
            url: 'https://www.cabana.dk/'
        }
    }
  ]
});