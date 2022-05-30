import React, { useReducer } from 'react';
import SearchField from './components/SearchField'
import Item from './components/Item'

function App() { 
  const initialState = {
    loading: false,
    items: [],
    error: null
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'SEARCHING':
        return {
          ...state,
          loading: true,
          error: null
        }
      case 'ERROR':
        return {
          ...state,
          loading: false,
          items: [],
          error: action.error
        }
      case 'SUCCESS':
        return {
          ...state,
          error: null,
          items: action.payload,
          loading: false
        }
      default:
        return {
          ...state
        }
    }
  }

  const [ state, dispatch ] = useReducer(reducer, initialState)
  

  const { items, loading, error } = state

  return (
      <div className="flex-1 flex flex-col">

      <SearchField placeholder="Search..." onSearch={dispatch} />

      <div className="container mx-auto p-4 flex flex-col flex-1 pt-16 md:pt-32">
        <div className="flex flex-wrap justify-center -mx-2 flex-grow">
        { 
          loading ?
          <div className="text-lg text-gray-500">Searching...</div> :
          !loading && error ?
          <div className="text-lg text-gray-500 flex flex-col justify-content">
            { error }
          
          </div> :
          !loading && !items.length ?
          <div className="text-lg text-gray-500">Find for an article!</div> :
          items.map(item => <Item key={item.id} item={item} />)
        }
        </div>
        <footer className="mt-auto">
       <p className='text-center'>Copyright @ test</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
