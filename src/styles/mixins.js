import { css } from "styled-components";

const mixins = {
  // backGroundRotation: css`
  //   animation-name: backgroundColorCycle;
  //   animation-duration: 90s;
  //   animation-iteration-count: infinite;
  //   animation-direction: alternate;
  //   animation-timing-function: linear;

  //   @keyframes backgroundColorCycle {
  //     0% {
  //       background: #a7d1ab;
  //     }
  //     25% {
  //       background: #d69382;
  //     }
  //     50% {
  //       background: #adcc9d;
  //     }
  //     75% {
  //       background: #9f87af;
  //     }
  //     100% {
  //       background: #89b6c4;
  //     }
  //   }
  // `,

  fadeIn: css`
    opacity: 1;
    animation-name: opacityFade;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 1s;

    @keyframes opacityFade {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,

  h2: css`
    padding-top: 25px;
    margin-top: 0;
    font-family: var(--bold-font);
    color: var(--main-red);
  `,

  sectionAttrs: css`
    padding: var(--section-padding);
    max-width: 900px;
  `,

  pLetterAttrs: css`
    font-family: var(--paragraph-font);
    color: var(--white);
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1rem;
  `,
};

export default mixins;
