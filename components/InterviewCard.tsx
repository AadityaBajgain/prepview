import React from 'react'

const InterviewCard = ({userId,interviewId, role, type, techstack, createdAt}:InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizeType = /mix/gi.test(type) ? "Mixed" : type;
    
  return (
    <div>
      
    </div>
  )
}

export default InterviewCard
