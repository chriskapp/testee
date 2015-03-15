
testCase('http://www.google.com/', {
	doSearch: function(){
		// test whether google search form exists
		Assert.exists('input[name="q"]');
		Assert.exists('form');

		// get input element
		var input = document.body.querySelector('input[name="q"]');

		// enter google search
		input.value = 'lorem ipsum';

		// if the form submit is done the next test method is automatically
		// called
		document.getElementsByTagName('form')[0].submit();
	},

	checkResult: function(){
		// we should have the div ires wich contains the result
		Assert.exists('#ires');

		// trigger next test
		Assert.triggerNext();
	},

	testGoogleObject: function(){
		// test whether google object is defined
		Assert.object(google);

		// trigger next test
		Assert.triggerNext();
	}
});
