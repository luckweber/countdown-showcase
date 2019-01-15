import React, { Component, ReactNode } from 'react';
import * as PropTypes from 'prop-types';


import CountdownShowcaseItems from "./CountdownShowcaseItems";


interface products {
  slug: string,
  name: string,
  price:number
}

interface Props {
  products?:products[]
}


class CountdownShowcasePanel extends Component<Props> {

  public static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string,
        name: PropTypes.string,
        price:PropTypes.number
      })
    )
  }

  public render():ReactNode {
    const {products} =  this.props;

    const  items = products.map(product => (<CountdownShowcaseItems product={product}/>));
    return(
      <div>{items}</div>
    )
  }
}

export default CountdownShowcasePanel;
