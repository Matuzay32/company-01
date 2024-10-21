import React from 'react';

const Card = () => {
  return (
    <button
      type="button"
      role="tab"
      aria-selected="true"
      aria-controls="radix-:r90:-content-Intuitive analytics"
      data-state="active"
      id="radix-:r90:-trigger-Intuitive analytics"
      className="group relative h-[3.75rem] overflow-hidden rounded-2xl border border-slate-6 p-6 md:h-[5.625rem] outline-none focus-visible:ring-2 focus-visible:ring-slate-6 data-[state='active']:border-slate-6"
      data-orientation="horizontal"
      data-radix-collection-item=""
    >
      <span className="absolute inset-px z-10 grid place-items-center rounded-2xl group-data-[state='active']:bg-black group-data-[state='active']:bg-gradient-to-b group-data-[state='active']:from-white/[3%] group-data-[state='active']:via-white/[1%] group-data-[state='active']:to-black">
        <div className="flex h-full w-full items-center gap-2 px-4 py-2 text-left md:gap-4 md:p-6">
          <div className="align-center flex h-10 w-10 justify-center rounded-xl border-slate-6 bg-gradient-to-bl from-white/[4%] p-2 text-slate-12 group-data-[state='active']:text-green-9 md:border">
            {/* <div className="-mt-[1px] hidden group-data-[state='active']:block">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.625 18.5H6.05a.555.555 0 0 1-.551-.552v-5.514a.55.55 0 0 1 .551-.551h2.574a.55.55 0 0 1 .551.551v5.514c0 .302-.25.552-.551.552Zm-2.022-1.103h1.47v-4.411h-1.47v4.411ZM13.402 18.499H10.83a.555.555 0 0 1-.552-.551V6.55c0-.301.25-.551.552-.551h2.573c.302 0 .552.25.552.551v11.397c0 .301-.25.551-.552.551Zm-2.022-1.103h1.47V7.103h-1.47v10.293ZM18.183 18.498H15.61a.555.555 0 0 1-.551-.55V9.491c0-.302.25-.552.551-.552h2.573c.302 0 .552.25.552.552v8.455c0 .302-.25.552-.552.552Zm-2.021-1.102h1.47v-7.353h-1.47v7.353Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div> */}
            <div className="flex items-center justify-center group-data-[state='active']:hidden">
              <div style={{ width: '18px', height: '18px' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                  width="500"
                  height="500"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ width: '100%', height: '100%' }}
                >
                  <defs>
                    <clipPath id="__lottie_element_252">
                      <rect width="500" height="500" x="0" y="0"></rect>
                    </clipPath>
                    <clipPath id="__lottie_element_255">
                      <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_252)">
                    <g clipPath="url(#__lottie_element_255)" opacity="1">
                      <g className="primary design" opacity="1">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fillOpacity="0"
                          className="primary"
                          stroke="rgb(255,255,255)"
                          strokeOpacity="1"
                          strokeWidth="1.5"
                          d="M-1.75,3.75 C-1.75,3.75 1.75,3.75 1.75,3.75 C1.75,3.75 1.7509093284606934,-5.561733245849609 1.7509093284606934,-5.561733245849609 C1.7509093284606934,-5.561733245849609 -1.7490906715393066,-5.561733245849609 -1.7490906715393066,-5.561733245849609 C-1.7490906715393066,-5.561733245849609 -1.75,3.75 -1.75,3.75z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <h4 className="font-book font-styling font-display text-base tracking-tight text-slate-12">
            Intuitive analytics
          </h4>
        </div>
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 z-0 scale-x-[1.5] blur animate-disco-border group-data-[state='active']:bg-gradient-conic group-data-[state='active']:from-green-11 group-data-[state='active']:to-transparent"
      ></span>
    </button>
  );
};

export default Card;
