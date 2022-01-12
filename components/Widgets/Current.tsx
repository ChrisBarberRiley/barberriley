import BookIcon from '@mui/icons-material/Book';
import HandymanIcon from '@mui/icons-material/Handyman';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function Current() {
  const data = [
    { icon: <HandymanIcon />, text: 'I am using', path: '/uses' },
    { icon: <BookIcon />, text: 'Currently reading', path: '/books' },
    // { icon: <DevicesIcon />, text: 'My Tech Stack', path: '/tech' },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <nav aria-label='main mailbox folders'>
        <List>
          {data.map(({ icon, text, path }) => (
            <ListItem disablePadding key={path}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
