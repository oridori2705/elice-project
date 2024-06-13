import { Dispatch, SetStateAction } from 'react'

import {
  PaginationContainerDiv,
  PaginationContainerFlexDiv,
  PaginationLeftButton,
  PaginationNumberButton,
  PaginationNumberDiv,
  PaginationRightButton,
  PaginationWrapperDiv
} from './styled'

interface PaginationProps {
  totalItems: number
  itemsPerPage?: number
  currentOffset: number
  setOffset: Dispatch<SetStateAction<number>>
}
interface HandlePageChangeParams {
  currentPage: number
  isActive?: boolean
}

const Pagination = ({
  totalItems,
  itemsPerPage = 20,
  currentOffset,
  setOffset
}: PaginationProps) => {
  const handlePageChange = ({
    currentPage,
    isActive = true
  }: HandlePageChangeParams) => {
    if (!isActive) return
    setOffset(currentPage)
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const pagesToShow = 5

  const halfPagesToShow = Math.floor(pagesToShow / 2)
  let startPage = Math.max(currentOffset - halfPagesToShow, 1)
  let endPage = Math.min(currentOffset + halfPagesToShow, totalPages)

  if (currentOffset <= halfPagesToShow) {
    endPage = Math.min(pagesToShow, totalPages)
  }

  if (currentOffset + halfPagesToShow > totalPages) {
    startPage = Math.max(totalPages - pagesToShow + 1, 1)
  }

  const pages = []
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <PaginationWrapperDiv>
      <PaginationContainerDiv>
        <PaginationContainerFlexDiv>
          <PaginationLeftButton
            isActive={currentOffset > 1}
            onClick={() =>
              handlePageChange({
                currentPage: currentOffset - 1,
                isActive: currentOffset > 1
              })
            }>
            {'<'}
          </PaginationLeftButton>
          <PaginationNumberDiv>
            {pages.map(page => (
              <PaginationNumberButton
                key={page}
                onClick={() => handlePageChange({ currentPage: page })}
                isActive={page === currentOffset}>
                {page}
              </PaginationNumberButton>
            ))}
          </PaginationNumberDiv>
          <PaginationRightButton
            isActive={currentOffset < totalPages}
            onClick={() =>
              handlePageChange({
                currentPage: currentOffset + 1,
                isActive: currentOffset < totalPages
              })
            }>
            {'>'}
          </PaginationRightButton>
        </PaginationContainerFlexDiv>
      </PaginationContainerDiv>
    </PaginationWrapperDiv>
  )
}

export default Pagination
