import React from 'react';
import Seat from './Seat';

const SeatRow = ({ name }) => {
  return (
    <div className='flex justify-center gap-2 mb-2'>
      <Seat label={`${name}1`} value={`${name}-1`} />
      <Seat label={`${name}2`} value={`${name}-2`} />
      <Seat label={`${name}3`} value={`${name}-3`} />
      <Seat label={`${name}4`} value={`${name}-4`} />
      <Seat label={`${name}5`} value={`${name}-5`} />
      <Seat label={`${name}6`} value={`${name}-6`} />
      <Seat label={`${name}7`} value={`${name}-7`} />
      <Seat label={`${name}8`} value={`${name}-8`} />
      <Seat label={`${name}9`} value={`${name}-9`} />
      <Seat label={`${name}10`} value={`${name}-10`} />
    </div>
  )
}

export default SeatRow