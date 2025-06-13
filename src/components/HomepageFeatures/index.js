import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Clear, User-Focused Content',
    Svg: require('@site/static/img/undraw_user-flow_d1ya.svg').default,
    description: (
      <>
        I write clear, accessible documentation that helps users succeed, 
        from onboarding to advanced tasks.
      </>
    ),
  },
  {
    title: 'Efficient Collaboration',
    Svg: require('@site/static/img/undraw_notebook_8ihb.svg').default,
    description: (
      <>
        I work closely with engineers, designers, and subject matter experts 
        to create docs that reflect real user needs.
      </>
    ),
  },
  {
    title: 'Content That Scales',
    Svg: require('@site/static/img/undraw_body-text_b6qq.svg').default,
    description: (
      <>
        From style guides to structured content models, 
        I help build documentation that's maintainable and scalable.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
        <Heading as="h2" className="text--center">What I Bring to Your Team</Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
