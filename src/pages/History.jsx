import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import useGoldPrice from '../custom_hook/useGoldPrice'
import '../index.css'

function History() {
  const { data, loading } = useGoldPrice("https://api.gold-api.com/price/XAU/INR")
  const [history, setHistory] = useState([])

  useEffect(() => {
    if (!data) return

    // Read existing history
    const stored = JSON.parse(localStorage.getItem('goldHistory') || '[]')

    // Today's date as string
    const today = new Date().toLocaleDateString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric'
    })

    // Only add if today not already saved
    const alreadySaved = stored.find(item => item.date === today)
    if (!alreadySaved) {
      stored.push({ date: today, price: Math.round(data.price) })
      localStorage.setItem('goldHistory', JSON.stringify(stored))
    }

    setHistory(stored)
  }, [data])

  if (loading) return <h3>Loading...</h3>

  return (
    <div className='history-container'>
      <h2 className='history-title'>Gold Price History</h2>

      {history.length < 2 ? (
        <p className='history-empty'>Visit again tomorrow to see the chart grow!</p>
      ) : (
        <div className='history-chart'>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={history}>
              <XAxis dataKey="date" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(val) => `₹${val.toLocaleString('en-IN')}`} />
              <Line type="monotone" dataKey="price" stroke="#EF9F27" strokeWidth={2} dot={{ fill: '#EF9F27' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      <div className='history-table-wrapper'>
        <table className='history-table'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Gold Price (INR)</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>₹{item.price.toLocaleString('en-IN')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default History