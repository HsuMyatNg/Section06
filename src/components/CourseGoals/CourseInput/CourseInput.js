import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import styled from 'styled-components';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  // const FormControl = styled.div`
  //   margin: 0.5rem 0;

  //   & label {
  //   font-weight: bold;
  //   display: block;
  //   margin-bottom: 0.5rem;
  //   color: ${(props) => (props.invalid ? "red" : "black")};
  // }  
  //   & input {
  //   display: block;
  //   width: 100%;
  //   border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
  //   font: inherit;
  //   line-height: 1.5rem;
  //   padding: 0 0.25rem;
  // } 
  //   & input:focus {
  //   outline: none;
  //   background: ${(props) => (props.invalid ? "rgb(238,181,181)" : " #fad0ec")};
  //   border-color:  #ccc;
  // }
  // `;

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className = {!isValid && "invalid"}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}
        />
      </FormControl> */}
      <div className = {`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
