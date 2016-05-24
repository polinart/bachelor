<?php


class LoginCest
{
    public function _before(AcceptanceTester $I)
    {
    }

    public function _after(AcceptanceTester $I)
    {
    }

    // tests
    public function testLoginToSite(AcceptanceTester $I)
    {
        $I->wantTo('log in to site');
        $I->amOnPage('/#/login');
        $I->seeElement('.js-login');
        $I->seeElement('a.btn-login');
        $I->click("a.btn-login");
        $I->seeInCurrentUrl('/dashboard/home');
        $I->see('Latest news');
    }
}
