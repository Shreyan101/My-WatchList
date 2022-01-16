import React, { useCallback, useState, useEffect }  from 'react';
import "./NavStyle.css";
import {debounce} from 'lodash'

const  SearchForm=(props)=> {

	const deb=useCallback(
		debounce((text) => props.setSearchValue(text),500)
		,
		[],
	);

const handleText=(text)=>{
 
	deb(text);
		console.log(props.searchValue)
	}
  


  
 

  // Input Field handler


  // Reset Input Field handler
  const resetInputField = (e) => {
    e.preventDefault();
    
  };

  
    // setEmail("");
    // setPassword("");
  



 
    return (
        <div className="Navstyle">
        <div className=" navcnt">
          <h1 className="display-4 mb-3">
            <i className="fa fa-film" aria-hidden="true" /> My WatchList
          </h1>
          <p>Search To add movies or TV shows to your WatchList</p>
          <form id="searchForm">
          <div class="fontuser">
            <input
              className="form-control in"
              value={props.value}
			  onChange={(event) => handleText(event.target.value)}
              placeholder="Search for a Movies, TV Show ..."
            
            />
           <i className="fa fa-plus" aria-hidden="true" />
           {  props.searchValue===""?
           <i className='fa fa-times cross-right show' aria-hidden="true"  onclick={resetInputField}/>: 
           <i className='fa fa-times cross-right nshow' aria-hidden="true" onclick={resetInputField} />
           }
            </div>
          </form>
        </div>
      </div>
    )
}

export default SearchForm

