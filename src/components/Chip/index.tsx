import styled from '@emotion/styled'
import { useSearchParams } from 'react-router-dom'

import { Filters } from '~/constants/filter'
import { FilterKeys } from '~/types/data'
import { updateQueryParam } from '~/utils'

interface ChipProps {
  setFilters: (filters: Filters | ((prevFilters: Filters) => Filters)) => void
  innerText: string
  filterType: FilterKeys
  filterId: number
  isClicked: boolean
}

interface ChipButtonProps {
  isClicked: boolean
}

const ChipButton = styled.button<ChipButtonProps>`
  display: inline-flex;
  min-width: 1.875rem;
  height: 1.875rem;
  align-items: center;
  border: 1px solid rgb(240, 241, 243);
  font-weight: 500;
  transition: all 150ms ease-in-out 0s;
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  border-radius: 1.875rem;
  font-size: 0.775rem;
  background: rgb(240, 241, 243);
  margin: 0.5rem;
  color: rgb(94, 95, 97);

  &:hover {
    background: rgb(220, 221, 223);
    border-color: rgb(200, 201, 203);
  }

  ${props =>
    props.isClicked &&
    `
    background: rgb(82, 79, 161);
    border: 1px solid rgb(82, 79, 161);
    color: rgb(249, 250, 252);
      &:hover {
        background: rgb(66, 63, 140);
        border-color: rgb(66, 63, 140);
        color: rgb(240, 241, 243);
      }
      `}
`

const Chip = ({
  setFilters,
  innerText,
  filterType,
  filterId,
  isClicked
}: ChipProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()

  const handleButtonClick = (type: keyof Filters, value: number) => {
    setFilters(prevState => {
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
