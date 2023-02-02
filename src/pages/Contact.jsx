import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")
  return (
    <div>
    <h2>Hey {name}, Contact to me as soon as you can!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aspernatur ipsa odio, sit placeat ex itaque enim consectetur delectus quia temporibus
             recusandae laborum commodi, deleniti sapiente fuga officiis at alias?</p>
    </div>
  )
}
