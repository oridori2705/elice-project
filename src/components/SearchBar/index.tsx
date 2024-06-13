import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Filters } from '~/constants/filter'
import useDebounce from '~/hooks/useDebounce'

import {
  SearchBarInput,
  SearchBarWrapperDiv,
  SearchIconDiv,
  SearchIconSvg,
  SearchInputDiv
} from './styled'

interface SearchBarProps {
  setFilter: (filters: Filters | ((prevFilters: Filters) => Filters)) => void
}

const SearchBar = ({ setFilter }: SearchBarProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') || ''

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value

    setFilter(prevState => {
      const result = { ...prevState, ['keyword']: query }
      return result
    })
    searchParams.set('keyword', query)
    setSearchParams(searchParams)
  }
  const debouncedOnChange = useDebounce<typeof handleChange>(handleChange, 500)

  return (
    <SearchBarWrapperDiv>
      <SearchIconDiv>
        <SearchIconSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1080 1080"
          focusable="false"
          role="img"
          aria-hidden="true"
          data-icon="eilSearch"
          data-prefix="eil"
          data-unicode=""
          className="sc-1qg2hkf-0 iygnLF eb-icon"
          rotate="0">
          <path
            fill="currentColor"
            d="M90 441C90 247.05 247.05 90 441 90s351 157.05 351 351c0 80.705-27.193 155.021-72.923 214.291l252.901 252.901-63.639 63.639-252.882-252.882C596.16 764.756 521.78 792 441 792 247.05 792 90 634.95 90 441zm623.25 0c0-150.3-121.95-272.25-272.25-272.25S168.75 290.7 168.75 441 290.7 713.25 441 713.25 713.25 591.3 713.25 441z"></path>
        </SearchIconSvg>
      </SearchIconDiv>
      <SearchInputDiv>
        <SearchBarInput
          placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
          defaultValue={keyword}
          onChange={debouncedOnChange}
        />
      </SearchInputDiv>
    </SearchBarWrapperDiv>
  )
}
export default SearchBar