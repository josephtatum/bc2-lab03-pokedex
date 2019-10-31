// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('Fake Test', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const me = true;
    const you = true
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(me, you);
});
