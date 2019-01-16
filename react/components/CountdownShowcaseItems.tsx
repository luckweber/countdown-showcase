import React, { Component, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Link, withRuntimeContext } from 'render';
import { graphql } from 'react-apollo';
var ReactIntl = require('react-intl');
var IntlMixin       = ReactIntl.IntlMixin;
var FormattedNumber = ReactIntl.FormattedNumber;


import productQuery from './../queries/productQuery.graphql'

import CountdownShowcaseItem from "./CountdownShowcaseItem";

interface product {
  slug: string,
  name: string,
  price:number
}

interface Props {
  product?:product
}


interface State {
  product?:any
}


class CountdownShowcaseItems extends Component<Props, State> {

  public constructor(props:Props) {
    super(props);

    this.state = {
      product:''
    }
  }

  public static propTypes = {
    product:PropTypes.object
  }

  public componentDidMount():any {
    try {
      const {data}:any = this.props;
      if(!data.loading) {
        const {product} = data;
        this.setState({product:product});
      }
    }catch(e){this.setState({product:''})}
  }


  public componentWillReceiveProps(next:any) {
    try {
      const {data}:any = next;
      if(!data.loading) {
        const {product} = data;
        this.setState({product:product});
      }
    }catch(e){this.setState({product:''})}
  }

  public render():ReactNode {
    const {data:{product}}:any =  this.props;

    console.log(this.props);
    /*
    const {data} =  this.props;
    const {product: {productName, items, description}} = data;
    const item = items[0];
    const image =  item.images[0].imageUrl;
    const commertialOffer =  items[0].sellers[0].commertialOffer;
    const {Price, PriceWithoutDiscount, AvailableQuantity} = commertialOffer;
    const discount = ((( Price - PriceWithoutDiscount)/Price)*100).toFixed(1)
    */

    return(
      <CountdownShowcaseItem product={product}/>
    )


  }
}

const options = {
  options: (data:any) => ({
    variables: {
      slug:data.product.slug
    }
  })
}


export default graphql(productQuery, options)(CountdownShowcaseItems);
