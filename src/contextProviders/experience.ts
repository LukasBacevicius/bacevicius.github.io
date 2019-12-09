import { createContext } from 'react';

export const ExperienceContext = createContext({
  title: 'Experience',
  items: [
      {
          period: {
              start: 'June, 2019',
              end: 'Present'
          },
          position: 'Frontend Developer',
          description: 'Duis quis enim sollicitudin, bibendum augue eget, facilisis mauris. Integer finibus felis ipsum, eu pulvinar mi consectetur sit amet. Duis ut tincidunt odio. Suspendisse vel libero hendrerit, viverra lectus ut, iaculis sem. Donec tempus iaculis tincidunt. Curabitur ornare, tellus ut ultrices egestas, tortor diam sodales risus, ut luctus arcu libero ac enim. In molestie mi eros, at egestas elit elementum placerat.',
          company: 'Valtech'
      },
      {
        period: {
            start: 'September, 2018',
            end: 'June, 2019'
        },
        position: 'Frontend Engineer',
        description: 'Duis quis enim sollicitudin, bibendum augue eget, facilisis mauris. Integer finibus felis ipsum, eu pulvinar mi consectetur sit amet. Duis ut tincidunt odio. Suspendisse vel libero hendrerit, viverra lectus ut, iaculis sem. Donec tempus iaculis tincidunt. Curabitur ornare, tellus ut ultrices egestas, tortor diam sodales risus, ut luctus arcu libero ac enim. In molestie mi eros, at egestas elit elementum placerat.',
        company: 'Superb'
    },
    {
        period: {
            start: 'June, 2017',
            end: 'September, 2018'
        },
        position: 'Frontend Developer',
        description: 'Duis quis enim sollicitudin, bibendum augue eget, facilisis mauris. Integer finibus felis ipsum, eu pulvinar mi consectetur sit amet. Duis ut tincidunt odio. Suspendisse vel libero hendrerit, viverra lectus ut, iaculis sem. Donec tempus iaculis tincidunt. Curabitur ornare, tellus ut ultrices egestas, tortor diam sodales risus, ut luctus arcu libero ac enim. In molestie mi eros, at egestas elit elementum placerat.',
        company: 'Valtech'
    },
    {
        period: {
            start: 'January, 2017',
            end: 'June, 2017'
        },
        position: 'Frontend Developer',
        description: 'Duis quis enim sollicitudin, bibendum augue eget, facilisis mauris. Integer finibus felis ipsum, eu pulvinar mi consectetur sit amet. Duis ut tincidunt odio. Suspendisse vel libero hendrerit, viverra lectus ut, iaculis sem. Donec tempus iaculis tincidunt. Curabitur ornare, tellus ut ultrices egestas, tortor diam sodales risus, ut luctus arcu libero ac enim. In molestie mi eros, at egestas elit elementum placerat.',
        company: 'Mono Solutions'
    },
    {
        period: {
            start: 'January, 2017',
            end: 'May, 2017'
        },
        position: 'Frontend Developer',
        description: 'Duis quis enim sollicitudin, bibendum augue eget, facilisis mauris. Integer finibus felis ipsum, eu pulvinar mi consectetur sit amet. Duis ut tincidunt odio. Suspendisse vel libero hendrerit, viverra lectus ut, iaculis sem. Donec tempus iaculis tincidunt. Curabitur ornare, tellus ut ultrices egestas, tortor diam sodales risus, ut luctus arcu libero ac enim. In molestie mi eros, at egestas elit elementum placerat.',
        company: 'Mono Solutions'
    },
    {
        period: {
            start: 'June, 2014',
            end: 'December, 2016'
        },
        position: 'Frontend Developer',
        description: 'Duis quis enim sollicitudin, bibendum augue eget, facilisis mauris. Integer finibus felis ipsum, eu pulvinar mi consectetur sit amet. Duis ut tincidunt odio. Suspendisse vel libero hendrerit, viverra lectus ut, iaculis sem. Donec tempus iaculis tincidunt. Curabitur ornare, tellus ut ultrices egestas, tortor diam sodales risus, ut luctus arcu libero ac enim. In molestie mi eros, at egestas elit elementum placerat.',
        company: 'Cabana'
    }
  ]
});