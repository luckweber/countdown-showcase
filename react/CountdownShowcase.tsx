import React, { Component, ReactNode } from 'react'
import * as PropTypes from 'prop-types';
import { Link, withRuntimeContext } from 'render';


import CountdownShowcasePanel from "./components/CountdownShowcasePanel";



interface products {
  name: string,
  price:number
}

interface DefaultProps {
  text: string,
  category: number[],
  products: products[],
}

interface State {}


interface Props extends DefaultProps {}

class CountdownShowcase extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }

  public static propTypes = {
    text: PropTypes.string,
    category: PropTypes.array,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        price:PropTypes.number
      })
    )
  }

  public static defaultProps: DefaultProps = {
    text:'',
    category: [],
    products:[]
  }

  public static schema: ReactNode = {
    title: 'Vitrine Regressiva',
    description: 'Prateleira com contador',
    type: 'object',
    properties: {
      text: {
        title: 'Titulo',
        type: 'string',
        default: CountdownShowcase.defaultProps.text,
        isLayout: false,
      },
      category: {
        title: 'Categorias',
        type: 'number',
        default: CountdownShowcase.defaultProps.category,
        isLayout: false,
      },
      products: {
        title: 'Produtos',
        type: 'array',
        items: {
          title: 'Produtos',
          type: 'object',
          properties: {
            name: {
                default: '',
                title: 'Nome do Produto',
                type: 'string',
              },
              price: {
                default: '',
                title: 'Valor do Produto',
                type: 'number',
              }
          }
        }
      }
    }
  }


  public render():ReactNode {
    const { text, category } =  this.props;
    // const isMobile = this.props.runtime.hints.mobile;
    console.log(this.props);
    return(
      <div className="flex flex-grow-1 w-100 flex-column">
        <h1 className="center">{ text }</h1>
        <CountdownShowcasePanel category={category}/>
      </div>
    )
  }
}


export default withRuntimeContext(CountdownShowcase)
