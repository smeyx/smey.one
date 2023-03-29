import Link from 'next/link';
import { ArrowRight, ArrowDown } from '@phosphor-icons/react';
import appStyles from '@styles/App.module.css';
import styles from './Info.module.css';

type InfoProps = {
  
}

const Info: React.FC<InfoProps> = (): JSX.Element => {
  return (
    <div id="intro" className={appStyles.pageHeight} style={{ scrollMarginTop: '100px' }}>
      <div id="top-container" className={styles.topContainer}>
        <section className={styles.infoBox}>
          <div className={styles.hero}>
            <h1 className={[styles.headline].join(" ")}>
              Moin.<br />
              Ich bin Simon,
            </h1>
            <h2 className={styles.subHeadline}>
              ein Full-Stack-Entwickler aus dem schönen Oldenburg.
            </h2>

            <h2 className={styles.subHeadline}>
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
            </h2>
            <div className={ [appStyles.inlineContainer, styles.buttonContainer ].join(" ") } >
              <a
                className={ [appStyles.actionButton, appStyles.pageLink].join(" ") }
                target="_blank" 
                rel="noopener noreferrer" 
                href="mailto:simon.meyer@mailbox.org">
                { /* <span className={ appStyles.secondaryText }>simon.meyer@mailbox.org</span> */ }
                Schreib &apos;ne Mail
                <ArrowRight size="1rem" />
              </a>
              <a
                className={ [appStyles.actionButton, appStyles.pageLink].join(" ")}
                href="#portfolio"
              >
                Portfolio
                <ArrowDown size="1rem" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Info