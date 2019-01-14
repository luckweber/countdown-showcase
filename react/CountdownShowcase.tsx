import React, { Component, ReactNode } from 'react'
import productsQuery from './queries/productsQuery.gql'


interface Link {
  text?: string
  internalPage?: string
  params?: string
  externalPage?: string
  typeOfRoute?: string
  page?: string
  position?: string
}

interface DefaultProps {
  text: string
  categories: number[]
}


interface Props extends DefaultProps { }

class CountdownShowcase extends Component<Props> {

  public static defaultProps: DefaultProps = {
    text:'',
    categories: []
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
      categories: {
        title: 'Categorias',
        type: 'number',
        default: CountdownShowcase.defaultProps.categories,
        isLayout: false,
      }
    }
  }


  public render():ReactNode {
    const { text, categories } =  this.props;
    console.log(text, categories);
    return(
      <div>
        <h1>{text}</h1>
      </div>
    )
  }
}


export default CountdownShowcase;
