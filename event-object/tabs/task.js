
const tabsArray = Array.from(document.getElementsByClassName('tab'));
const tabsContentArray = Array.from(document.getElementsByClassName('tab__content'));

function tabClick() {
	for (let i = 0; i < tabsArray.length; i++) {
		let currentTab = tabsArray[i];
		if (currentTab.classList.contains('tab_active')) {
				currentTab.classList.remove('tab_active');
          
		}
    }; 
}

document.addEventListener('click', tabClick);

