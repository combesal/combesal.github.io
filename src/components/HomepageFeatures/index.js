import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Reduced Support Load',
    Svg: require('@site/static/img/undraw_ai-answers_uxgx.svg').default,
    description: (
      <>
        Self-service guides and FAQs that answer common questions before users ask,
        freeing your team to focus on complex issues.
      </>
    ),
  },
  {
    title: 'Built for Global Users',
    Svg: require('@site/static/img/undraw_world_bdnk.svg').default,
    description: (
      <>
        Clear, accessible docs written with non-native English speakers in mind.
        Perfect for international teams and multilingual markets.
      </>
    ),
  },
  {
    title: 'Fast, Collaborative, Scalable',
    Svg: require('@site/static/img/undraw_stepping-up_i0i7.svg').default,
    description: (
      <>
        I work with your engineers to document features as you ship, and build systems that scale as your product and team grow.
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
