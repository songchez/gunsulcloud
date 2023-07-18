import Link from "next/link";
import { CenteredFooter } from "../components/footer/CenteredFooter";
import { Section } from "../components/layout/Section";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-100 flex flex-col justify-center">
      <Section>
        <CenteredFooter
          logo={<Logo width={180} height={80} />}
          iconList={
            <>
              <Link href="/">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                </svg>
              </Link>

              <Link href="/">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </Link>

              <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </Link>
            </>
          }
          navlink={
            <>
              <li>
                <Link href="/mna">양도양수</Link>
              </li>
              <li>
                <Link href="/incorporation">법인설립</Link>
              </li>
              <li>
                <Link href="/registration">신규등록</Link>
              </li>
              <li>
                <Link href="/firmdiagnosis">기업진단</Link>
              </li>
              <li>
                <Link href="/clientservice">고객지원</Link>
              </li>
            </>
          }
        >
          <div className="text-primary-800/60 w-7/12">
            경기도 파주시 가람로116번길 107(운정한강듀클래스 9층 5호) |
            사업자등록번호: 797-23-00855 | 대표: 우선희 | 이메일:
            sunjinju72@naver.com | 전화: 031-942-5592 | 팩스: 031-941-4911
          </div>
        </CenteredFooter>
      </Section>
    </footer>
  );
}
