import { useSearchParams } from 'react-router-dom'

import { Filters } from '~/constants/filter'
import { FilterKeys } from '~/types/data'
import { updateQueryParam } from '~/utils'

import { ChipButton } from './styled'

interface ChipProps {
  toggleFilterValue: (type: keyof Filters, value: number) => void
  innerText: string
  filterType: FilterKeys
  filterId: number
  isClicked: boolean
}

const Chip = ({
  toggleFilterValue,
  innerText,
  filterType,
  filterId,
  isClicked
}: ChipProps) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleButtonClick = (type: keyof Filters, value: number) => {
    toggleFilterValue(type, value)
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
