import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Faster onboarding',
    Svg: require('@site/static/img/undraw_setup-wizard.svg').default,
    description: (
      <>
        New hires find answers without asking. 
        Less time explaining, more time building.
      </>
    ),
  },
  {
    title: 'Less pressure on support',
    Svg: require('@site/static/img/undraw_chat-with-ai.svg').default,
    description: (
      <>
        Self-service content that handles the repetitive questions before they reach your team.
      </>
    ),
  },
  {
    title: 'Knowledge that works without you',
    Svg: require('@site/static/img/undraw_setup_fzje.svg').default,
    description: (
      <>
        Structure and systems so work doesn't stop when someone's unavailable, just joined, or just left.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
