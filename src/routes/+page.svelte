<script>
	// @ts-ignore
	import Repos from "$lib/data.yaml";
	import Test from "$lib/test.md";
	function b64_to_utf8(str) {
    const decoded = atob(str.split("base64,")[1])
    console.log("decoded", decoded)
		return decoded;
	}
	const ymlText = b64_to_utf8(Repos);
	const markdown = b64_to_utf8(Test);
</script>

<p style="white-space: pre-wrap;">Text: {ymlText}</p>
<p>Markdown: {markdown}</p>
