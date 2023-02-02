import { useState } from 'react';

import { FormControl, ListSubheader, MenuItem, Select } from '@mui/material';

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
  const [selected, setSelected] = useState('');
  // TODO: selected 데이터 전달!

  const onchangeHandler = (event: {
    target: {
      value: string;
      name: string;
    };
  }) => {
    setSelected(event.target.value);
    console.log(selected); // 임시
  };
  return (
    <FormControl sx={{ m: 1, width: '100%' }}>
      <Select
        id="grouped-select"
        defaultValue={`건축`}
        name="등록하고싶은면허"
        onChange={onchangeHandler}
      >
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
  );
}
