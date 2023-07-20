<script>
    /**
	 * @type {string}
	 */
	export let ImgSrc;
    /**
	 * @type {string}
	 */
    export let Name;
    /**
	 * @type {string}
	 */
    export let Title;
    /**
	 * @type {string}
	 */
    export let Email;
</script>

<div class="leadershipBox">
    <div class="alignImage">
        <img src={ImgSrc} alt={Name + "Image"} />
    </div>
    <p>
        <em>{Title}</em>
    </p>
    <p>
        <a href={"mailto:" + Email}>{Email}</a>
</div>;

<style>
	.leadershipBox {
		margin: 5px;
		padding: 10px;
		box-shadow: 2px 2px 2px 2px gray;
		display: flex;
		justify-content: center;
		flex-direction: column;
		min-width: 12vw;
	}

	.leadershipBox img {
		height: 180px;
		width: auto;
	}

	.alignImage {
		display: flex;
		justify-content: center;
	}
</style>
