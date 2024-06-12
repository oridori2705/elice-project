import styled from '@emotion/styled'

interface CardPriceProps {
  enroll_type: number
  is_free: boolean
  price: string
}

type CardPriceDivProps = Pick<CardPriceProps, 'is_free' | 'enroll_type'>

const CardPriceWrapper = styled.div`
  padding: 0px 1.25rem 1.25rem;
`
const CardPriceDiv = styled.div<CardPriceDivProps>`
  line-height: 1.5rem;
  border-top: 1px solid rgb(240, 241, 243);
  color: ${props =>
    props.is_free ? '#00ab53;' : props.enroll_type === 0 ? '#222' : '#524fa1'};
  padding-top: 1rem;
  font-weight: 700;
`
const getCardPriceText = ({
  enroll_type,
  is_free,
  price
}: CardPriceProps): string => {
  if (enroll_type === 0) {
    return is_free ? '무료' : `₩${Number(price).toLocaleString()}`
  } else if (enroll_type === 4) {
    return '구독'
  } else if (enroll_type === 5) {
    return '관리자 등록'
  }

  return ''
}

export const CardPrice = ({ enroll_type, is_free, price }: CardPriceProps) => {
  const displayText = getCardPriceText({ enroll_type, is_free, price })

  return (
    <CardPriceWrapper>
      <CardPriceDiv
        is_free={is_free}
        enroll_type={enroll_type}>
        {displayText}
      </CardPriceDiv>
    </CardPriceWrapper>
  )
}
