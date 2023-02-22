import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import TableTem from '../components/muitables';

function createData(name: string, peoSkill: string, cash: string) {
  return { name, peoSkill, cash };
}

const conRows = [
  createData(
    '토목공사업',
    '다음의 어느 하나에 해당하는 사람 중 2명을 포함한 「건설기술 진흥법」에 따른 토목 분야의 초급 이상 건설기술인 6명 이상 \n \n1) 「국가기술자격법」에 따른 토목기사 \n2) 「건설기술 진흥법」에 따른 토목 분야의 중급 이상 건설기술인',
    '법인: 5억원 이상 \n개인 : 10억원 이상'
  ),
  createData(
    '건축공사업',
    '다음의 어느 하나에 해당하는 사람 중 2명을 포함한 「건설기술 진흥법」에 따른 건축 분야의 초급 이상 건설기술인 5명 이상 \n\n1) 「국가기술자격법」에 따른 건축기사 \n2) 「건설기술 진흥법」에 따른 건축 분야의 중급 이상 건설기술인',
    '법인 : 3.5억원 이상 \n개인 : 7억원 이상'
  ),
  createData(
    '토목건축\n공사업',
    '다음의 어느 하나에 해당하는 사람을 포함한 「건설기술 진흥법」에 따른 초급 이상(같은 법 시행령 별표 1 제3호차목 중 건설금융ㆍ재무, 건설기획, 건설정보처리 분야는 제외한다)의 건설기술인 11명 이상\n\n1) 다음의 어느 하나에 해당하는 사람 중 2명을 포함한 토목 분야의 초급 이상 건설기술인 5명 이상\n 가) 「국가기술자격법」에 따른 토목기사\n 나) 「건설기술 진흥법」에 따른 토목 분야의 중급 이상 건설기술인 \n 2) 다음의 어느 하나에 해당하는 사람 중 2명을 포함한 건축 분야의 초급 이상 건설기술인 5명 이상\n가) 「국가기술자격법」에 따른 건축기사\n나) 「건설기술 진흥법」에 따른 건축 분야의 중급 이상 건설기술인 ',
    '법인 : 8.5억원 이상 \n개인 : 17억원 이상'
  ),
  createData(
    '산업ㆍ환경설비공사업',
    '건설기술 진흥법」에 따른 초급 이상(같은 법 시행령 별표 1 제3호차목 중 건설금융ㆍ재무, 건설기획, 건설정보처리 분야는 제외한다)의 건설기술인 또는 「국가기술자격법」에 따른 건축, 토목, 조경, 광업자원, 기계, 금속ㆍ재료, 화공, 전기ㆍ전자, 정보통신, 안전관리, 환경ㆍ에너지 분야의 분야의 산업기사 이상의 기술자격취득자 12명 이상. 이 경우 다음의 어느 하나에 해당하는 사람 중 6명을 포함해야 한다.\n\n1) 「국가기술자격법」에 따른 건축, 토목, 조경, 광업자원, 기계, 금속ㆍ재료, 화공, 전기ㆍ전자, 정보통신, 안전관리, 환경ㆍ에너지 분야의 기사 이상의 기술자격취득자\n2) 「건설기술 진흥법」에 따른 중급 이상의 건설기술인',
    '법인 : 8.5억원 이상 개인 : 17억원 이상'
  ),
  createData(
    '조경공사업',
    '1) 다음의 어느 하나에 해당하는 사람 중 2명을 포함한 「건설기술 진흥법」에 따른 조경 분야의 초급 이상 건설기술인 4명 이상\n\n가) 「국가기술자격법」에 따른 조경기사\n나) 「건설기술 진흥법」에 따른 조경 분야의 중급 이상 건설기술인\n2) 「건설기술 진흥법」에 따른 토목 분야의 초급 건설기술인 1명 이상\n3) 「건설기술 진흥법」에 따른 건축 분야의 초급 건설기술인 1명 이상',
    '법인 : 5억원 이상 \n개인 : 10억원 이상'
  ),
];
/* 지반조성포장공사업 */
const exRows1 = [
  createData(
    '지반조성ㆍ포장공사업',
    '다음의 어느 하나에 해당하는 사람 중 2명을 포함한 「건설기술 진흥법」에 따른 토목 분야의 초급 이상 건설기술인 6명 이상 \n \n1) 「국가기술자격법」에 따른 토목기사 \n2) 「건설기술 진흥법」에 따른 토목 분야의 중급 이상 건설기술인',
    '법인: 5억원 이상 \n개인 : 10억원 이상'
  ),
  createData(
    '건축공사업',
    '다음의 어느 하나에 해당하는 사람 중 2명을 포함한 「건설기술 진흥법」에 따른 건축 분야의 초급 이상 건설기술인 5명 이상 \n\n1) 「국가기술자격법」에 따른 건축기사 \n2) 「건설기술 진흥법」에 따른 건축 분야의 중급 이상 건설기술인',
    '법인 : 3.5억원 이상 \n개인 : 7억원 이상'
  ),
  createData(
    '토목건축\n공사업',
    '다음의 어느 하나에 해당하는 사람을 포함한 「건설기술 진흥법」에 따른 초급 이상(같은 법 시행령 별표 1 제3호차목 중 건설금융ㆍ재무, 건설기획, 건설정보처리 분야는 제외한다)의 건설기술인 11명 이상\n\n1) 다음의 어느 하나에 해당하는 사람 중 2명을 포함한 토목 분야의 초급 이상 건설기술인 5명 이상\n 가) 「국가기술자격법」에 따른 토목기사\n 나) 「건설기술 진흥법」에 따른 토목 분야의 중급 이상 건설기술인 \n 2) 다음의 어느 하나에 해당하는 사람 중 2명을 포함한 건축 분야의 초급 이상 건설기술인 5명 이상\n가) 「국가기술자격법」에 따른 건축기사\n나) 「건설기술 진흥법」에 따른 건축 분야의 중급 이상 건설기술인 ',
    '법인 : 8.5억원 이상 \n개인 : 17억원 이상'
  ),
];
/* 실내건축공사업 */
const exRows2 = [
  createData(
    '지반조성ㆍ포장공사업',
    '다음의 어느 하나에 해당하는 사람 중 2명을 포함한 「건설기술 진흥법」에 따른 토목 분야의 초급 이상 건설기술인 6명 이상 \n \n1) 「국가기술자격법」에 따른 토목기사 \n2) 「건설기술 진흥법」에 따른 토목 분야의 중급 이상 건설기술인',
    '법인: 5억원 이상 \n개인 : 10억원 이상'
  ),
  createData(
    '건축공사업',
    '다음의 어느 하나에 해당하는 사람 중 2명을 포함한 「건설기술 진흥법」에 따른 건축 분야의 초급 이상 건설기술인 5명 이상 \n\n1) 「국가기술자격법」에 따른 건축기사 \n2) 「건설기술 진흥법」에 따른 건축 분야의 중급 이상 건설기술인',
    '법인 : 3.5억원 이상 \n개인 : 7억원 이상'
  ),
  createData(
    '토목건축\n공사업',
    '다음의 어느 하나에 해당하는 사람을 포함한 「건설기술 진흥법」에 따른 초급 이상(같은 법 시행령 별표 1 제3호차목 중 건설금융ㆍ재무, 건설기획, 건설정보처리 분야는 제외한다)의 건설기술인 11명 이상\n\n1) 다음의 어느 하나에 해당하는 사람 중 2명을 포함한 토목 분야의 초급 이상 건설기술인 5명 이상\n 가) 「국가기술자격법」에 따른 토목기사\n 나) 「건설기술 진흥법」에 따른 토목 분야의 중급 이상 건설기술인 \n 2) 다음의 어느 하나에 해당하는 사람 중 2명을 포함한 건축 분야의 초급 이상 건설기술인 5명 이상\n가) 「국가기술자격법」에 따른 건축기사\n나) 「건설기술 진흥법」에 따른 건축 분야의 중급 이상 건설기술인 ',
    '법인 : 8.5억원 이상 \n개인 : 17억원 이상'
  ),
];
export default function ConstructionRegistration() {
  return (
    <div>
      <div className="p-5 text-sm">
        <h1 className="text-lg">
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
        <h2 className="m-1 text-xl">종합건설업 등록기준</h2>
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
              {conRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.peoSkill}</TableCell>
                  <TableCell align="left">{row.cash}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <h2 className="m-1 text-xl">전문건설업 등록기준</h2>
        <br />
        <h3 className="m-1">지반조성ㆍ포장공사업</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ width: 90 }}>
                  직무분야
                </TableCell>
                <TableCell align="center" sx={{ width: 350 }}>
                  기술능력
                </TableCell>
                <TableCell align="center" sx={{ width: 250 }}>
                  시설장비
                </TableCell>
                <TableCell align="center" sx={{ width: 140 }}>
                  자본금
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exRows1.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.peoSkill}</TableCell>
                  <TableCell align="left">{row.cash}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableTem data={exRows2}></TableTem>
      </div>
    </div>
  );
}
