import React from 'react';

const CustomSection = ({
  children,
  gradientColor = 'rgba(143, 143, 143, 0.67)',
  height = 'h-px',
}: any) => {
  return (
    <section className=" px-6 py-12 sm:py-24 relative rounded-3xl border-t border-slate-6 mt-20 ">
      <div
        aria-hidden="true"
        className={`left-1/2 top-0 w-[300px] center pointer-events-none absolute ${height} max-w-full -translate-x-1/2 -translate-y-1/2`}
        style={{
          background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, ${gradientColor} 50%, rgba(0, 0, 0, 0) 100%)`,
        }}
      ></div>

      <div
        aria-hidden="true"
        className="-top-1 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px] center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)',
        }}
      ></div>

      {children}
    </section>
  );
};

export default CustomSection;
