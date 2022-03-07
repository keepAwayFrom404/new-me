import React, { Component } from 'react'
import ReactDOM from 'react-dom';

const data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

function ProductRow(props) {
  const { item } = props
  return <div><span>{item.name}</span><span>{item.price}</span></div>
}

function ProductCategoryRow(props) {
  const { title, items = [] } = props
  return <div>
    <h3>{title}</h3>
    {
      items.map(item => <ProductRow key={item.name} item={item}/>)
    }
  </div>
}

function ProductTable(props) {
  return <div>
    <div><span>Name</span><span>Price</span></div>
    {
      props.all.map(item => <ProductCategoryRow title={item.category} key={item.category}  items={item.items}/>)
    }
  </div>
}

class SearchBar extends Component {
  render() {
    const { filterText, onChange, inStockOnly } = this.props
    return <>
      <input value={filterText} onChange={(e) => onChange(e.target.value, 'filterText')} type="text" placeholder='Search...' />
      <input id="cbox1" type="checkbox" checked={inStockOnly} onChange={(e) => onChange(e.target.checked, 'inStockOnly')} />
      <label htmlFor="cbox1">Only show products in stock</label>
    </>
  }
}

class FilterableProductTable extends Component {
  state = {
    filterText: '', 
    inStockOnly: false
  }
  handleChange = (v, type) => {
    if(type === 'filterText') this.setState({filterText: v})
    if(type === 'inStockOnly') this.setState({inStockOnly: v})
  }
  filterTableData = (data = []) => {
    const { filterText = '', inStockOnly = false } = this.state
    let result = [...data]
    if(inStockOnly) result = result.filter(item => item.stocked)
    if(filterText) result = result.filter(item => item.name.toLocaleLowerCase().includes(filterText) || item.price.includes(filterText))
    return this.genResultStruct(result)
  }
  genResultStruct = (data) => {
    const resultMap = {}
    const result = []
    data.forEach(item => {
      const category = resultMap[item.category]
      if(category) {
        category.push(item)
      } else {
        resultMap[item.category] = [item]
      }
    });
    Object.entries(resultMap).forEach(([key, item]) => result.push({category: key, items: item}))
    return result
  }
  render() {
    const all = this.filterTableData(data)
    const { filterText, inStockOnly } = this.state
    return <>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onChange={this.handleChange}/>
      <ProductTable all={all}/>
    </>
  }
}

ReactDOM.render(
  <FilterableProductTable/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}