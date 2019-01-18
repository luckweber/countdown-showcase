import * as React  from 'react';
import PropTypes from 'prop-types';
import { Link, withRuntimeContext } from 'render';


import CountdownShowcasePanel from "./components/CountdownShowcasePanel";



interface products {
  slug: string,
  date:string
}

interface DefaultProps {
  text: string,
  category: number[],
  products: products[],
}

interface State {}


interface Props extends DefaultProps {}

class CountdownShowcase extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }

  public static propTypes = {
    text: PropTypes.string,
    category: PropTypes.array,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string,
        slug: PropTypes.string
      })
    )
  }


  public static defaultProps: DefaultProps = {
    text:'',
    category: [],
    products:[]
  }

  public static schema: React.ReactNode = {
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
              slug: {
                default: '',
                title: 'Slug',
                type: 'string',
              },
              date: {
                default: '',
                title: 'Data',
                type: 'string',
                format: 'date-time'
              }
          }
        }
      }
    }
  }


  public render():React.ReactNode {
    const { text, products }:any =  this.props;
    return(
      <div className="flex flex-grow-1 w-100 flex-column">
        <h1 className="center">{ text }</h1>
        <CountdownShowcasePanel products={products}/>
      </div>
    )
  }
}


export default withRuntimeContext(CountdownShowcase)
