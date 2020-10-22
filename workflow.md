## writing a Vue component follows: ##

1.Decide the components I need.

2.write unit tests and source code for each component;

3.style the component.

4.add snapshot tests for the finished components.

5.test the code manually in the browser. 

6.write an end-to-end test.

## what to test & how to test  ##

deciding what unit tests to write is important.If you wrote tests for every property of a  component, you would slow development and create an inefficient test suite.

deicding what to test by using a `concept of a component contract`,what is it? when you write a component to be used in the rest of application,you are defining a contract for how it should behave.Other components can assume the component will fulfill its contractual agreement and produce the agreed output if it's provided the correct input.

a good component unit test should always trigger an input and assert that the component generates the correct output.you should write tests from the perspective of a developer who's using the component but is unware of how the component functionality in implemented.


**Avoiding Boolean assertions**： When they fail, the assertion
error isn’t clear about why the test failed:** “expected false to equal true.”**



## input list ##

1.component props,it can be feed by PropsData property in Vue option.

2.User action(like a button cilci)，it can be trigger by `event` Object and some api on it(like dispatch), details on MDN

3.Vue events.

4.Data in a Vuex store.

## output list ##

1.emitted events

2.extenrnal function calls

3.class,style,etc