import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';
import { StyleSheet, css } from 'aphrodite';

const BodySectionWithMarginBottom = ({title, children}) => {
  return (
    <div className={css(styles.cmarginBottom)}>
      <BodySection title={title}>{children}</BodySection>
    </div>
  )
}
const styles = StyleSheet.create({
  marginBottom: '40px'
})

BodySectionWithMarginBottom.propsTypes ={
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default  BodySectionWithMarginBottom;