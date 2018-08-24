import React from 'react'
import { Link } from 'react-router-dom'

export const BackButton = () => (
  <Link to="/">
    <i className="fas fa-arrow-left fa-lg" style={{ marginTop: 4 }} />
  </Link>
)
