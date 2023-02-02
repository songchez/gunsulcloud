import React from 'react';

import {
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  Box,
  Chip,
  MenuItem,
  Theme,
  useTheme,
} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(
  name: string,
  businessName: readonly string[],
  theme: Theme
) {
  return {
    fontWeight:
      businessName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
interface Names {
  kind: string;
  names: string[];
}

export default function MultipleSelectChip(props: Names) {
  const theme = useTheme();
  const [businessName, setbusinessName] = React.useState<string[]>([]);
  // TODO: businessName 데이터 전달!
  const handleChange = (event: SelectChangeEvent<typeof businessName>) => {
    const {
      target: { value },
    } = event;
    setbusinessName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div className="flex flex-col my-3 ">
      <FormControl>
        <InputLabel id="whatTheyhave">{props.kind}</InputLabel>
        <Select
          labelId="whatTheyhave"
          id="whatTheyhave"
          multiple
          value={businessName}
          onChange={handleChange}
          input={<OutlinedInput id="chip" label="보유면허" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, businessName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
