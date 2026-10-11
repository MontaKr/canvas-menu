const menuColumnClass = "menu-col flex h-full flex-1 flex-col justify-center";
const menuLinkClass =
  "block text-[2.5rem] leading-[1.25] font-medium tracking-[-0.01em] text-white no-underline [@media(max-width:1000px)]:text-[1.75rem] [&_.word]:relative [&_.word]:translate-y-full [&_.word]:will-change-transform";
const sectionClass =
  "relative flex h-svh w-full items-center justify-center overflow-hidden";
const headingClass =
  "w-1/2 text-center leading-none font-[450] tracking-[-0.02em] [@media(max-width:1000px)]:w-[calc(100%-5rem)]";

function App() {
  return (
    <>
      <nav className="fixed top-0 left-0 z-10 flex w-full items-center justify-between p-6 mix-blend-difference">
        <div className="nav-logo w-32 translate-x-0 cursor-pointer p-4 will-change-transform">
          <a href="/">
            <img
              className="h-full w-full object-cover"
              src="/logo.svg"
              alt=""
            />
          </a>
        </div>

        <button className="nav-toggler group flex translate-x-0 cursor-pointer flex-col items-center justify-center gap-[5px] border-0 bg-transparent p-4 will-change-transform">
          <span className="h-[2px] w-10 bg-white transition-all duration-[400ms] ease-[ease] group-[.open]:[transform:translateY(3.5px)_rotate(45deg)_scaleX(0.75)]"></span>
          <span className="h-[2px] w-10 bg-white transition-all duration-[400ms] ease-[ease] group-[.open]:[transform:translateY(-3.5px)_rotate(-45deg)_scaleX(0.75)]"></span>
        </button>
      </nav>

      <div className="menu fixed top-0 left-0 h-svh w-full overflow-hidden bg-[#0a0a0a]">
        <div className="menu-container absolute top-0 left-0 flex h-[50svh] w-full gap-10 px-10 pt-24 pb-10 [@media(max-width:1000px)]:h-[65svh] [@media(max-width:1000px)]:flex-col [@media(max-width:1000px)]:gap-0">
          <div className={menuColumnClass}>
            <a className={menuLinkClass} href="/">
              Index
            </a>
            <a className={menuLinkClass} href="/">
              Field Notes
            </a>
            <a className={menuLinkClass} href="/">
              Archive
            </a>
          </div>

          <div className={menuColumnClass}>
            <a className={menuLinkClass} href="/">
              The Lab
            </a>
            <a className={menuLinkClass} href="/">
              Open Studio
            </a>
            <a className={menuLinkClass} href="/">
              Manifesto
            </a>
          </div>

          <div className={menuColumnClass}>
            <a className={menuLinkClass} href="/">
              Dispatches
            </a>
            <a className={menuLinkClass} href="/">
              Collaborate
            </a>
            <a className={menuLinkClass} href="/">
              Say Hello
            </a>
          </div>
        </div>
      </div>

      <div className="page fixed top-0 left-0 z-2 h-svh w-full overflow-hidden overflow-y-auto rounded-none [transform:translateY(0svh)_scale(1)] will-change-[transform,border-radius]">
        <section
          className={`hero ${sectionClass} bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat text-white`}
        >
          <h1 className={`${headingClass} text-[clamp(3rem,5vw,7rem)]`}>
            Engineering that holds up under pressure
          </h1>
        </section>

        <section className={`about ${sectionClass} bg-[#e3e3e3] text-black`}>
          <h3 className={`${headingClass} text-[clamp(2rem,4vw,6rem)]`}>
            Good work rarely announces itself. It shows up in small decisions,
            steady progress, and results that last over time.
          </h3>
        </section>

        <section className={`outro ${sectionClass} bg-[#1f1f1f] text-white`}>
          <h3 className={`${headingClass} text-[clamp(2rem,4vw,6rem)]`}>
            Simple ideas, done well, make work that lasts.
          </h3>
        </section>
      </div>
    </>
  );
}

export default App;
