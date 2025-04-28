# Frontend Coding Test Skeleton

이 레포지토리는 가이아 프론트엔드 개발자 코딩 테스트를 위해 제공된 기본 Next.js 프로젝트입니다.

---

## 📦 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (선택 가능, 기본 설치 X)
- Client Side Rendering (CSR) 기본 구조
- ESLint 기본 설정 포함

---

## 🚀 설치 및 실행 방법

아래 명령어를 터미널에 입력하여 프로젝트를 실행할 수 있습니다.

```bash
# 패키지 설치
yarn install

# 개발 서버 실행
yarn dev

# 기본 실행 주소: http://localhost:3000
```

## 🛠 프로젝트 구조
```bash
src/
  app/
    page.tsx              // 메인 페이지
    statistics/
      page.tsx             // 통계 페이지
  components/
    main/
      TaskStarter.tsx      // 메인용 컴포넌트
    statistics/
      StatPlaceholder.tsx  // 통계용 컴포넌트
```
메인 페이지(/)에서는 TaskStarter.tsx를 렌더링합니다.

통계 페이지(/statistics)에서는 StatPlaceholder.tsx를 렌더링합니다.

레이아웃 상단에는 메인/통계 페이지를 오가는 버튼이 제공됩니다.

## ✅ 작업 안내
작업은 src/components/statistics 경로에서 자유롭게 수정하거나 확장하며 진행해주세요.

모든 컴포넌트는 기본적으로 'use client' 지시어가 포함되어 있으며, CSR 환경에서 작동합니다.

## 📋 과제 제출 방법
본 레포지토리를 Fork한 뒤 작업해 주세요.

작업 완료 후, 본인의 Fork된 레포지토리 URL을 제출해 주세요.

제출 시 포함해야 하는 것:

구현한 기능

추가로 개선하거나 시도한 내용 (있을 경우)

과제 수행 간 사용한 AI 도구 및 검색 방법 요약

## ⚡ 주의사항
추가적인 라이브러리 설치가 필요한 경우 README나 별도 안내를 참고해 주세요.

Next.js App Router(App Directory 구조)를 사용하고 있으니 페이지 추가 시 폴더/파일 규칙을 준수해 주세요.

React 훅(useState, useEffect)을 사용할 때는 'use client'가 필요한지 반드시 확인해 주세요.

## ✉️ 문의 사항
과제 수행 중 궁금한 점이 있을 경우 해당 연락처를 통해 문의해 주세요.
slack 임시 채널을 열지?