import * as React  from 'react';
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

interface State {
  products?:products[]
}


class CountdownShowcasePanel extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      products: []
    }
  }

  public static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string,
        name: PropTypes.string,
        price:PropTypes.number
      })
    )
  }

  public componentDidMount() {
    try {
      const { products }:any = this.props;
      (products.length) && (this.setState({products:products}));
    }catch(e){

    }
  }

  public componentWillReceiveProps(next:any) {
    try {
      const { products } = next;
      (products.length) && (this.setState({products:products}));
    }catch(e){

    }
  }



  public render():React.ReactNode {
    const {products} =  this.state;
    let productsList:any =  products;
    const  items = productsList.map((product:any[]) => (<CountdownShowcaseItems product={product}/>));
    return(
      <div>{items}</div>
    )
  }
}

export default CountdownShowcasePanel;
