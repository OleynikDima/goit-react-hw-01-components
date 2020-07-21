import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BOX_PROFILE = styled.div`
        width:250px;
        height:330px;
        border-radius:2%;
        box-shadow:0 2px 8px -2px black;
        background-color:white;
        border:1px solid #e4e9f0;   
        background-color:#f3f6f9;

`;

const CircleImg = styled.img`
        /* margin-top:30px; */
        margin: 0;
        width:38%;
        border-radius:50%;
`;

const Description = styled.div`
    padding:30px 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    height:256px;
    background-color:white;
`;

const UlList = styled.ul`
    width:100%;
    display:flex;
    padding:0;
    margin:0;
    border-top:1px solid #e4e9f0;
`;

const Li = styled.li`
    /* background-color:#f3f6f9; */
    text-align:center;
    font-size: 12px;
    width:33%;
    height:72px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    list-style:none;   
`;

const BorderLi = styled(Li)`
    border-right:1px solid #e4e9f0;
    border-left:1px solid #e4e9f0;
`;

const Name = styled.p`
  font-size: 18px;  
  color: #122236;
  font-weight: 700;
  font-family: "Lato";
  margin:0;
`;

const Tag = styled.p`
  font-size: 14px;
  color: #768696;
  font-weight: 400;
  font-family: "Lato";
  margin:0;
  /* padding:0;
  padding-bottom:10px; */
`;

const Location = styled.p`
    font-size: 14px;
    color: #768696;
    font-weight: 400;
    font-family: "Lato";
    margin:0;
`;

const SpanLabel = styled.span`
    font-size: 12px;
    color: #768696;
    font-weight: 400;
    font-family: "Lato";
    padding-bottom:4px;
`;

const SpanQuantity = styled.span`
  font-size: 14px;
  color: #1f3349;
  font-weight: 900;
  font-family: "Lato";
`;

//Create Temp 
function Profiler({name,tag,location,avatar,stats}){
    return (
      <BOX_PROFILE className="profile">
        <Description className="description">
          <CircleImg
            src={avatar}
            alt={name}
            className="avatar"
          />
          <Name className="name">{name}</Name>
          <Tag className="tag">@{tag}</Tag>
          <Location className="location">{location}</Location>
        </Description>
      
        <UlList className="stats">
          <Li>
            <SpanLabel className="label">Followers </SpanLabel>
            <SpanQuantity className="quantity">{stats.followers}</SpanQuantity>
          </Li>
          <BorderLi>
            <SpanLabel className="label">Views </SpanLabel>
            <SpanQuantity className="quantity">{stats.views}</SpanQuantity>
          </BorderLi>
          <Li>
            <SpanLabel className="label">Likes </SpanLabel>
            <SpanQuantity className="quantity">{stats.likes}</SpanQuantity>
          </Li>
        </UlList>
      </BOX_PROFILE>
    );
}

Profiler.defaultProps ={
        avatar: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'
}


Profiler.propTypes ={
  // to do prop type corect 
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    stats:PropTypes.exact({
        followers:PropTypes.number.isRequired,
        views:PropTypes.number.isRequired,
        likes:PropTypes.number.isRequired,
    })
}

export default Profiler;