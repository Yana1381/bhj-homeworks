
const tabsArray = Array.from(document.getElementsByClassName('tab'));
const tabsContentArray = Array.from(document.getElementsByClassName('tab__content'));

function tabClick() {
	for (let i = 0; i < tabsArray.length; i++) {
		let currentTab = tabsArray[i];
		if (currentTab.classList.contains('tab_active')) {
				currentTab.classList.remove('tab_active');
				tabsContentArray[tabsArray.indexOf(currentTab)].classList.remove('tab__content_active');
		}
    }
	this.classList.add('tab_active');
    tabsContentArray[tabsArray.indexOf(this)].classList.add('tab__content_active');
	
/* 	console.log(this);*/
}

tabsArray.forEach(element => {
    element.addEventListener('click', tabClick);
})



