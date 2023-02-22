import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name: string, peoSkill: string, cash: string) {
  return { name, peoSkill, cash };
}

const rows = [
  createData(
    '토목공사업',
    '다음의 어느 하나에 해당하는 사람 중 2명을 포함한 「건설기술 진흥법」에 따른 토목 분야의 초급 이상 건설기술인 6명 이상 \n1) 「국가기술자격법」에 따른 토목기사 \n2) 「건설기술 진흥법」에 따른 토목 분야의 중급 이상 건설기술인',
    '법인: 5억원 이상 \n개인 : 10억원 이상'
  ),
  createData(
    '건축공사업',
    '다음의 어느 하나에 해당하는 사람 중 2명을 포함한 「건설기술 진흥법」에 따른 건축 분야의 초급 이상 건설기술인 5명 이상 \n1) 「국가기술자격법」에 따른 건축기사 \n2) 「건설기술 진흥법」에 따른 건축 분야의 중급 이상 건설기술인',
    '법인 : 5억원 이상 \n개인 : 10억원 이상'
  ),
  createData(
    '토목건축공사업',
    '다음의 어느 하나에 해당하는 사람을 포함한 「건설기술 진흥법」에 따른 초급 이상(같은 법 시행령 별표 1 제3호차목 중 건설금융ㆍ재무, 건설기획, 건설정보처리 분야는 제외한다)의 건설기술인 11명 이상\n1) 다음의 어느 하나에 해당하는 사람 중 2명을 포함한 토목 분야의 초급 이상 건설기술인 5명 이상\n 가) 「국가기술자격법」에 따른 토목기사\n 나) 「건설기술 진흥법」에 따른 토목 분야의 중급 이상 건설기술인 \n 2) 다음의 어느 하나에 해당하는 사람 중 2명을 포함한 건축 분야의 초급 이상 건설기술인 5명 이상\n가) 「국가기술자격법」에 따른 건축기사\n나) 「건설기술 진흥법」에 따른 건축 분야의 중급 이상 건설기술인 ',
    '법인 : 5억원 이상 \n개인 : 10억원 이상'
  ),
  createData(
    '가. 토목공사업',
    '다음의 어느 하나에 해당하는 사람 중 2명을 포함한 「건설기술 진흥법」에 따른 토목 분야의 초급 이상 건설기술인 6명 이상1) 「국가기술자격법」에 따른 토목기사 2) 「건설기술 진흥법」에 따른 토목 분야의 중급 이상 건설기술인',
    '법인 : 5억원 이상 개인 : 10억원 이상'
  ),
  createData(
    '가. 토목공사업',
    '다음의 어느 하나에 해당하는 사람 중 2명을 포함한 「건설기술 진흥법」에 따른 토목 분야의 초급 이상 건설기술인 6명 이상1) 「국가기술자격법」에 따른 토목기사 2) 「건설기술 진흥법」에 따른 토목 분야의 중급 이상 건설기술인',
    '법인 : 5억원 이상 개인 : 10억원 이상'
  ),
];

export default function ConstructionRegistration() {
  return (
    <div>
      <div className="p-5 text-sm">
        <h1 className="text-xl">
          제13조(건설업의 등록기준) ①건설산업기본법 제10조에 따른 건설업의
          등록기준
        </h1>
        <br />
        <span>
          1. 별표 2에 따른 기술능력ㆍ자본금(개인인 경우에는 건설업에 제공되는
          자산의 평가액을 말한다. 이하 같다)ㆍ시설 및 장비(전문공사를 시공하는
          업종의 경우에는 주력분야의 기술능력ㆍ자본금ㆍ시설 및 장비를 말한다)를
          갖출 것 <br /> 2. 「건축법」 등 관계 법령에 적합하고, 건설업을
          등록하려는 시ㆍ도 안에 위치한사무실을 갖출 것 <br />
          3. 국가를 당사자로 하는 계약에 관한 법령, 지방자치단체를 당사자로 하는
          계약에 관한 법령, 공공기관의 운영에 관한 법령 또는 지방공기업법령에
          따라 부정당업자로 입찰참가자격이 제한된 경우에는 그 기간이 경과되었을
          것 <br />
          5. 건설업영업정지처분을 받은 경우에는 그 기간이 경과되었을 것 <br />
          [시행일 : 2022. 1. 1.] 제13조
        </span>
      </div>
      <div className="p-3">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ width: 90 }}>
                  건설종목
                </TableCell>
                <TableCell align="center" sx={{ width: 350 }}>
                  기술능력
                </TableCell>
                <TableCell align="center" sx={{ width: 140 }}>
                  자본금
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.peoSkill}</TableCell>
                  <TableCell align="right">{row.cash}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
