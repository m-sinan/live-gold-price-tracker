import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import PriceCard from '../component/PriceCard'
import useGoldPrice from '../custom_hook/useGoldPrice'

function Home() {
  const {data: goldData, loading: goldLoading} = useGoldPrice("https://api.gold-api.com/price/XAU/INR")
  const {data: silverData, loading: silverLoading} = useGoldPrice("https://api.gold-api.com/price/XAG/INR")

  if(goldLoading || silverLoading) return <h3>Loading...</h3>

  const gold22k = (goldData.price / 31.1035 * 0.916).toLocaleString('en-IN', {maximumFractionDigits: 0})
  const gold18k = (goldData.price / 31.1035 * 0.75).toLocaleString('en-IN', {maximumFractionDigits: 0})
  const silverGram = (silverData.price / 31.1035).toLocaleString('en-IN', {maximumFractionDigits: 0})

  return (
    <div className='home'>
      <div className="hero">
        <span className="live-badge">● LIVE</span>
        <h1>Gold & Silver Prices</h1>
        <p>Live INR rates · Updates every 60 seconds</p>
      </div>

      <div className="container">
        <PriceCard data={goldData}/>
        <PriceCard data={silverData}/>
      </div>

      <div className="stats-bar">
        <div className="stats-bar-item">
          <p>22K Gold / gram</p>
          <p>₹{gold22k}</p>
        </div>
        <div className="stats-bar-item">
          <p>18K Gold / gram</p>
          <p>₹{gold18k}</p>
        </div>
        <div className="stats-bar-item">
          <p>Silver / gram</p>
          <p>₹{silverGram}</p>
        </div>
      </div>

      <div className="cta-banner">
        <div>
          <p>Want to calculate by grams?</p>
          <p>Enter your weight and get instant price</p>
        </div>
        <Link to="/calculator" className='cta-btn'>Calculator →</Link>
      </div>
    </div>
  )
}

export default Home     