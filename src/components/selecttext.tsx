import {
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
} from '@mui/material';

interface Businesstype {
  종합건설업: string[];
  전문건설업: string[];
}

const businesstype: Businesstype = {
  종합건설업: ['토목', '건축', '토목건축', '산업설비', '조경'],
  전문건설업: [
    '지반조성포장',
    '실내건축',
    '금속창호지붕조립',
    '도장습식방수석공',
    '조경식재시설물',
    '철근콘크리트',
    '구조물해체비계',
    '상하수도설비',
    '철도궤도',
    '철강구조물',
    '수중준설',
    '승강기삭도',
    '기계가스설비',
    '가스난방',
  ],
};

export default function GroupedSelect() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">건설업</InputLabel>
        <Select id="grouped-select" label="건설업">
          <ListSubheader>종합건설업</ListSubheader>
          {businesstype.종합건설업.map((ops) => (
            <MenuItem key={ops} value={ops}>
              {ops}
            </MenuItem>
          ))}
          <ListSubheader>전문건설업</ListSubheader>
          {businesstype.전문건설업.map((ops) => (
            <MenuItem key={ops} value={ops}>
              {ops}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
