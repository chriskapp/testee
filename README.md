TesTee
======

## About

TesTee is a simple testing framework written in javascript to run tests within 
phantomjs without depending on nodejs or any specific webserver

    Usage:
    	phantomjs testee.js [folder] [base_url]

TesTee uses a simple format to declare a test case:

    testCase('http://127.0.0.1/foo.htm', {
    	doLogin: function(){
    		Assert.equals('foo', document.getElementById('identity').value);
    
    		document.getElementById('identity').value = 'test@test.com';
    		document.getElementById('pw').value = 'test123';
    		document.getElementsByTagName('form')[0].submit();
    	},
    
    	checkLogin: function(){
    		Assert.exists(".login-success");
    		Assert.triggerNext();
    	}
    });

The first argument is the url wich gets tested and the second argument the
actual test case. Every method is sequentially evaluated. The next test method 
is trigger either through an page load i.e. an form submit or an call to the 
method Assert.triggerNext(). Every method is executed within the webpage so you 
can use every js function wich is available on the page i.e. if you have 
included jquery you could use $('#identity').val(). The assert.js is injected 
into every webpage wich offers assertion methods and handels the reporting of 
the results. See the example folder for some test case examples.

