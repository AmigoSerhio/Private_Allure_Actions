const signUpPage = require('../pageobjects/signUp.page');
const mainPage = require('../pageobjects/main.page.js');

const signInPage = require('../pageobjects/signIn.page');






describe('Webdriverio_test', () => {

	
const assert = require('assert');




it.only('homeTask_Lesson_9',() => {
	/*1 Зайти на сайт https://webdriver.io
2 Кликнуть на кнопку сверху странички "API" (использовать локатор "li a[href="/docs/api.html"]")
3 Напечатать в "Terminal" Visual Studio Code текущий адрес в страке браузера( console.log(...))
4 Распечатать заглавие странички( использовать локатор ".postHeaderTitle")
5Распечатать атрибут href элемента (использовать локатор "//*[text()="JSONWire protocol"]")
6 Напечатать текст "test is " в строке поиска (использовать локатор "'#search_input_react'")
7 Добавить к существующему тексту в строке поиска тест "DONE!"  (использовать локатор "'#search_input_react'")
8 Сделать паузу в тесте на 5 секунд.
*/
     
	browser.url('https://webdriver.io/');
	browser.pause(1000);
	   browser.setWindowSize(1500, 950);
	   $('//*/nav//*/a[3]').click();
	   browser.pause(1000);
	   console.log(browser.getUrl());
	   console.log($('.docTitle_3a4h').getText());
	   console.log($('//*[text()="JSONWire protocol"]').getAttribute('href'));
	   let wdioSearchBox = $('.DocSearch-Button-Placeholder');
	   wdioSearchBox.click(); 
	   browser.pause(1000);
	   let algoliaSearchBox = $('.DocSearch-Input');
       algoliaSearchBox.addValue('test is ');  
	   browser.pause(2000);
	   algoliaSearchBox.addValue('DONE!'); 
	   browser.pause(5000)})


it.only(' homeTask_Lesson_14',() => {
	
	/*1. Перейти на страничку https://webdriver.io/docs/api.html
2. Открыть ссылку //*[text()="JSONWire protocol"] в новой Табе(используем getAttribute() и newWindow()) браузера
3. Переключиться на открытую табу
4. Проверить, что элемент 'strong a[href="/SeleniumHQ/selenium/wiki"]' видимый пользователю (isDisplayed). Результат вывести через consle.log()
5. Переключаемся назад на Табу 'https://webdriver.io/docs/api.html'
6. Используя метод waitUntil ждем пока текст, который содержиться в элементе ".postHeaderTitle" (используем метод getText())равен "API Docs"
7. Делаем скриншот элемента ".postHeaderTitle"
8. Печатаем результат выполнения команды isDisplayed() в консоль для локатора 'href="https://twitter.com/webdriverio"'
9. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора 'href="https://twitter.com/webdriverio"'
10. Скролим к элементу 'href="https://twitter.com/webdriverio"'
11. Печатаем результат выполнения команды isDisplayed() в консоль для локатора 'href="https://twitter.com/webdriverio"'
12. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора 'href="https://twitter.com/webdriverio"'
13. Печатаем результат выполнения команды isFocused для локатора href="/blog/"
14. Кликаем по локатору  href="/blog/"
15. Выводим результат выполнения команды isFocused для локатора href="/blog/"
*/
	const jsonWire = $('//*[text()="JSONWire protocol"]');
	const homeButton = $('strong a[href="/SeleniumHQ/selenium/wiki"]');
	const header =$('.docTitle_3a4h');
	const twitter =$('[href="https://twitter.com/webdriverio"]');
	const blog = $('[class="footer__link-item"][href="/blog"]'); 
	browser.url('https://webdriver.io/docs/api');								//1
    browser.newWindow(jsonWire.getAttribute('href'));							//2,3	
	console.log('homeButton.isDisplayed? '+homeButton.isDisplayed());			//4
	browser.switchWindow('webdriver.io');										//5	
	browser.waitUntil(															//6							
        () => header.getText() === 'Introduction',
        {
            timeout: 2000,
            timeoutMsg: 'Eror h1 header is not = Introduction'
        }
    );
	browser.saveScreenshot('header.png');										//7		
	console.log('twitter.isDisplayed? '+twitter.isDisplayed()+ 
		'; twitter.isDisplayedInViewPort? '+twitter.isDisplayedInViewport());	//8,9
	twitter.scrollIntoView();													//10
	console.log('twitter.isDisplayed After Scrolling? '+twitter.isDisplayed()+  //11,12
	 		'; twitter.isDisplayedInViewPort After Scrolling? '+
	 		twitter.isDisplayedInViewport());
	console.log('blog.isFocused before clck' + blog.isFocused())				//13	
	blog.click();																//14						
	console.log('blog.isFocused after click ' + blog.isFocused())				//15

})




		
	})