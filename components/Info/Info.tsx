import Link from 'next/link';
import { ArrowRight, ArrowDown } from '@phosphor-icons/react';
import appStyles from '@styles/App.module.css';
import styles from './Info.module.css';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: [ '400', '700' ],
});

type InfoProps = {
  
}

const Info: React.FC<InfoProps> = (): JSX.Element => {
  return (
    <div id="intro" className={appStyles.pageHeight} style={{ scrollMarginTop: '100px' }}>
      <div id="top-container" className={styles.topContainer}>
        <section className={styles.infoBox}>
          <div className={styles.hero}>
            <h1 className={[styles.headline, cormorant.className].join(" ")}>
              Moin.<br />
              Ich bin{' '} 
              <Link
                href="/simon"
                className={ appStyles.teaserLink }
              >
                Simon.
              </Link>
            </h1>
            <p className={styles.subHeadline}>
              Ein Full-Stack-Entwickler aus dem schönen Oldenburg.
            </p>

            <p className={styles.subHeadline}>
              Außerdem liebe ich Basketball, {' '}
              arbeite gerne mit
              {' '}
              <Link href="/drechseln">
                Holz
              </Link>
              {' '}
              und fahre
              {' '}
              Rennrad.
              { /* 
              <Link href="/fahrrad" >Rennrad</Link>.
                 */}
            </p>
            <div className={ [appStyles.inlineContainer, styles.buttonContainer ].join(" ") } >
              <a
                className={ [appStyles.simpleButton, appStyles.primaryButton, appStyles.linkNoStyles].join(" ") }
                target="_blank" 
                rel="noopener noreferrer" 
                href="mailto:hej-simon@mailbox.org">
                { /* <span className={ appStyles.secondaryText }>simon.meyer@mailbox.org</span> */ }
                Schreib &apos;ne Mail
                <ArrowRight size="3vh" />
              </a>
              <a
                className={ [appStyles.actionButton, appStyles.pageLink].join(" ")}
                href="#projekte"
              >
                Projekte
                <ArrowDown size="3vh" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Info
