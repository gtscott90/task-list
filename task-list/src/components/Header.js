import React from 'react'
import Button from './Button'

export default function Header({ title }) {
    return (
    <div className="temp">
        <h1>
          {title}
        </h1>
        <Button />
    </div>
    )
}
