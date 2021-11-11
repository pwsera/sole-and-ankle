import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  const tag = variant === 'on-sale' ? 'Sale' : 'Just Released!'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
          {variant != 'default' && <VisualTag variant={variant}>{tag}</VisualTag>}
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price variant={variant}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {variant === 'on-sale' &&
            <SalePrice>{formatPrice(salePrice)}</SalePrice>
          }
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px 8px 4px 4px;
`;

const VisualTag = styled.div`
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
  width: fit-content;
  
  background-color: ${props => props.variant === 'on-sale' ? COLORS.primary : COLORS.secondary}; /* We could use CSS Variables*/
  font-size: 0.875rem;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white} ;
  border-radius: 4px;

  position: absolute;
  top: 10px;
  right: -6px;
`

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  color: ${props => props.variant === 'on-sale' ? COLORS.gray[500] : COLORS.gray[900]}; /* We could use CSS Variables*/
  text-decoration: ${props => props.variant === 'on-sale' ? 'line-through' : 'none'}; /* We could use CSS Variables*/
  text-decoration-color: ${COLORS.gray[500]} ;
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
