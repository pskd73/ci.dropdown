# Html Selector
It is a replacement for traditional select tag in HTML. It is almost not possible with css to apply styles for option. It uses lists to get select kind feel.

## Add Css
```<link rel="stylesheet" href="ci.dropdown.css">```
## Add Js
It requires jQuery. So include jQuery first and then this. Better to include befor the end of body
```<script src="ci.dropdown.js"></script>```

## Write your markup
```
<div class="ci-dropdown" name='my-option' id='my-dropdown'>
		<span>Options</span>
		<ul>
			<li value='fo' class='active'>First Option</li>
			<li value='so'>Second Option</li>
			<li value='to'>Third Option</li>
			<li value='fo'>Fourth Option</li>
			<li value='fo'>Fifth Option</li>
		</ul>
	</div>
	
```

- Set ```class="active"``` to li to get selected functionality.
- Use unique ```id``` for ```<div>```
- That's it. You are done! Happy Using!
