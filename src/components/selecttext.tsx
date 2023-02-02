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
interface InputChangeEvent {
  target: {
    value: string | any;
    name: string;
  };
}

interface Item {
  onchange: (event: InputChangeEvent) => void;
  // props로 전달할때 객체 파라미터를 받아야 할때 타입을 이런식으로 하면 된다. 구조형타입을 만들어 줄수도 있다.
}

export default function GroupedSelect(items: Item) {
  const onchangeHandler = (event: {
    target: {
      value: string;
      name: string;
    };
  }) => {
    items.onchange({
      // 부모스테이트에 직접전달
      target: { value: event.target.value, name: '등록하고싶은면허' },
    });
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
