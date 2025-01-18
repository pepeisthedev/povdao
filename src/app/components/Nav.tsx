const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M18.93 5.34a16.89 16.89 0 00-4.07-1.23.06.06 0 00-.07.03c-.18.32-.38.73-.52 1.05a15.72 15.72 0 00-4.57 0c-.14-.32-.35-.73-.52-1.05a.06.06 0 00-.07-.03c-1.39.23-2.77.64-4.07 1.23a.06.06 0 00-.03.02C2.55 9.77 1.75 14.08 2.14 18.33a.07.07 0 00.03.05 16.87 16.87 0 004.95 2.48.06.06 0 00.07-.02c.36-.48.68-.98.96-1.51a.06.06 0 00-.03-.08 10.82 10.82 0 01-1.56-.73.06.06 0 01-.01-.1c.1-.08.21-.16.31-.24a.06.06 0 01.06-.01c3.16 1.41 6.57 1.41 9.7 0a.06.06 0 01.06.01c.1.08.2.16.31.24a.06.06 0 01-.01.1c-.5.29-1.02.53-1.56.73a.06.06 0 00-.03.08c.28.53.6 1.03.96 1.51a.06.06 0 00.07.02 16.73 16.73 0 004.96-2.48.06.06 0 00.03-.05c.47-4.8-.78-8.77-3.31-12.37a.05.05 0 00-.03-.02zM8.7 15.75c-.98 0-1.78-.88-1.78-1.97 0-1.09.79-1.97 1.78-1.97s1.8.89 1.78 1.97c0 1.09-.79 1.97-1.78 1.97zm6.58 0c-.98 0-1.78-.88-1.78-1.97 0-1.09.79-1.97 1.78-1.97s1.78.89 1.78 1.97c0 1.09-.79 1.97-1.78 1.97z"/>
  </svg>
);


const Navigation = () => {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white font-bold">POV</span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/PoVDAO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
            >
              <XIcon />
            </a>
            <a
              href="https://discord.gg/your-invite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
            >
              <DiscordIcon />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;