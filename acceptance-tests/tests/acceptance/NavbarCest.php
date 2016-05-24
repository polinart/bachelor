<?php


class NavbarCest
{
    public function _before(AcceptanceTester $I)
    {
    }

    public function _after(AcceptanceTester $I)
    {
    }

    // tests
    public function testThatUserCanOpenProfile(AcceptanceTester $I)
    {
        $I->wantTo('open user profile');
        $I->amOnPage('index.html#/dashboard/home');
        $I->wait(1);
        $I->seeElement('ul.navbar-top-links');
        $I->click('ul.navbar-top-links a.dropdown-toggle');
        $I->seeElement('ul.dropdown-menu');
        $I->click('a[href="#/dashboard/profile"]');
        $I->wait(1);
        $I->seeElement('img.avatar');
        $I->seeElement('div.card');
    }

    public function testThatUserCanOpenContacts(AcceptanceTester $I) {
        $I->wantTo('open user profile');
        $I->amOnPage('index.html#/dashboard/home');
        $I->wait(1);
        $I->seeElement('ul.navbar-top-links');
        $I->click('ul.navbar-top-links a.dropdown-toggle');
        $I->seeElement('ul.dropdown-menu');
        $I->click('a[href="#/dashboard/contacts"]');
        $I->wait(1);
        $I->see('Contacts');
        $I->seeElement('div.card');
    }

    public function testThatUserCanLogout(AcceptanceTester $I) {
        $I->wantTo('open user profile');
        $I->amOnPage('index.html#/dashboard/home');
        $I->wait(1);
        $I->seeElement('ul.navbar-top-links');
        $I->click('ul.navbar-top-links a.dropdown-toggle');
        $I->seeElement('ul.dropdown-menu');
        $I->click('a[href="#/login"]');
        $I->wait(1);
        $I->seeElement('.js-login');
    }
}
