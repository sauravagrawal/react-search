import React, {useEffect} from 'react'
import fadeInTop from '../effects/fadeInTop'
import Moment from 'react-moment';

function Item(props) {
  const { title, created_at, objectID, points, num_comments, relevancy_score, _tags, url } = props.item

  useEffect(() => fadeInTop(`[data-item="${objectID}"]`), [objectID])

  return (
    <div className="w-1/2 md:w-128 p-2">
    <div data-item={objectID} className="transition-all opacity-0 translate-y-n1 w-full flex flex-col rounded shadow bg-white relative overflow-hidden">
     
      <div className="flex-shrink-0 flex flex-col p-4">
        <p className="text-xs font-medium text-gray-600"><Moment format='MMMM Do YYYY, h:mm:ss a'>{created_at}</Moment></p>
        <h1 className="text-lg font-bold"><a href={url} target="_blank" rel="noopener noreferrer">{ title }</a></h1>
        <p className="text-xs font-medium text-gray-600"><strong className="text-sm font-medium text-gray-800">Points:</strong>  { points }</p>
        <p className="text-xs font-medium text-gray-600"><strong className="text-sm font-medium text-gray-800">Comments:</strong> { num_comments }</p>
        <p className="text-xs font-medium text-gray-600"><strong className="text-sm font-medium text-gray-800">Relavancy Score:</strong> { relevancy_score }</p>
        <div class="code-preview-wrapper">
        <span className="bg-blue-100 text-blue-800 text-md font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Tags</span>
        { _tags.map((res, key) => {
          return <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{res}</span>
        } )}
        </div>
        
 
      </div>
      
    </div>
    </div>
  )
}

export default Item