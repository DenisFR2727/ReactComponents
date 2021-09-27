import React from 'react';

const Select = ({options,defaultValue,value,onChange})=>{
    return(
        <select 
               value={value}
               onChange={event=>onChange(event.target.value)}
        >
              <option value="value1" disabled={false}>
                    {defaultValue}
              </option>
              {options.map(option=><option key={option.value} value={option.value}>
                    {option.name}
              </option>)}


        </select>
    )
}

export default Select;