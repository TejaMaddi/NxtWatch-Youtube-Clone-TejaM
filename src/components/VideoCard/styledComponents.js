import {Link} from 'react-router-dom'
import styled from 'styled-components/macro'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const TrendingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 40px;
  }
`
export const TrendingThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 299px;
  }
`
export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const TrendingProfileImage = styled.img`
  width: 29px;
  height: 29px;
  border-radius: 50px;
  margin: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const TrendingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const TrendingChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
export const TrendingViewAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
export const TrendingDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
