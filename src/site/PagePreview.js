import React from 'react'
import {Link} from 'react-router-dom'
import {formatDate} from './dateFormats'

const PagePreview = ({page}) => (
  <div className='page-preview'>
    <Link to={'/' + page.location} className='page-preview__title'>
      {page.title}
    </Link>
    <div className='page-preview__meta'>
      {page.date && (
        <time>
          {formatDate(page.date)}
        </time>
      )}
    </div>
    <div className='page-preview__description'>
      {page.description}
      {' '}
    </div>
    <div className='page-preview__read-more'>
      <Link to={'/' + page.location}>
        Lire la suite →
      </Link>
    </div>
  </div>
)

export default PagePreview
