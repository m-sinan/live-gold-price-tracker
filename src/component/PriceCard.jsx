import React from 'react'
import '../index.css'

function PriceCard({data}) {
  const perGram = (data.price / 31.1035).toLocaleString('en-IN', { maximumFractionDigits: 0 })

  return (
    <div className='price-card'>
      <div className="card-top-row">
        <div>
          <h4 className='card-text'>{data.name}</h4>
          <p className='card-symbol'>{data.symbol} / INR</p>
        </div>
        <span className='card-badge'>{data.symbol}</span>
      </div>

      <h1 className='card-price'>
        <span>{data.currencySymbol}</span>
        {data.price.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
      </h1>
      <p className='card-per-txt'>per troy ounce</p>

      <div className='card-divider'></div>

      <div className='card-gram-row'>
        <span className='card-lastupdate-txt'>per gram</span>
        <span className='card-gram-price'>{data.currencySymbol}{perGram}</span>
      </div>
    </div>
  )
}

export default PriceCard