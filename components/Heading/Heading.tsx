import React from 'react';
import styles from './Heading.module.scss';

const Heading: React.FC = () => (
  <div className={styles.Heading} data-testid="Heading">
    Heading Component
  </div>
);

export default Heading;
