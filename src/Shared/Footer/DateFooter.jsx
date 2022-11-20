import React, {useState, useEffect} from 'react';

export default function DateFooter() {

    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
  return (
    <>
    <p className='text-center sm:text-1xl sm:text-2xl text-bold text-white'> &copy; dr.arifulislam@gmail.com - {date}</p>
    </>
  );
}