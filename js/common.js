/**
 * 메인 페이지(index.html)와 로그인 페이지(signin/index.html)에 공통으로 존재하는 HEADER, FOOTER 섹션에서 발생하는 동적인 상호 작용을 처리하는 파일입니다.
 */

// HEADER 섹션의 검색 버튼을 클릭했을 때 검색 상자가 표시되게 하고, 다른 곳을 클릭했을 때 검색 상자가 사라지게 합니다.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// FOOTER 섹션에 현재 연도를 표시합니다.
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();