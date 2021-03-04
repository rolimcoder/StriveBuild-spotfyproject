///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ========== login scripts ================
///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* loginBtn.addEventListener('click', () => {
  login.classList.add('d-none');
  home.classList.remove('d-none');
  showHomePage();
});
 */
window.onload = () => {
  login.classList.add('d-none');
  home.classList.remove('d-none');
  showHomePage();
  // openSideMenuBtn.click();
  fillUsersPlayList(musicStore, [userPlaylists, sideMenuMobile]);
};

// change navbar color on scroll
window.addEventListener('scroll', changeNavBg);

function changeNavBg() {
  console.log(pageYOffset);
  if (pageYOffset > 100) {
    if (navBar.classList.contains('backdrop-blur')) return;
    navBar.style.transform = 'translateY(-200px)';
    setTimeout(() => {
      navBar.classList.remove('bg-transparent');
      navBar.classList.add('backdrop-blur');
      navBar.style.transform = 'translateY(0)';
    }, 100);
  }

  if (pageYOffset === 0) {
    navBar.style.transform = 'translateY(-200px)';
    setTimeout(() => {
      navBar.style.transform = 'translateY(0)';
      navBar.classList.add('bg-transparent');
      navBar.classList.remove('backdrop-blur');
    }, 100);
  }
}

// open side-mobile menu
openSideMenuBtn.addEventListener('click', hideHome);
function hideHome(e) {
  e.preventDefault();

  homeWrapper.style.transform = 'translateX(100%)';
  musicPlayer.style.transform = 'translateX(100%)';
  mobileBottomMenu.style.transform = 'translateX(100%)';
  sideMenuMobile.style.transform = 'translateX(0)';
  navBar.classList.remove('animate__bounceInDown');
  musicPlayer.classList.remove('animate__bounceInDown');
  mobileBottomMenu.classList.remove('animate__bounceInDown');
  sideMenuMobileBtn.classList.add('animate__bounceInDown');
}
// close side menu btn
sideMenuMobileBtn.addEventListener('click', (e) => {
  e.preventDefault();
  sideMenuMobileBtn.classList.remove('animate__bounceInDown');
  console.log('fire');
  homeWrapper.style.transform = 'translateX(0)';
  musicPlayer.style.transform = 'translateX(0)';
  mobileBottomMenu.style.transform = 'translateX(0)';
  sideMenuMobile.style.transform = 'translateX(-100%)';
  navBar.classList.add('animate__bounceInDown');
  musicPlayer.classList.add('animate__bounceInDown');
  mobileBottomMenu.classList.add('animate__bounceInDown');
});

///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ========== mobile menu bottom ================
///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const [homeBtnMobile, searchBtnMobile, libraryBtnMobile] = [
  ...document.querySelectorAll('#mobileBottomMenu a'),
];
const root = document.querySelector(':root');

const mobileMenuBottomBtns = document.querySelectorAll('#mobileBottomMenu a');
homeBtnMobile.addEventListener('click', goToHome);
searchBtnMobile.addEventListener('click', goTosearch);
libraryBtnMobile.addEventListener('click', goTolibrary);
homeSideDesktop.addEventListener('click', goToHomeSide);
searchSideDesktop.addEventListener('click', goTosearchSide);
librarySideDesktop.addEventListener('click', goTolibrarySide);
installAppBtn.addEventListener('click', installApp);

// animate active button
const makeActive = (target) => {
  mobileMenuBottomBtns.forEach((btn) => btn.classList.remove('active'));
  target.classList.add('active');
  switch (target.id) {
    case 'homeBottom':
      root.style.setProperty('--left-postition-bottom-menu', '-97px');
      break;
    case 'searchBottom':
      root.style.setProperty('--left-postition-bottom-menu', '0px');
      break;
    case 'libraryBottom':
      root.style.setProperty('--left-postition-bottom-menu', '+97px');
      break;
  }
};

function makeActiveSideMenu(target) {
  homeSideDesktop.classList.remove('active');
  searchSideDesktop.classList.remove('active');
  librarySideDesktop.classList.remove('active');
  installAppBtn.classList.remove('active');
  target.classList.add('active');
}

function goToHome(e) {
  e.preventDefault();
  makeActive(e.currentTarget);
  showHomePage();
}
function goTosearch(e) {
  e.preventDefault();
  makeActive(e.currentTarget);
  showSearchPage();
}
function goTolibrary(e) {
  e.preventDefault();
  makeActive(e.currentTarget);
}

// spotify logo home page
spotifyLogo.addEventListener('click', (e) => {
  e.preventDefault();
  homeSideDesktop.classList.add('active');
  searchSideDesktop.classList.remove('active');
  librarySideDesktop.classList.remove('active');
  installAppBtn.classList.remove('active');
  showHomePage();
});

function goToHomeSide(e) {
  e.preventDefault();
  makeActiveSideMenu(e.currentTarget);
  showHomePage();
}
function goTosearchSide(e) {
  e.preventDefault();
  makeActiveSideMenu(e.currentTarget);
  showSearchPage();
}
function goTolibrarySide(e) {
  e.preventDefault();
  makeActiveSideMenu(e.currentTarget);
  // showLibrary()
}

function installApp(e) {
  e.preventDefault();
  makeActiveSideMenu(e.currentTarget);
  showAppDownLoadPage();
}
