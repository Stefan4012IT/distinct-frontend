import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const HomeHeroHeading = () => {
  const rootRef = useRef(null);
  const frameRef = useRef(null);
  const workBaseRef = useRef(null);
  const workFillRef = useRef(null);
  const restRef = useRef(null);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.set(frameRef.current, {
      autoAlpha: 1,
      clipPath: 'inset(0% 0% 100% 0%)',
      color: '#df6e32',
    });

    gsap.set(workBaseRef.current, {
      autoAlpha: 0,
      clipPath: 'inset(100% 0% 0% 0%)',
      transformOrigin: 'center center',
      color: '#ffffff',
    });

    gsap.set(workFillRef.current, {
      autoAlpha: 1,
      clipPath: 'inset(0% 0% 100% 0%)',
      color: '#df6e32',
    });

    gsap.set(restRef.current, {
      autoAlpha: 0,
      yPercent: 120,
    });

    const timeline = gsap.timeline({
      defaults: {
        ease: 'power3.out',
      },
    });

    timeline
      .to(frameRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
      },'+=1')
      .to(
        workBaseRef.current,
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          autoAlpha: 1,
          duration: 1,
          ease: 'power3.out',
        },
      )
      .to(workFillRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
      },'-=.2s')
      // .to(
      //   workBaseRef.current,
      //   {
      //     color: '#df6e32',
      //     duration: 0.4,
      //   },
      //   '-=0.1'
      // )
      // .to(
      //   frameRef.current,
      //   {
      //     yPercent: -140,
      //     autoAlpha: 0,
      //     duration: 0.5,
      //   },
      //   '<'
      // )
      .to(
        restRef.current,
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1,
        },
        '-=.75s'
      )
      // .fromTo(
      //   frameRef.current,
      //   {
      //     yPercent: 140,
      //     autoAlpha: 0,
      //   },
      //   {
      //     yPercent: 0,
      //     autoAlpha: 1,
      //     duration: 0.6,
      //   },
      //   '+=0.15'
      // );
  }, rootRef);

  return () => ctx.revert();
}, []);

  return (
    <h1 ref={rootRef} className="herro-heading">
      <span className="herro-heading__top-line">
        <span className="herro-heading__frame-mask">
          <span
            ref={frameRef}
            className="herro-heading__word herro-heading__word--frame"
          >
            Frame
          </span>
        </span>

        {/* <span
          ref={workRef}
          className="herro-heading__word herro-heading__word--work"
        >
          Work
        </span> */}
        <span className="herro-heading__word herro-heading__word--work-wrap">
          <span
            ref={workBaseRef}
            className="herro-heading__word herro-heading__word--work-base"
          >
            Work
          </span>

          <span
            ref={workFillRef}
            className="herro-heading__word herro-heading__word--work-fill"
          >
            Work
          </span>
      </span>
        
      </span>

      <span ref={restRef} className="herro-heading__rest">
        <span className="herro-heading__rest-line">for your</span>
        <span className="herro-heading__rest-line">business</span>
      </span>
    </h1>
  );
};

export default HomeHeroHeading;
