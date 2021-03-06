import React from 'react'
import {Link} from 'react-router-dom'
import {formatDate} from './dateFormats'

const PageHeader = (props) => {
  return <div className='page-header'>
    <h1 {...(props.isPost ? {itemProp: 'name'} : {})}><Link to='/'>{props.page.title}</Link></h1>
    <header>
      {props.page.date && (
        <time {...(props.isPost ? {itemProp: 'datePublished'} : {})} dateTime={(new Date(props.page.date)).toISOString()}>
          {formatDate(new Date(props.page.date))}
        </time>
      )}
    </header>
  </div>
}

export default PageHeader
