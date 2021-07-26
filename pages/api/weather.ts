import queryString from 'querystring'

import { NextApiRequest, NextApiResponse } from 'next'

import weatherAPI from 'services/weatherAPI'

async function weather (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')  return res.status(404).send('')

  const language = req.query.lang || 'pt'
  const days = req.query.days || 7
 
  try {
    const query = queryString.stringify({
      key: process.env.WEATHER_API_KEY,
      lang: language,
      q: req.query.query,
      days,
      alerts: 'yes'
    })
    
    const { data } = await weatherAPI.get(`/forecast.json?${query}`)
  
    return res.json(data)
  } catch (err) {
    console.log(err)
    return res.status(500).send(err)
    
  }
}

export default weather