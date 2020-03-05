import { createContext } from "react";
import { ReactComponent as CabanaLogo } from "../images/cabana.svg";
import { ReactComponent as MonoLogo } from "../images/mono.svg";
import { ReactComponent as ValtechLogo } from "../images/valtech.svg";
import { ReactComponent as SuperbLogo } from "../images/superb.svg";

export const ExperienceContext = createContext({
  title: {
    value: "Experience",
    icon: "🛠️"
  },
  items: [
    {
      period: {
        start: "June, 2019",
        end: "Present"
      },
      title: "Frontend Developer",
      subtitle:
        "Design systems, React & Vue.js development at a global digital agency.",
      description: [
        "Developed an accessible, React driven design system for one of Europe's largest low-cost airlines booking platform.",
        "Took part in building a multi-brand corporate identity and e-commerce platforms for a multinational telecommunications company."
      ],
      institution: {
        name: "Valtech",
        logo: ValtechLogo,
        url: "https://www.valtech.com/"
      }
    },
    {
      period: {
        start: "September, 2018",
        end: "June, 2019"
      },
      title: "Frontend Engineer",
      subtitle:
        "React, Redux & Node.js powering the web app of a booking system for the world's best restaurants.",
      description: [
        "Introduced a continuous delivery strategy which resulted in more often and better quality feature releases.",
        "Planned and set in motion monolithic API migration to microservice architecture.",
        "Started design systems which scaled UI consistency, feature quality and reduced feature delivery times.",
        "Introduced microfronteds architecture which allowed our team to quickly phase out features driven by legacy code and switch them out with new ones.",
        "Drove agile processes adaption"
      ],
      institution: {
        name: "Superb",
        logo: SuperbLogo,
        url: "https://www.superbexperience.com/"
      }
    },
    {
      period: {
        start: "June, 2017",
        end: "September, 2018"
      },
      title: "Frontend Developer",
      subtitle:
        "Vue.js and React development for large-scale CMS (Sitecore/Episerver) projects at a global digital agency.",
      description: [],
      institution: {
        name: "Valtech",
        logo: ValtechLogo,
        url: "https://www.valtech.com/"
      }
    },
    {
      period: {
        start: "January, 2017",
        end: "May, 2017"
      },
      title: "Frontend Developer",
      subtitle: "",
      description: [
        "Were responsible for automating the migration of websites to the Mono platform.",
        "Development of features for Mono Site Builder platform in Backbone.js, Node.js and PHP.",
        "Continuously improved the platform in order to align it with current technology trends."
      ],
      institution: {
        name: "Mono Solutions",
        logo: MonoLogo,
        url: "https://www.monosolutions.com/"
      }
    },
    {
      period: {
        start: "June, 2014",
        end: "December, 2016"
      },
      title: "Frontend Developer",
      subtitle: "",
      description: [
        "Developed user interfaces for Sitecore and Umbraco solutions using HTML, CSS and Javascript.",
        "Built single page applications using AngularJS.",
        "Took on backend development in NodeJS, PHP and .NET."
      ],
      institution: {
        name: "Cabana",
        logo: CabanaLogo,
        url: "https://www.cabana.dk/"
      }
    }
  ]
});
