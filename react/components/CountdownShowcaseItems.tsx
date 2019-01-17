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
  date:number
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

  public render():ReactNode {

    const {data, product:{date}}:any =  this.props;
    const {product} = data;

    return(
      <CountdownShowcaseItem product={product} date={date}/>
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
