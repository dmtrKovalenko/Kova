import React, { PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'

const FilterSelect = (props) => {
  return (
    <div className='select-block'>
      <SelectField floatingLabelText={props.label} style={{ width:230 }}
        value={props.value || -1}
        onChange={(ev, index, value) => props.onChange(value)}>
        {props.items}
      </SelectField>
    </div>
  )
}

FilterSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  items: PropTypes.array
}

export default FilterSelect
