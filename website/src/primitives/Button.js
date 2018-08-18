import React from 'react'
import { css } from 'emotion'

export const Button = ({ children, ...rest }) => (
  <button
    className={css`
      color: #4f4f4f;
      border: 1px solid #4f4f4f;
      padding: 10px;
      border-radius: 4px;

      &:hover {
        background: #4f4f4f;
        color: white;
      }
    `}
    {...rest}
  >
    {children}
  </button>
)
