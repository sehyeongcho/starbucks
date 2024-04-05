# Starbucks 웹 사이트
HTML, CSS, JavaScript를 이용한 Starbucks 웹 사이트입니다.

![Starbucks](https://github.com/sehyeongcho/starbucks/assets/124948262/ffb7cd85-5384-4ff7-b315-386ff500a481)

- Demo: <a href="https://silly-mooncake-a86c99.netlify.app/" target="_blank">https://silly-mooncake-a86c99.netlify.app/</a>

## 프로젝트 목표
Starbucks 웹 사이트 클론을 통해 웹의 구조를 담당하는 HTML, 콘텐츠를 꾸며주는 시각적인 표현을 담당하는 CSS, 페이지를 동작시키는 동적 처리를 담당하는 JavaScript에 대한 이해도를 높이고, Git을 이용한 버전 관리 및 Netlify를 이용한 지속적인 배포를 수행해 보는 것이 이 프로젝트의 목표입니다.

## 사용 기술
- HTML
- CSS
- JavaScript

## 학습 내용
- 오픈 그래프, 트위터 카드: 웹 사이트가 소셜 미디어를 통해 공유될 때 우선적으로 활용되는 정보를 지정합니다.
- SEO(Search Engine Optimization, 검색 엔진 최적화): 구글이나 네이버 등에 자신의 웹 사이트를 노출할 수 있도록 정보를 최적화하는 작업입니다.
- BEM(Block Element Modifier): HTML 클래스 속성의 작명법입니다. `__` 기호로 요소의 일부분을, `--` 기호로 요소의 상태를 표시할 수 있습니다.
  - `item__name`: 아이템 요소의 일부분인 이름을 표시합니다.
  - `button--gold`: 버튼 요소의 상태인 금색을 표시합니다.
- `opacity` 속성처럼 값을 숫자로 입력하는 속성들은, 전환 효과(`transition` 속성이나 GSAP 라이브러리 등)를 통해 요소의 전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어 줄 수 있지만, `display` 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에, 자연스러운 전환 효과를 적용할 수 없습니다.
- `padding-top` 속성은 부모 요소의 `width` 값을 기준으로 한다는 점을 이용해 `padding-top` 값을 56.25%로 지정하여 16:9 비율을 설정할 수 있습니다.
- `img` 요소가 `display: block`, `margin: 0 auto`인 경우, `width` 속성이 없어도 가운데 정렬이 가능합니다.
