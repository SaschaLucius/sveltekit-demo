<!-- to invoke the action from other pages add, to the form element: -->
<!-- action="/login" -->
<form method="POST">
	<label>
		Email
		<input name="email" type="email" />
	</label>
	<label>
		Password
		<input name="password" type="password" />
	</label>
	<button>Default Log in</button>
</form>

<form method="POST" action="/login?/register">
	<label>
		Email
		<input name="email" type="email" />
	</label>
	<label>
		Password
		<input name="password" type="password" />
	</label>
	<button>Special Log in</button>
</form>
