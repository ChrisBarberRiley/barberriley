import Switch from '@mui/material/Switch';
import * as React from 'react';
import { useContext } from 'react';
import ThemeContext from '../context/context';

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);
  const { mode, setMode } = useContext(ThemeContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(!mode);
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
