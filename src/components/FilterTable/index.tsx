import { memo } from 'react'
import { useSearchParams } from 'react-router-dom'

import {
  categorizedCategoriesArray,
  CategoryData,
  CategoryItem
} from '~/constants/course'
import { Filters } from '~/constants/filter'
import { parseQueryStringToArray } from '~/utils/paramsAndFiltersUtils'

import Chip from '../Chip'
import { StyledList, TableContainer, TableHeading, TableRow } from './styled'

const FilterTable = ({
  toggleFilterValue
}: {
  toggleFilterValue: (type: keyof Filters, value: number) => void
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, _] = useSearchParams()
  const isClickedParams = parseQueryStringToArray(searchParams)

  return (
    <TableContainer>
      {Object.entries(categorizedCategoriesArray).map(
        ([categoryName, values]) => (
          <TableRow key={categoryName}>
            <TableHeading>{categoryName}</TableHeading>
            <StyledList>
              {values.map((value: CategoryItem<CategoryData>) => (
                <Chip
                  key={value.id}
                  filterType={value.type}
                  innerText={value.name}
                  toggleFilterValue={toggleFilterValue}
                  filterId={value.id}
                  isClicked={
                    isClickedParams[value.type] &&
                    isClickedParams[value.type].includes(value.id)
                  }
                />
              ))}
            </StyledList>
          </TableRow>
        )
      )}
    </TableContainer>
  )
}
const MemoizedFilterTable = memo(FilterTable)
export default MemoizedFilterTable
