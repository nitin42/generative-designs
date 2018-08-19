import React from 'react'
import { css } from 'emotion'

export const Button = ({ children, ...rest }) => (
  <button
    className={css`
      background: #fff;
      color: #4f4f4f;
      border: 1px solid #4f4f4f;
      padding: 10px;
      border-radius: 4px;
      font-size: 12px;

      &:hover {
        background: #4f4f4f;
        color: white;
      }

      &:focus {
        outline: none;
      }
    `}
    {...rest}
  >
    {children}
  </button>
)
