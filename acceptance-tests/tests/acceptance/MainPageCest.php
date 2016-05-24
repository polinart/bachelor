<?php


class MainPageCest
{
    public function _before(AcceptanceTester $I)
    {
    }

    public function _after(AcceptanceTester $I)
    {
    }

    // tests
    public function testThatUserSeeNewsList(AcceptanceTester $I)
    {
        $I->wantTo('see news list');
        $I->amOnPage('index.html#/dashboard/home');
        $I->wait(1);
        $I->see('Latest news');
    }

    public function testThatUserSeeOneNews(AcceptanceTester $I) {
        $I->wantTo('see one news page');
        $I->amOnPage('index.html#/dashboard/home');
        $I->wait(1);
        $I->see('Read more', 'a');
        $I->click('//*[@id="page-wrapper"]/div/div/div/div[1]/div/div[2]/div[1]/div/div[2]/div[2]/p[2]/a');
        $I->wait(1);
        $I->seeElement('.news-div');
    }

    public function testThatUserSeeSchedule(AcceptanceTester $I) {
        $I->wantTo('see schedule');
        $I->amOnPage('index.html#/dashboard/home');
        $I->wait(1);
        $I->seeElement('div.tabs-schedule');
    }

    public function testScheduleTabToggle(AcceptanceTester $I) {
        $I->wantTo('toggle schedule tabs');
        $I->amOnPage('index.html#/dashboard/home');
        $I->wait(1);
        $I->seeElement('a[data-target="#month"]');
        $I->click('a[data-target="#month"]');
        $I->wait(1);
        $I->dontSeeElement('div[id="day"]');
    }

}
