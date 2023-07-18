<script>
	// @ts-ignore
	import Repos from "$lib/data.yaml";
	import Test from "$lib/test.md";
	function b64_to_utf8(str) {
		return (atob(str.split("base64,")[1]));
	}
	const ymlText = b64_to_utf8(Repos);
	const markdown = b64_to_utf8(Test);
</script>

<p>Text: {ymlText}</p>
<p>Markdown: {markdown}</p>
