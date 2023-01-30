import { FormControl, MenuItem, Select } from '@mui/material';

interface Menuitem {
  menuitem: string[];
  subject: string;
  devalue: string;
}

export default function GroupedSelect2({
  menuitem,
  subject,
  devalue,
}: Menuitem) {
  return (
    <div>
      <div className="mx-2 text-lg">{subject}</div>
      <FormControl sx={{ mx: 1, minWidth: 120 }}>
        <Select id="grouped-select" defaultValue={devalue}>
          {menuitem.map((ops, idx) => (
            <MenuItem key={idx} value={ops}>
              {ops}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
