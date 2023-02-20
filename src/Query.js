import React from 'react'
import ReactPlayer from 'react-player'
import './Query.css'

const Query = () => {
  return (
    <div style={{background:'black'}}>
      <h1>Query</h1>
      <ReactPlayer className='player' url='https://youtu.be/VtWkSCZX0Ec' />
      <p style={{color:'white'}}>A query is a question, or the search for a piece of information.

The Latin root quaere means "to ask" and it's the basis of the words inquiry, question, quest, request, and query. Query often fits the bill when referring to Internet searches, polite professional discourse, and subtle pleas. You could query as to the whereabouts of the lavatory, but you'd sound a bit prim and be better off asking "Where's the toilet?" If your job entails dealing with annoying questions and complaints, you could make it sound better by proclaiming, "I respond to customer queries."</p>

    </div>
  )
}

export default Query
