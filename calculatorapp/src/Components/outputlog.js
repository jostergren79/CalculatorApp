import React from 'react';
 
const useStateWithLocalStorage = localStorageKey => {
  const [result, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );
 
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, result);
  }, [result]);
 
  return [result, setValue];
};
 
const App = () => {
  const [result, setValue] = useStateWithLocalStorage(
    'myValueInLocalStorage'
  );
 
  const onChange = event => setValue(event.target.result);
 
  return (
    <div>
 
      <input result={result} type="text" onChange={onChange} />
 
      <p>{result}</p>
    </div>
  );
};
 
export default App;