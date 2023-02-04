import { FormControl, MenuItem, Select } from '@mui/material';

interface Menuitem {
  menuitem: string[];
  subject: string;
  devalue: string;
  name: string;
  onchange: (event: InputChangeEvent) => void;
  // props로 전달할때 객체 파라미터를 받아야 할때 타입을 이런식으로 하면 된다. 구조형타입을 만들어 줄수도 있다.
}

export default function GroupedSelect2({
  menuitem,
  subject,
  devalue,
  name,
  onchange,
}: Menuitem) {
  return (
    <div>
      <div className="mb-2 text-lg">{subject}</div>
      <FormControl sx={{ width: '100%' }}>
        <Select
          id="grouped-select"
          defaultValue={devalue}
          name={name}
          onChange={onchange}
          // 셀렉트의 온체인지함수가 'onchage'객체를 inputChangeHandler로 넘겨줌
        >
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
