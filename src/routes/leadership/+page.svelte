<script>
	import LeadershipBox from "$lib/comps/LeadershipBox.svelte"
	import Baumann from "$lib/Headshots/Baumann.jpg";
	import Gibbons from "$lib/Headshots/Gibbons.jpg";
	import Forsyth from "$lib/Headshots/Forsyth2.jpg";
	import Meadows from "$lib/Headshots/Meadows.jpg";
	import Pritchard from "$lib/Headshots/Pritchard.jpeg";
	import Blank from "$lib/Headshots/blank.jpeg";
	import Ethan from "$lib/Headshots/Ethan.jpg";
	import PB from "$lib/Headshots/pb.jpeg";
</script>
<div>
	<div class="App-pageHelper">
		<h2>Meet Our Team: Student Staff</h2>
		<hr />
		<div class="flex-row-left">
			<LeadershipBox Name="Richard Gibbons" ImgSrc={Gibbons} Title="Richard Gibbons: Team Lead" Email="gricha1@vt.edu" />
			<LeadershipBox Name="Henry Forsyth" ImgSrc={Forsyth} Title="Henry Forsyth: Mentor/Webdev" Email="rhforsythjr@vt.edu" />
			<LeadershipBox Name="Eddie Pritchard" ImgSrc={Pritchard} Title="Eddie Pritchard: Mentor" Email="epritchard@vt.edu" />
			<LeadershipBox Name="Purv Bavishi" ImgSrc={PB} Title="Purv Bavishi: Mentor" Email="purvbavishi@vt.edu" />
			<LeadershipBox Name="Ethan James" ImgSrc={Ethan} Title="Ethan James: Mentor" Email="ethanjamesauto@vt.edu" />
		</div>
		<h2>Meet Our Team: Professors</h2>
		<hr />
		<div class="flex-row-left">
			<LeadershipBox Name="William Baumann" ImgSrc={Baumann} Title="Dr.William Baumann: Professor" Email="baumann@vt.edu" />
			<LeadershipBox Name="Toby Meadows" ImgSrc={Meadows} Title="Dr.Toby Meadows: Professor" Email="toby88@vt.edu" />
		</div>
	</div>
</div>
