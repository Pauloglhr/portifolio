import React from 'react';
import styled from 'styled-components';

const EntryContainer = styled.div`
  padding: 1.5rem 0;
  position: relative;
  
  border-left: 3px solid #444;
  padding-left: 2rem;
  margin-left: 1rem;

  &::before {
    content: '';
    position: absolute;
    left: -9px;
    top: 1.8rem;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #4a90e2;
    border: 2px solid #1a1a1a;
  }

  h4 {
    margin: 0;
    color: #e0e0e0;
  }

  .details {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin: 0.5rem 0;
    flex-wrap: wrap;
  }

  .date {
    font-weight: bold;
    color: #888;
    font-size: 0.9rem;
  }

  .status {
    background-color: #333;
    color: #ccc;
    padding: 0.2rem 0.6rem;
    border-radius: 6px;
    font-size: 0.8rem;
  }

  p {
    margin: 0.5rem 0 0 0;
    color: #a1a1a1;
  }
`;

const TimelineEntry = ({ title, date, status, children }) => {
  return (
    <EntryContainer>
      <h4>{title}</h4>
      <div className="details">
        <span className="date">{date}</span>
        <span className="status">{status}</span>
      </div>
      <p>{children}</p>
    </EntryContainer>
  );
};

export default TimelineEntry;