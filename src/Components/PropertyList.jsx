import React, { useEffect } from 'react'
import {PropertiesData} from '../Data/PropertiesData';
import Properties from './Properties';
import {connect} from 'react-redux'
import { setProperties } from '../Actions/PropertyActions';

const PropertyList = () => {

  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  

  return (
    <div id='properties' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4'>  
      {PropertiesData.map((property)=>(
      <Properties key = {property.id}
       property={property}/>  
      ))}
      
    </div>
  )
}

export default PropertyList
