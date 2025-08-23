export interface LinkItem {
  href: string;
  icon: string;
  name: string;
  description: string;
  colorClass?: string;
  hoverClass?: string;
  delay: string;
}

export const links: LinkItem[] = [
  {
    href: "https://pay.muhammadfiaz.com",
    icon: "💸",
    name: "Donate",
    description: "Support my work via pay.muhammadfiaz.com",
    colorClass: "bg-green-50 border-green-200 text-green-500",
    hoverClass: "hover:border-green-500 group-hover:text-green-700",
    delay: "0.1s"
  },
  {
    href: "https://github.com/sponsors/muhammad-fiaz",
    icon: "❤️",
    name: "Sponsor",
    description: "Support me on GitHub Sponsors",
    colorClass: "bg-white border-gray-100 text-blue-500",
    hoverClass: "hover:border-blue-500 group-hover:text-blue-700",
    delay: "0.25s"
  },
  {
    href: "https://github.com/muhammad-fiaz",
    icon: "🐙",
    name: "GitHub",
    description: "Open source projects & contributions",
    colorClass: "bg-white border-gray-100 text-blue-500",
    hoverClass: "hover:border-blue-500 group-hover:text-blue-700",
    delay: "0.4s"
  },
  {
  href: "https://discord.gg/zvqm4VZ3Pk",
    icon: "💬",
    name: "Discord Server",
    description: "Join the Fiaz's Community",
    colorClass: "bg-white border-gray-100 text-indigo-500",
    hoverClass: "hover:border-indigo-400 group-hover:text-indigo-700",
    delay: "0.55s"
  },
  {
    href: "https://www.linkedin.com/in/muhammad-fiaz-",
    icon: "🔗",
    name: "LinkedIn",
    description: "Connect with me professionally",
    colorClass: "bg-white border-gray-100 text-blue-400",
    hoverClass: "hover:border-blue-400 group-hover:text-blue-700",
    delay: "0.7s"
  },
  {
    href: "https://wakatime.com/@muhammadfiaz",
    icon: "⏰",
    name: "WakaTime",
    description: "My coding activity stats",
    colorClass: "bg-white border-gray-100 text-gray-500",
    hoverClass: "hover:border-gray-400 group-hover:text-black",
    delay: "0.85s"
  },
  {
    href: "http://muhammadfiaz.com",
    icon: "🌐",
    name: "Portfolio",
    description: "Visit my main website",
    colorClass: "bg-white border-gray-100 text-blue-500",
    hoverClass: "hover:border-blue-500 group-hover:text-blue-700",
    delay: "1s"
  },
  {
    href: "https://twitter.com/muhammadfiaz_",
    icon: "🐦",
    name: "Twitter (X)",
    description: "Follow me for updates",
    colorClass: "bg-white border-gray-100 text-blue-400",
    hoverClass: "hover:border-blue-400 group-hover:text-blue-700",
    delay: "1.15s"
  },
  {
    href: "https://dribbble.com/muhammadfiaz",
    icon: "🏀",
    name: "Dribbble",
    description: "My design shots",
    colorClass: "bg-white border-gray-100 text-pink-400",
    hoverClass: "hover:border-pink-400 group-hover:text-pink-600",
    delay: "1.3s"
  },
  {
    href: "mailto:contact@muhammadfiaz.com",
    icon: "✉️",
    name: "Contact Me",
    description: "Get in touch via email",
    colorClass: "bg-white border-gray-100 text-red-400",
    hoverClass: "hover:border-red-400 group-hover:text-red-600",
    delay: "1.45s"
  },
    {
      href: "https://orcid.org/0009-0001-5935-7878",
      icon: "🆔",
      name: "ORCID",
      description: "My ORCID researcher profile",
      colorClass: "bg-white border-gray-100 text-green-600",
      hoverClass: "hover:border-green-600 group-hover:text-green-800",
      delay: "1.6s"
    },
    {
      href: "https://dly.to/LQm0vGkFCsi",
      icon: "📰",
      name: "daily.dev Community",
  description: "Discover new AI tools, AI resources, and empowering developers with the latest technology updates.",
      colorClass: "bg-white border-gray-100 text-indigo-500",
      hoverClass: "hover:border-indigo-500 group-hover:text-indigo-700",
      delay: "1.75s"
    },
    {
      href: "https://app.daily.dev/muhammadfiaz",
      icon: "🌟",
      name: "daily.dev Profile",
      description: "My daily.dev developer profile",
      colorClass: "bg-white border-gray-100 text-blue-600",
      hoverClass: "hover:border-blue-600 group-hover:text-blue-800",
      delay: "1.9s"
    },
    {
      href: "https://fiaz.dev",
      icon: "🚀",
      name: "Fiaz Technologies",
      description: "Explore developer-first and user-centric technologies, next-generation solutions, and more.",
      colorClass: "bg-white border-gray-100 text-purple-600",
      hoverClass: "hover:border-purple-600 group-hover:text-purple-800",
      delay: "2.05s"
    }
];
