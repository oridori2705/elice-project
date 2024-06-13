import styled from '@emotion/styled'
import { useSearchParams } from 'react-router-dom'

import {
  categorizedCategoriesArray,
  CategoryData,
  CategoryItem
} from '~/constants/course'
import { Filters } from '~/constants/filter'
import { FilterKeys } from '~/types/data'
import { parseQueryStringToArray } from '~/utils'

import Chip from '../Chip'

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 0.5rem;
  align-items: center;
  margin: 0;
`

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  border: 1px solid rgb(225, 226, 228);
`

const TableRow = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`

const TableHeading = styled.div`
  min-width: 6rem;
  font-weight: 600;
  font-size: 0.65rem;
  color: #5e5f61;
  padding: 0.875rem 1rem;
  background-color: rgb(249, 250, 252);
  border-right: 1px solid rgb(225, 226, 228);
  text-align: left;
  &:last-child {
    border-right: none;
  }
`

const FilterTable = ({
  setFilters
}: {
  setFilters: (filters: Filters | ((prevFilters: Filters) => Filters)) => void
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
                  filterType={value.type as FilterKeys}
                  innerText={value.name}
                  setFilters={setFilters}
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
export default FilterTable
