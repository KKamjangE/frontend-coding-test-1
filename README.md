# Frontend Coding Test Skeleton

이 레포지토리는 Gaia 프론트엔드 개발자 과제 테스트용으로 제공된 기본 Next.js 프로젝트입니다.

---

## 📦 기술 스택

- Next.js 14 (App Router)
- TypeScript
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
public/
  image/                  // 이미지 에셋
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

- 메인 페이지(/)에서는 TaskStarter.tsx를 렌더링합니다.
- 통계 페이지(/statistics)에서는 StatPlaceholder.tsx를 렌더링합니다.
- `public/image` 디렉토리에서는 이미지를 관리합니다. 해당 디렉토리에 존재하는 에셋 외에도 자유롭게 이미지를 추가하셔도 됩니다.


## ✅ 작업 안내

### 과제 소개

병의원 예약(reservation) 기록 DB를 분석하여, 집계된 통계 자료를 UI 상에서 직관적으로 확인할 수 있는 페이지를 구축하는 과제입니다.
과제 진행을 위해 다음 리소스가 제공됩니다:

- Backend API 명세를 확인할 수 있는 Swagger UI
- 초기 설정이 완료된 Next.js 템플릿 레포지토리
- UI 디자인이 담긴 Figma URL

### 진행 방식

- 레포지토리를 fork하여, 2시간 반 동안 자유롭게 작업합니다. (타임 1의 경우 ~16:30, 타임 2의 경우 ~21:30)
- 2시간 반 이후 커밋은 평가 대상에 포함되지 않습니다.
- 작업 완료 후, Repo URL을 Google Form을 통해 제출합니다.
- 시험 종료 시각 전까지, [📋 과제 제출 방법](#과제-제출-방법)을 참고하여 작성한 개발 보고서를 Google Form을 통해 제출합니다.

### 최소 요구사항

1. 전체 UI를 제공된 Figma 디자인과 동일하게 구현해주세요.
2. GNB(Global Navigation Bar)에서 `statistics` 페이지를 제외한 모든 페이지는 `404` 페이지로 연결되도록 해주세요.
3. 메인 페이지 접속 시, 자동으로 `statistics` 페이지로 리다이렉션 해주세요.
4. statistics 도메인 하위에 다음 5개 페이지가 있습니다, customer-analysis 만 구현해주시고, 나머지 페이지는 SNB 클릭 시 `404` 페이지로 연결되도록 해주세요
   - `customer-analysis` ✅ (구현 대상)
   - `marketing-analysis` (필수 구현 대상 아님, accordion menu에 display만 시켜주세요 피그마 참조)
   - `dashboard`
   - `marketing-config`
   - `Revenue Analysis`
   - `Service Analysis`
   - `Performance Management`
5. `statistics/customer-analysis`도메인 하위에 다음 3개 페이지를 제작해주세요
   - `dashboard`
   - `funnel-distribution`
   - `retention-rate`
6. `/statistics/customer-analysis`로 접속할 경우, 자동으로 `/statistics/customer-analysis/dashboard`로 리다이렉션 되도록 해주세요.
7. 아코디언 형태의 사이드 네비게이션(SNB)에서, 위 3개 페이지 외의 경로로 접근할 경우 404 페이지로 연결되도록 해주세요.
8. `statistics` 하위 페이지는:
   - Figma에서 제공된 그래프를 구현해주세요.
   - 각 페이지 데이터는 제공된 API 명세서 엔드포인트를 호출하여 불러와주세요.
   - 그래프 구현 방식은 자유입니다.
9. `dashboard`페이지와 `retention-rate`페이지를 제외한 각 페이지에서는 일간 / 주간 / 월간 데이터를 디스플레이해주세요.
10. `dashboard` 페이지의 `funnel-distribution`, `retention-rate`그래프는 당일 정보를 불러와주세요, 해당 페이지를 제외한 타 그래프는 `public/image` 내의 그래프 이미지를 활용하셔도 됩니다.
11. `retention-rate` 페이지 내 api 호출 시 하기 파라미터를 기본으로 적용해주세요

```json
{
  "start_date": "2023-01-01",
  "end_date": "2025-04-29",
  "retention_days": 180
}
```

⚡ CSS 및 기타 라이브러리 활용은 자유입니다. 제한 없이 다양한 라이브러리를 활용해주세요 !

### 작업 링크

- [Swagger UI 바로가기](https://crm-stats-backend-232897014995.asia-northeast3.run.app/docs)
- [GitHub Repository 바로가기](https://github.com/gaia-corporation/frontend-coding-test-1)
- [Figma 바로가기](https://www.figma.com/design/vVjeF5uA3XVR8vqV8hziky/-%EA%B0%80%EC%9D%B4%EC%95%84-Task_Figma?node-id=0-1&t=AFqMshjQXxAmpErD-1)


## 📋 과제 제출 방법

- 본 레포지토리를 Fork한 뒤 작업을 진행해 주세요.
- 작업 완료 후, 본인의 Fork된 레포지토리 URL을 Google Form을 통해 제출해 주세요.
- Readme에 아래 내용을 포함하여 구현 보고서를 작성해 주세요.

### 구현 보고서에 포함해야 할 내용

1. 구현한 기능
2. 추가로 개선하거나 시도한 내용 (있을 경우)
3. 과제 수행 중 사용한 AI 도구 및 활용 범위

### 구현 보고서에 포함하면 좋은 내용 (선택 사항)

문제를 해결하는 과정에서,

- 어떠한 결정을 내릴 때 그러한 결정을 내리기까지의 사고 과정
- 문제 상황이 발생했을 때, 이를 해결하기 위해 어떤 접근을 했는지
- 특정 라이브러리를 사용한 경우, 해당 라이브러리를 선택한 이유
- 개발 과정에서 느낀 점 또는 추가로 공유하고 싶은 이야기

※ 자유로운 형식으로 작성해주시면 됩니다.

## ⚡ 주의사항

- 추가적인 라이브러리 설치가 필요한 경우 README나 별도 안내를 참고해 주세요.
- Next.js App Router(App Directory 구조)를 사용하고 있으니 페이지 추가 시 폴더/파일 규칙을 준수해 주세요.
- React 훅(useState, useEffect)을 사용할 때는 'use client'가 필요한지 반드시 확인해 주세요.

## ✉️ 문의 사항

과제 수행 중 궁금한 점이 있을 경우 해당 연락처를 통해 문의해 주세요.
slack 임시 채널을 열지?

## 📊 API 명세

Swagger UI: https://crm-stats-backend-232897014995.asia-northeast3.run.app/docs

---

### 📌 `GET /api/v1/stats/business/customers/gender-distribution`

**설명:**  
고객의 성별 분포 데이터를 조회합니다.

#### ✅ 요청 방식

`GET`

#### 🔄 응답 예시

```json
{
  "gender_distribution": {
    "남성": 18,
    "여성": 53
  }
}
```

### 📌 `GET /api/v1/stats/business/customers/funnel-distribution`

**설명:**  
고객 유입 경로에 대한 분포 데이터를 조회합니다.

#### ✅ 요청 방식

`GET`

#### 🔄 응답 예시

```json
{
  "funnel_distribution": {
    "기타": 40,
    "지인소개": 10,
    "네이버": 5,
    "기타어플": 5,
    "인스타그램": 4,
    "강남언니": 7
  }
}
```

### 📌 `GET /api/v1/stats/business/customers/retention-rate`

**설명:**  
고객 유지율 및 히스토그램 데이터를 조회합니다.

#### ✅ 요청 방식

`GET`

#### 🔄 응답 예시

```json
{
  "retention_rate": 51.16,         //재방문율
  "retained_patients": 1328,       //재방문 고객 수 
  "total_eligible_patients": 2596, //전체 고객 수 
  "retention_histogram": {
    "~30일": 348,
    "~60일": 519,
    "~90일": 461,
    "90일 초과": 65
  }
}
```
