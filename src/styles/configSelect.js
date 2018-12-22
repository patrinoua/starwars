export const customSelectStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'blue' : 'black',
    backgroundColor: 'none'
  }),
  container: (provided, state) => ({
    ...provided,
    color: '#fee233'
  }),
  menu: (provided, state) => ({
    ...provided,
    background: '#fee233',
    borderRadius: '0px',
    fontWeight: '600'
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    background: 'purple'
  }),
  control: () => ({
    display: 'flex'
  }),
  indicatorSeparator: provided => ({
    ...provided,
    backgroundColor: '#fee233'
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#fee233'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'
    const color = '#fee233'
    const fontWeight = '600'
    return {
      ...provided,
      opacity,
      color,
      fontWeight,
      transition
    }
  },
  placeholder: () => ({
    color: '#fee233',
    fontWeight: '600'
  })
}

export const selectOptions = [
  { value: 'year', label: 'Sort by Year' },
  { value: 'episode', label: 'Sort by Episode' }
]
