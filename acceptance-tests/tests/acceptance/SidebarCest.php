<?php


class SidebarCest
{
    public function _before(AcceptanceTester $I)
    {
    }

    public function _after(AcceptanceTester $I)
    {
    }

    // tests
    public function testToOpenPersonalDataMenuItem(AcceptanceTester $I)
    {
        $I->wantTo('open user profile page');
        $I->amOnPage('index.html#/dashboard/home');
        $I->wait(1);
        $I->seeElement('//*[@id="side-menu"]/li[3]/a');
        $I->click('//*[@id="side-menu"]/li[3]/a');
        $I->wait(1);
        $I->seeElement('//*[@id="side-menu"]/li[3]/ul/li[1]/a');
        $I->click('//*[@id="side-menu"]/li[3]/ul/li[1]/a');
        $I->wait(1);
        $I->seeElement('img.avatar');
        $I->seeElement('div.card');
    }

    public function testToOpenContracts(AcceptanceTester $I) {
        $I->wantTo('open contracts page');
        $I->amOnPage('index.html#/dashboard/home');
        $I->reloadPage();
        $I->wait(1);
        $I->seeElement('//*[@id="side-menu"]/li[3]/a');
        $I->click('//*[@id="side-menu"]/li[3]/a');
        $I->wait(1);
        $I->seeElement('//*[@id="side-menu"]/li[3]/ul/li[2]/a');
        $I->click('//*[@id="side-menu"]/li[3]/ul/li[2]/a');
        $I->wait(1);
        $I->see('Contracts');
    }

    public function testToOpenPayments(AcceptanceTester $I){
        $I->wantTo('open payments page');
        $I->amOnPage('index.html#/dashboard/home');
        $I->reloadPage();
        $I->wait(1);
        $I->seeElement('//*[@id="side-menu"]/li[3]/a');
        $I->click('//*[@id="side-menu"]/li[3]/a');
        $I->wait(1);
        $I->seeElement('//*[@id="side-menu"]/li[3]/ul/li[3]/a');
        $I->click('//*[@id="side-menu"]/li[3]/ul/li[3]/a');
        $I->wait(1);
        $I->see('Payments and bills');
    }

    public function testToOpenRectorsOrder(AcceptanceTester $I) {
        $I->wantTo('open rectors orders page');
        $I->amOnPage('index.html#/dashboard/home');
        $I->reloadPage();
        $I->wait(1);
        $I->seeElement('//*[@id="side-menu"]/li[3]/a');
        $I->click('//*[@id="side-menu"]/li[3]/a');
        $I->wait(1);
        $I->seeElement('//*[@id="side-menu"]/li[3]/ul/li[4]/a');
        $I->click('//*[@id="side-menu"]/li[3]/ul/li[4]/a');
        $I->wait(1);
        $I->see('Rector\'s orders');
    }

    public function testToOpenGrades(AcceptanceTester $I) {
        $I->wantTo('open grades page');
        $I->amOnPage('index.html#/dashboard/home');
        $I->reloadPage();
        $I->wait(1);
        $I->seeElement('//*[@id="side-menu"]/li[3]/a');
        $I->click('//*[@id="side-menu"]/li[3]/a');
        $I->wait(1);
        $I->seeElement('//*[@id="side-menu"]/li[3]/ul/li[5]/a');
        $I->click('//*[@id="side-menu"]/li[3]/ul/li[5]/a');
        $I->wait(1);
        $I->see('Person grades');
    }

    public function testToOpenDocuments(AcceptanceTester $I) {
        $I->wantTo('open documents page');
        $I->amOnPage('index.html#/dashboard/home');
        $I->reloadPage();
        $I->wait(1);
        $I->seeElement('//*[@id="side-menu"]/li[8]/a');
        $I->click('//*[@id="side-menu"]/li[8]/a');
        $I->wait(1);
        $I->see('Documents and Statements templates');
    }


    public function testThatPublicSiteMenuItemContainsCorrectLink(AcceptanceTester $I) {
        $I->wantTo('check public site menu item contains correct link');
        $I->amOnPage('index.html#/dashboard/home');
        $I->reloadPage();
        $I->wait(1);
        $I->seeElement('a[href="http://tsi.lv"]');
    }

    public function testThatElearningMenuItemCntainesCorrectLink(AcceptanceTester $I) {
        $I->wantTo('check e-learning system menu item contains correct link');
        $I->amOnPage('index.html#/dashboard/home');
        $I->reloadPage();
        $I->wait(1);
        $I->seeElement('a[href="http://e.tsi.lv"]');
    }

    public function testThatLibraryMenuItenContainesCorrectLink(AcceptanceTester $I) {
        $I->wantTo('check library menu item contains correct link');
        $I->amOnPage('index.html#/dashboard/home');
        $I->reloadPage();
        $I->wait(1);
        $I->seeElement('a[href="http://services.tsi.lv/library/page.php"]');
    }
}
