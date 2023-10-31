import React from 'react'
import { Link } from 'react-router-dom'

const ExtraCard = ({ className, h3, content, linkto, linktxt }) => {
    return (
        <div className={className}>
            <h3>{h3}</h3>
            <p>{content}</p>
            <Link to={linkto}>
                {linktxt} <i className="uil uil-angle-right"></i>
            </Link>
        </div>
    )
}

export default ExtraCard