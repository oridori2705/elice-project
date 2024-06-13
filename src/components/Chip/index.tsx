import { Dispatch, SetStateAction } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Filters } from '~/constants/filter'
import { FilterKeys } from '~/types/data'
import { updateQueryParam } from '~/utils'

import { ChipButton } from './styled'

interface ChipProps {
  setFilters: Dispatch<SetStateAction<Filters>>
  innerText: string
  filterType: FilterKeys
  filterId: number
  isClicked: boolean
}

const Chip = ({
  setFilters,
  innerText,
  filterType,
  filterId,
  isClicked
}: ChipProps) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleButtonClick = (type: keyof Filters, value: number) => {
    setFilters(prevState => {
      if (type === 'keyword') return prevState
      const newValues = prevState[type].includes(value)
        ? prevState[type].filter(item => item !== value)
        : [...prevState[type], value]
      const result = { ...prevState, [type]: newValues }

      return result
    })

    const url = updateQueryParam(searchParams, type, value.toString())
    setSearchParams(url)
  }

  return (
    <li>
      <ChipButton
        isClicked={isClicked}
        onClick={() => handleButtonClick(filterType, filterId)}>
        {innerText}
      </ChipButton>
    </li>
  )
}

export default Chip
