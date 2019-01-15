import React, { Component, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Link, withRuntimeContext } from 'render';
import { graphql } from 'react-apollo';
var ReactIntl = require('react-intl');
var IntlMixin       = ReactIntl.IntlMixin;
var FormattedNumber = ReactIntl.FormattedNumber;


import productQuery from './../queries/productQuery.graphql'



interface product {
  slug: string,
  name: string,
  price:number
}

interface Props {
  product?:product
}


class CountdownShowcaseItems extends Component<Props> {

  public static propTypes = {
    product:PropTypes.object
  }

  public render():ReactNode {
    const {data} =  this.props;
    const {product: {productName, items, description}} = data;
    const item = items[0];
    const image =  item.images[0].imageUrl;
    const commertialOffer =  items[0].sellers[0].commertialOffer;
    const {Price, PriceWithoutDiscount, AvailableQuantity} = commertialOffer;
    const discount = ((( Price - PriceWithoutDiscount)/Price)*100).toFixed(1)

    // console.log(Price)

    return(
      <div className="DIVcontador">
        <div className="contBLOCO1">
          <div className="contadorFOTO">
            <a href="/">
              <img alt="Headset Gamer HyperX Cloud Silver - HX-HSCL-SR/NA" width="130" src={image}/>
            </a>
          </div>
        </div>
        <div className="contBLOCO2">
          <div className="contTITULO link">
            <a className="ng-binding" href="https://www.kabum.com.br/produto/91099">{productName}</a>
          </div>
          <div className="contDESCONTO">
            <p className="textop">DESCONTO ATÉ</p> {discount}%
          </div>
          <div className="contVALOR">
            <p className="textop p">VALOR À VISTA NA OFERTA R$</p><FormattedNumber currency="BRL" style="currency" value={Price}/>
          </div>
          <div className="contFULL">
            <p className="textop p">VALOR NORMAL</p><FormattedNumber currency="BRL" style="currency" value={PriceWithoutDiscount}/>
          </div>
          <div className="contNUMEROS2">
            <p className="textop">QUANT. EM<br/>OFERTA</p>
            <div className="contNUMEROS">
              {AvailableQuantity}
            </div>
          </div>
        </div>
        <div className="contBLOCO3">
          <div className="flex-row time-ctn">
          <svg version="1.1"  x="0px" y="0px" viewBox="0 0 31.802 31.802"  >
                  <g>
                      <g>
                          <path d="M29.484,9.939l-3.896-4.673l-2.703,2.255c-1.198-0.8-2.539-1.396-3.969-1.771V3.609h2.164V0h-8.868v3.609h2.475v1.74
                              C7.792,5.805,2.317,11.545,2.317,18.553c0,7.307,5.943,13.249,13.248,13.249c7.307,0,13.249-5.942,13.249-13.249
                              c0-2.396-0.649-4.64-1.767-6.581L29.484,9.939z M16.081,29.301v-3.109h-0.515v3.137c-2.809,0-5.361-1.09-7.282-2.857
                              c0.229-0.148,0.391-0.396,0.391-0.691c0-0.465-0.378-0.842-0.843-0.842c-0.276,0-0.51,0.143-0.664,0.349
                              c-1.481-1.845-2.373-4.181-2.375-6.726H7.47v-0.515H4.818c0.123-2.621,1.183-4.996,2.856-6.803
                              c0.155,0.184,0.378,0.309,0.638,0.309c0.465,0,0.842-0.377,0.842-0.843c0-0.236-0.099-0.448-0.255-0.601
                              c1.836-1.453,4.149-2.328,6.666-2.328v3.615h0.515V7.806c2.266,0.107,4.348,0.914,6.038,2.216
                              c-0.119,0.145-0.203,0.325-0.203,0.53c0,0.466,0.377,0.843,0.844,0.843c0.236,0,0.449-0.101,0.603-0.258
                              c1.729,1.818,2.828,4.236,2.953,6.908h-2.535v0.514h2.562c-0.002,2.106-0.619,4.066-1.668,5.729
                              c-0.144-0.114-0.316-0.192-0.514-0.192c-0.466,0-0.843,0.378-0.843,0.843c0,0.285,0.151,0.524,0.368,0.679
                              C21.813,27.762,19.11,29.157,16.081,29.301z"></path>
                          <path d="M16.234,10.708v4.16c1.786,0.315,3.153,1.817,3.276,3.662l4.089-0.669C23.163,14.051,20.079,11.035,16.234,10.708z"></path>
                      </g>
                  </g>
              </svg>
              <p className="contBLOCO3-texto">TEMPO RESTANTE<br/>PARA TERMINO DA OFERTA: </p>
          </div>
          <span className="at ng-scope" ng-switch-when="ativo">
            00:00:41
          </span>
        </div>
      </div>
    )
  }
}

const options = {
  options: (data) => ({
    variables: {
      slug:data.product.slug
    }
  })
}


export default graphql(productQuery, options)(CountdownShowcaseItems);
