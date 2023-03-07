import type { ReactElement } from 'react';
import { useRef } from 'react';
import introStyles from './Intro.module.css';
import appStyles from '@styles/App.module.css';
import Link from 'next/link';
import Image from 'next/image';
import BackgroundImage from '@images/bg_small.jpg';


export interface IntroProps {};

export default function Intro(props: IntroProps): ReactElement {
  return (
    <div className={appStyles.container}>
      <div className={introStyles.topContainer}>
        <div className={introStyles.imageContainer}>
          <Image className={introStyles.bgImage} src={BackgroundImage} alt="a programmer in the wild" />
        </div>
        <div className={introStyles.infoBox}>
          <div className={introStyles.hero}>
            <h1 className={introStyles.headline}>
              Moin. Ich bin Simon,
            </h1>
            <h2 className={introStyles.subHeadline}>
              ein Full-Stack-Entwickler aus dem schönen Oldenburg. <br />

            </h2>
            <h2 className={introStyles.subHeadline}>
              Außerdem mag ich Basketball, {' '}
              drehe krumme Dinger aus
              {' '}
              <Link href="/drehen">
                Holz
              </Link>
              {' '}
              und fahre
              {' '}
              <Link href="/fahrrad">Fahrrad</Link>.
            </h2>
          </div>
          <a className={introStyles.mailMeButton} target="_blank" rel="noopener noreferrer" href="mailto:simon.meyer@mailbox.org">
            Schreib &apos;ne Mail
          </a>
        </div>
      </div>
    </div>
  );
}
