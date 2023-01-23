import { TextField } from '@mui/material';

import { Section } from '../layout/Section';

export default function Diagnosis() {
  return (
    <div>
      <Section>
        <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
          <div className="text-2xl font-semibold">
            <div className="text-primary-500">기업진단</div>
          </div>

          <div className="flex justify-center">
            <TextField
              id="sangho"
              label="상호명"
              variant="outlined"
            ></TextField>
          </div>
        </div>
      </Section>
    </div>
  );
}
