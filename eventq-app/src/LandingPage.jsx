import React, { useEffect, useRef } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  BarChart3,
  BrainCircuit,
  ChartNoAxesCombined,
  ChevronRight,
  Database,
  MapPin,
  Network,
  Radar,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  Zap
} from 'lucide-react';

const features = [
  {
    number: '01',
    icon: Radar,
    title: 'Event impact intelligence',
    description: 'Bring traffic, crowd, parking, transit and noise indicators together to understand the wider impact of an event.'
  },
  {
    number: '02',
    icon: BrainCircuit,
    title: 'Machine learning insights',
    description: 'Explore clustering, classification and prediction workflows to uncover patterns in event-impact data.'
  },
  {
    number: '03',
    icon: Network,
    title: 'Data mining & associations',
    description: 'Discover relationships between event characteristics and impact patterns through analytical techniques.'
  },
  {
    number: '04',
    icon: MapPin,
    title: 'Pune-focused spatial view',
    description: 'Explore event activity across Pune areas and understand how location changes the impact picture.'
  }
];

const workflow = [
  { step: '01', title: 'Discover', text: 'Explore events, locations and the data behind each record.', icon: Target },
  { step: '02', title: 'Analyse', text: 'Study impact dimensions, trends and relationships.', icon: ChartNoAxesCombined },
  { step: '03', title: 'Predict', text: 'Use the prediction workspace to examine potential event impact.', icon: Zap }
];


function PuneHeroVisual() {
  return (
    <div className="ep-pune-hero relative h-[330px] w-full overflow-hidden rounded-[28px] border border-[#347d76]/50 bg-[#0b1d29] sm:h-[420px]">
      <img
        src="/pune-hero.jpg"
        alt="Cinematic Pune city scene inspired by Shaniwar Wada at dusk"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06121d]/85 via-[#071722]/20 to-[#071722]/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06121d]/35 via-transparent to-transparent" />
      <div className="absolute left-4 top-4 rounded-xl border border-white/15 bg-[#071722]/75 px-3 py-2 backdrop-blur-md">
        <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#72e5d0]">Urban signal</p>
        <p className="mt-1 text-xs font-semibold text-white">Pune · India</p>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-[#55dbc5]/30 bg-[#071722]/80 px-3 py-2 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#55dbc5] shadow-[0_0_12px_#55dbc5]" />
        <span className="text-[9px] font-bold uppercase tracking-[.14em] text-white">Spatial intelligence</span>
      </div>
    </div>
  );
}

export default function LandingPage({ onEnterDashboard }) {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const targets = page.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -35px 0px' }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="ep-page min-h-screen overflow-hidden bg-[#07111d] font-sans text-slate-100 selection:bg-[#55dbc5]/30">

      <style>{`
        .ep-page { scroll-behavior: smooth; }
        .ep-page [data-reveal] {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 700ms ease, transform 700ms cubic-bezier(.2,.7,.2,1);
        }
        .ep-page [data-reveal].is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .ep-page article[data-reveal] { transition-delay: 80ms; }
        .ep-city-illustration, .ep-pune-hero { animation: ep-city-float 7s ease-in-out infinite; }
        .ep-city-illustration svg { transition: transform 900ms ease; }
        .ep-city-illustration:hover svg { transform: scale(1.025); }
        .ep-page article { transition: transform 260ms ease, border-color 260ms ease, background 260ms ease; }
        .ep-page button, .ep-page a { -webkit-tap-highlight-color: transparent; }
        .ep-dashboard-image { display: block; }
        .ep-page #dashboard-preview .relative.overflow-hidden {
          box-shadow: 0 28px 90px rgba(0,0,0,.42), 0 0 55px rgba(85,219,197,.07);
          transition: box-shadow 350ms ease, transform 350ms ease;
        }
        .ep-page #dashboard-preview .relative.overflow-hidden:hover {
          box-shadow: 0 32px 100px rgba(0,0,0,.5), 0 0 70px rgba(85,219,197,.13);
          transform: translateY(-3px);
        }
        @keyframes ep-city-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        /* Mobile-first refinements */
        @media (max-width: 640px) {
          .ep-page header > div {
            padding: 11px 16px;
            gap: 10px;
          }
          .ep-page header a > span:first-child {
            padding: 8px;
          }
          .ep-page header a > span:first-child svg {
            width: 18px;
            height: 18px;
          }
          .ep-page header a > span:last-child > span:first-child {
            font-size: 16px;
          }
          .ep-page header a > span:last-child > span:last-child {
            font-size: 8px;
            letter-spacing: .14em;
          }
          .ep-page header button {
            white-space: nowrap;
            padding: 9px 11px;
            font-size: 10px;
          }
          .ep-page main > section:first-child {
            gap: 30px;
            padding: 44px 18px 48px;
          }
          .ep-page main > section:first-child h1 {
            max-width: 10ch;
            font-size: clamp(2.65rem, 11.5vw, 3.4rem);
            line-height: .99;
            letter-spacing: -.055em;
          }
          .ep-page main > section:first-child p {
            font-size: 13px;
            line-height: 1.75;
          }
          .ep-page main > section:first-child .ep-city-illustration, .ep-pune-hero {
            height: 235px;
            border-radius: 22px;
          }
          .ep-page main > section:first-child .ep-city-illustration > div:first-child {
            border-radius: 22px;
          }
          .ep-page main > section:first-child .ep-city-illustration svg {
            min-width: 100%;
          }
          .ep-page main > section:first-child button,
          .ep-page main > section:first-child a[href="#capabilities"] {
            width: 100%;
            justify-content: center;
            min-height: 48px;
          }
          .ep-page main > section:nth-child(2) > div {
            padding-top: 12px;
            padding-bottom: 12px;
          }
          .ep-page main > section:nth-child(2) > div > div {
            padding: 18px 10px;
          }
          .ep-page main > section:nth-child(2) p:first-child {
            font-size: 27px;
          }
          .ep-page #platform,
          .ep-page #capabilities,
          .ep-page #workflow {
            padding: 58px 18px;
          }
          .ep-page #capabilities article {
            padding: 21px;
          }
          .ep-page #dashboard-preview {
            padding-top: 0;
            padding-bottom: 0;
          }
          .ep-page #dashboard-preview > div {
            padding: 58px 16px;
          }
          .ep-page #dashboard-preview h2 {
            font-size: 27px;
            line-height: 1.15;
          }
          .ep-page #dashboard-preview .relative.overflow-hidden {
            border-radius: 17px;
            padding: 6px;
          }
          .ep-page #dashboard-preview .relative.overflow-hidden > img {
            border-radius: 10px;
          }
          .ep-page #dashboard-preview button {
            width: 100%;
            justify-content: center;
          }
          .ep-page footer > div {
            padding: 22px 18px;
          }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .ep-page main > section:first-child {
            gap: 38px;
            padding-top: 62px;
            padding-bottom: 64px;
          }
          .ep-page main > section:first-child h1 {
            font-size: clamp(3rem, 7vw, 4.2rem);
          }
          .ep-page main > section:first-child .ep-city-illustration, .ep-pune-hero {
            height: 300px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ep-page *, .ep-page *::before, .ep-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
          .ep-page [data-reveal] { opacity: 1; transform: none; }
        }
      `}</style>

      <header className="relative z-20 border-b border-white/[0.07] bg-[#07111d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="rounded-xl border border-[#347d76]/60 bg-[#14343b] p-2.5 text-[#72e5d0]">
              <BarChart3 className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-lg font-bold tracking-tight text-white">EventPulse<span className="text-[#55dbc5]">.</span></span>
              <span className="block text-[9px] font-semibold uppercase tracking-[.2em] text-slate-500">Urban intelligence · Pune</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-medium text-slate-400 md:flex">
            <a className="transition hover:text-white" href="#platform">Platform</a>
            <a className="transition hover:text-white" href="#capabilities">Capabilities</a>
            <a className="transition hover:text-white" href="#workflow">How it works</a>
          </nav>

          <button onClick={onEnterDashboard} className="group inline-flex items-center gap-2 rounded-xl border border-[#347d76] bg-[#143c40] px-4 py-2.5 text-xs font-bold text-[#72e5d0] transition hover:bg-[#1a5051]">
            Open dashboard <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>
      </header>

      <main id="home">
        <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:pb-28">
          <div className="pointer-events-none absolute -left-48 top-0 h-[440px] w-[440px] rounded-full bg-[#1c8c80]/10 blur-[120px]" />
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#347d76]/50 bg-[#123239]/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.18em] text-[#72e5d0]">
              <Sparkles className="h-3.5 w-3.5" /> Pune event impact intelligence
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-.045em] text-white sm:text-5xl lg:text-[62px]">
              See the city
              <span className="block text-[#65dcca]">before the event begins.</span>
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Understand how events can influence traffic, crowds, parking and urban mobility.
              EventPulse brings data analysis and machine-learning workflows into one Pune-focused intelligence workspace.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={onEnterDashboard} className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#55dbc5] px-6 py-3.5 text-sm font-extrabold text-[#06201f] shadow-[0_12px_40px_rgba(85,219,197,.16)] transition hover:-translate-y-0.5 hover:bg-[#75ead7]">
                Explore the dashboard <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <a href="#capabilities" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/[0.06]">
                Discover capabilities <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[.14em] text-slate-500">
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#55dbc5]" /> Data-led exploration</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#55dbc5]" /> Predictive workflows</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#55dbc5]" /> Pune-focused</span>
            </div>
          </div>
          <div className="relative z-10">
            <div className="absolute -inset-5 rounded-[36px] bg-[#55dbc5]/[0.04] blur-2xl" />
            <PuneHeroVisual />
          </div>
        </section>

        <section className="border-y border-white/[0.07] bg-[#0b1927]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:px-8 md:grid-cols-4">
            {[
              ['500', 'Sample event records'],
              ['14', 'Pune areas represented'],
              ['5', 'Impact dimensions'],
              ['1', 'Unified intelligence workspace']
            ].map(([value, label]) => (
              <div key={label} className="px-3 py-7 sm:px-6 sm:py-9">
                <p className="text-3xl font-semibold tracking-tight text-[#65dcca] sm:text-4xl">{value}</p>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[.14em] text-slate-500 sm:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section data-reveal id="platform" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:py-28">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#65dcca]">The platform</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">One view of event impact across the city.</h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-sm leading-7 text-slate-400 sm:text-base">
              Large gatherings can place pressure on multiple parts of a city at once. EventPulse is designed to bring those signals into one place, helping users explore event data, compare impact indicators and investigate possible outcomes.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d1b2a] p-5">
                <Activity className="h-5 w-5 text-[#65dcca]" />
                <h3 className="mt-4 text-sm font-bold text-white">Understand urban pressure</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">Review traffic, crowd, parking, transit and noise indicators together.</p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d1b2a] p-5">
                <ShieldCheck className="h-5 w-5 text-[#65dcca]" />
                <h3 className="mt-4 text-sm font-bold text-white">Explore possible outcomes</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">Use the prediction workspace to examine event scenarios and model outputs.</p>
              </div>
            </div>
          </div>
        </section>

        <section data-reveal id="capabilities" className="border-y border-white/[0.07] bg-[#0b1927]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#65dcca]">Platform capabilities</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">From raw event data to useful insight.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">A set of connected analytical tools for exploring the event-impact picture from different angles.</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ number, icon: Icon, title, description }) => (
                <article data-reveal key={number} className="group rounded-2xl border border-white/[0.08] bg-[#0d1b2a] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#347d76]/70 hover:bg-[#102333]">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[.2em] text-slate-600">{number}</span>
                    <Icon className="h-5 w-5 text-[#65dcca] transition group-hover:scale-110" />
                  </div>
                  <h3 className="mt-8 text-base font-bold text-white">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-slate-500">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section data-reveal id="workflow" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#65dcca]">How it works</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Discover. Analyse. Predict.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">Move from event exploration to analytical insight and scenario investigation in one workspace.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {workflow.map(({ step, title, text, icon: Icon }) => (
              <div key={step} className="relative rounded-2xl border border-white/[0.08] bg-[#0d1b2a] p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[.2em] text-[#65dcca]">{step}</span>
                  <Icon className="h-5 w-5 text-slate-500" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </section>


        <section data-reveal id="dashboard-preview" className="border-y border-white/[0.07] bg-[#0b1927]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#65dcca]">Inside the workspace</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                One workspace. A clearer view of event impact.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Explore the EventPulse dashboard, from city-level indicators and risk distribution
                to event analytics and prediction tools.
              </p>
            </div>

            <div className="relative mt-12">
              <div className="absolute -inset-5 rounded-[32px] bg-[#55dbc5]/[0.07] blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-[#36536a] bg-[#081321] p-2 shadow-[0_30px_100px_rgba(0,0,0,.45)] sm:p-3">
                <div className="mb-2 flex items-center gap-2 px-2 py-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f5b95c]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#55dbc5]" />
                  <span className="ml-3 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-[9px] text-slate-500">
                    EventPulse / Intelligence Dashboard
                  </span>
                </div>
                <img
                  src="/dashboard-preview.png"
                  alt="Screenshot of the EventPulse Pune event impact analytics dashboard"
                  className="ep-dashboard-image block h-auto w-full rounded-lg border border-white/[0.06]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="max-w-xl text-xs leading-6 text-slate-500">
                A preview of the current application interface. Open the live workspace to explore
                its interactive sections and analytical tools.
              </p>
              <button
                onClick={onEnterDashboard}
                className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#55dbc5] px-5 py-3 text-sm font-extrabold text-[#06201f] transition hover:-translate-y-0.5 hover:bg-[#75ead7]"
              >
                Explore the dashboard <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section data-reveal className="px-5 pb-20 sm:px-8 lg:pb-28">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-[#347d76]/50 bg-[linear-gradient(115deg,#12363b,#102333_58%,#101b2a)] px-7 py-12 sm:px-12 sm:py-16">
            <div className="absolute -right-16 -top-28 h-72 w-72 rounded-full bg-[#55dbc5]/10 blur-3xl" />
            <div className="relative max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#8ce9db]">Enter the workspace</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Explore the EventPulse intelligence dashboard.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300/75">Open the existing application to explore the dashboard, event directory, Pune map, analytics and prediction tools.</p>
              <button onClick={onEnterDashboard} className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#55dbc5] px-6 py-3.5 text-sm font-extrabold text-[#06201f] transition hover:-translate-y-0.5 hover:bg-[#75ead7]">
                Enter EventPulse <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.07] bg-[#050d16]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-semibold tracking-wide text-slate-400">EventPulse<span className="text-[#55dbc5]">.</span> <span className="font-normal text-slate-600">Urban Intelligence · Pune</span></p>
          <p>Event impact analysis & prediction · Academic project</p>
        </div>
      </footer>
    </div>
  );
}
