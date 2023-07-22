<script>
	import SvelteMarkdown from "svelte-markdown";
	import NewMemberText from "$lib/markdowns/new_members.md?raw";
	import ReturningMemberText from "$lib/markdowns/returning_members.md?raw";
	import GSCard from "$lib/comps/GSCard.svelte";
	// import IconAndName from "$lib/comps/IconAndName";
	// import { GiSolderingIron } from 'react-icons/gi'
	// import { MdOutlineWavingHand } from "react-icons/md";
	// import { BsPrinterFill } from "react-icons/bs";
	// import { GiReturnArrow } from "react-icons/gi";
	// import { RxDiscordLogo } from "react-icons/rx";
	// import { BiPurchaseTagAlt } from "react-icons/bi";
	// import { GiSwipeCard } from "react-icons/gi";
</script>

<div>
	<h1 class="m-5">Getting Started:</h1>
	<p class="text-left m-5">Below is a list of options for you to engage with our lab. Select one to get started!</p>
</div>
<div class="flex justify-center items-center flex-wrap">
	<GSCard descText={"Getting Started: New Members"} label={"Click here to begin"} modalMarkdown={NewMemberText} />
	<GSCard descText={"Returning Members"} label={"Click here to begin"} modalMarkdown={ReturningMemberText} />
	<GSCard descText={"Join our Discord"} label={"Click here to begin"} modalMarkdown={""} />
	<GSCard descText={"Solder Training Information"} label={"Click here to begin"} modalMarkdown={""} />
	<GSCard descText={"Get Something 3D Printed"} label={"Click here to begin"} modalMarkdown={""} />
	<GSCard descText={"Submit a Purchase Request"} label={"Click here to begin"} modalMarkdown={""} />
	<GSCard descText={"Get Lab Swipe Access"} label={"Click here to begin"} modalMarkdown={""} />
</div>

<!-- <IconAndName icon={<MdOutlineWavingHand />} title="Getting Started: New Members" buttonTitle="Click here to begin" color="#f9f9f9">

	  <IconAndName icon={<GiReturnArrow> </GiReturnArrow>} title="Returning Members" buttonTitle="Click here to begin" color="#f9f9f9">
	  <IconAndName href="https://discord.gg/DjFCeQEMmE" icon={<RxDiscordLogo> </RxDiscordLogo>} title="Join our Discord" buttonTitle="Click here to begin" color="#f9f9f9"></IconAndName>
	  <IconAndName href="/soldering" icon={<GiSolderingIron> </GiSolderingIron>} title="Solder Training Information" buttonTitle="Click here to begin" color="#f9f9f9"></IconAndName>
	  <IconAndName href="https://github.com/Amp-Lab-at-VT/print-queue/issues/new?assignees=octocat&labels=3d-print&template=3d_print.yml&title=%5B3d-print%5D%3A+" icon={<BsPrinterFill> </BsPrinterFill>} title="Get Something 3D Printed" buttonTitle="Click here to begin" color="#f9f9f9"></IconAndName>
	  <IconAndName icon={<BiPurchaseTagAlt> </BiPurchaseTagAlt>} title="Submit a Purchase Request" buttonTitle="Click here to begin" color="#f9f9f9">
		<p>
		  It is now easier than ever to get what you need! Just head on over to the Discord, and submit your bill of materials in the <b>purchase request</b> channel
		</p>
	  </IconAndName>
	  <IconAndName href="https://docs.google.com/forms/d/12icOKHbNeDZ8ujELWmOtG40Jp1nv_s4Irs7IfWHoRPA/edit?ts=63d27e7e" icon={<GiSwipeCard> </GiSwipeCard>} title="Get Lab Swipe Access" buttonTitle="Click here to begin" color="#f9f9f9" />
-->
<style>
</style>
