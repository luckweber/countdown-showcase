import React, { Component, ReactNode } from 'react';
import PropTypes from 'prop-types';


interface DefaultProps {}
interface Props extends DefaultProps { }


class CountdownShowcasePanel extends Component<Props> {
  public render():ReactNode {
    const {category} =  this.props;
    return(
      <div>{category}</div>
    )
  }
}

export default CountdownShowcasePanel;
