import { css } from "styled-components";

const mixins = {
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
    max-width: 600px;
  `,
};

export default mixins;
