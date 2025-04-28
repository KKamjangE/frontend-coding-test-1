'use client';

import { useRouter } from 'next/navigation';

export default function TaskStarter() {
  const router = useRouter();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p> 통계 페이지에서 과제 내용을 구현해주시면 됩니다.</p>
      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px dashed gray' }}>
        <h4>🛠 기본 요구사항</h4>
        <ul style={{ textAlign: 'left', display: 'inline-block', marginTop: '1rem' }}>
          <li>컴포넌트 분리</li>
          <li>상태 관리 (useState, useEffect 등)</li>
          <li>코드 가독성 및 클린 코드 유지</li>
          <li>추가 라이브러리 사용은 자유이며, 디렉토리 구조는 statistics 디렉토리 안에서 자유롭게 구성해주시면 됩니다.</li>
        </ul>
      </div>
    </div>
  );
}
