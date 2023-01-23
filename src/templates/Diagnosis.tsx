import { Button, Container, TextField } from '@mui/material';

import { Section } from '../layout/Section';

export default function Diagnosis() {
  return (
    <div className="flex-row justify-center w-full p-4">
      <Section>
        <div className="flex flex-col justify-center gap-4">
          <div className="text-2xl font-semibold">
            <div className="text-primary-500">기업진단</div>
          </div>
          <TextField id="sangho" label="상호명" variant="outlined"></TextField>
          <TextField
            id="jabongum"
            label="자본금"
            variant="outlined"
          ></TextField>
          <TextField id="dugazza" label="상태_1" variant="outlined"></TextField>
          <TextField
            id="dugazza"
            label="기술인력"
            variant="outlined"
          ></TextField>
          <TextField id="dugazza" label="상태_2" variant="outlined"></TextField>
          <div className="flex-col justify-center m-5">
            <Container>
              <Button variant="outlined" size="large">
                기업진단받기
              </Button>
            </Container>
          </div>
        </div>
      </Section>
    </div>
  );
}
