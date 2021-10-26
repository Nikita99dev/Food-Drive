import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export function DescriptionAlert() {
  return (
    <Stack sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}  spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Your email/password invalid — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}

export function DescriptionAlert2() {
  return (
    <Stack sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}  spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Enter Correct Email — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}

export function DescriptionAlert3() {
  return (
    <Stack sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}  spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Email Already Exists — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}
