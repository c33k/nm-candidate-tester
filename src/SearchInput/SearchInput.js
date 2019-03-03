import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Row } from 'antd';
import './SearchInput.css';

export default function SearchInput(props) {
  const { Search } = Input;
  const inputSearchEl = useRef(null);
  const expanded = useExpanded(false, props.changed, inputSearchEl);

  const searchButtonClassName = `search-button ${
    expanded.value ? 'hidden' : ''
  }`;
  const searchInputClassName = `search-input ${
    !expanded.value ? 'hidden' : ''
  }`;

  return (
    <Row
      type='flex'
      className={`SearchInput ${expanded.value ? 'expanded' : ''}`}
      justify='end'
      align='middle'
      style={{ height: '100%' }}
    >
      <Button
        className={searchButtonClassName}
        shape='circle'
        type='ghost'
        icon='search'
        onClick={expanded.handleExpandClick}
      />
      <Search
        ref={inputSearchEl}
        className={searchInputClassName}
        placeholder='Search program...'
        onBlur={expanded.handleInputBlur}
        onSearch={value => console.log(value)} //TODO: implement search
      />
    </Row>
  );
}

function useExpanded(initialValue, changed, inputSearchEl) {
  const [expanded, setExpanded] = useState(initialValue);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function handleInputBlur() {
    setExpanded(false);
  }

  //componentDidMount and componentDidUpdate
  useEffect(() => {
    changed(expanded);

    if (expanded) {
      inputSearchEl.current.focus();
    }
  }, [expanded]);

  return {
    value: expanded,
    handleExpandClick,
    handleInputBlur
  };
}
